const fs = require('fs');
const path = require('path');

// We need jQuery for the IIFE part of custom.js
const $ = require('jquery');
window.$ = $;
window.jQuery = $;

describe('custom.js', () => {
  beforeEach(() => {
    // Reset document
    document.documentElement.className = '';
    document.body.innerHTML = `
      <div class="main-nav"></div>
      <div id="search-overlay" style="display:none;"></div>
      <button id="search-btn"></button>
      <button id="close-btn"></button>
      <div class="loader"></div>
      <div class="go-top"></div>
      <input id="slider" type="checkbox">
      <div class="switch-box"></div>
      <ul class="accordion">
        <li><a href="#">Link 1</a><p>Content 1</p></li>
        <li><a href="#">Link 2</a><p>Content 2</p></li>
      </ul>
      <form class="newsletter-form"></form>
      <div id="validator-newsletter"></div>
    `;
    localStorage.clear();

    // Load custom.js content
    const scriptPath = path.resolve(__dirname, 'custom.js');
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');

    // Create mock plugins to avoid errors
    $.fn.meanmenu = jest.fn();
    $.fn.niceSelect = jest.fn();
    $.fn.modalVideo = jest.fn();
    $.fn.owlCarousel = jest.fn();
    $.fn.appear = jest.fn();
    $.fn.validator = jest.fn().mockReturnValue({ on: jest.fn() });
    $.fn.ajaxChimp = jest.fn();
    $.fn.animate = jest.fn();

    // Mock for testing animation/fade methods
    $.fn.fadeIn = function() { this.show(); return this; };
    $.fn.fadeOut = function(ms) { this.hide(); return this; };
    $.fn.show = function() { this.css('display', 'block'); return this; };
    $.fn.hide = function() { this.css('display', 'none'); return this; };
    $.fn.slideDown = function() { this.show(); return this; };
    $.fn.slideUp = function() { this.hide(); return this; };
    $.fn.slideToggle = function() {
      return this.each(function() {
        const el = $(this);
        if (el.css('display') === 'none') el.show(); else el.hide();
      });
    };

    // Global mocks
    window.WOW = class { init() {} };
    window.lightbox = { option: jest.fn() };

    // We mock jQuery ready to just execute the function
    const originalReady = $.fn.ready;
    $.fn.ready = function(fn) {
      fn($);
      return this;
    };

    // Extract the IIFE from custom.js and run it
    const iifeMatch = scriptContent.match(/jQuery\(function \(\$\) \{([\s\S]*?)\}\(jQuery\)\);/);
    if (iifeMatch && iifeMatch[1]) {
      const initFn = new Function('$', iifeMatch[1]);
      initFn($);
    }

    // And handle the theme functions that are outside the IIFE
    const themeCode = scriptContent.split('// function to set a given theme/color-scheme')[1];
    window.eval('// function to set a given theme/color-scheme\n' + themeCode);
  });

  describe('Theme Functions', () => {
    test('setTheme sets localStorage and document className', () => {
      window.setTheme('theme-dark');

      expect(localStorage.getItem('findo_theme')).toBe('theme-dark');
      expect(document.documentElement.className).toBe('theme-dark');
    });

    test('toggleTheme toggles from dark to light', () => {
      localStorage.setItem('findo_theme', 'theme-dark');

      window.toggleTheme();

      expect(localStorage.getItem('findo_theme')).toBe('theme-light');
      expect(document.documentElement.className).toBe('theme-light');
    });

    test('toggleTheme toggles from light to dark', () => {
      localStorage.setItem('findo_theme', 'theme-light');

      window.toggleTheme();

      expect(localStorage.getItem('findo_theme')).toBe('theme-dark');
      expect(document.documentElement.className).toBe('theme-dark');
    });
  });

  describe('UI interactions', () => {
    test('scroll adds menu-shrink class when scrolled past 50px', () => {
      // Simulate scroll past 50
      $.fn.scrollTop = jest.fn().mockReturnValue(100);
      $(window).trigger('scroll');

      expect($('.main-nav').hasClass('menu-shrink')).toBe(true);

      // Simulate scroll to top
      $.fn.scrollTop = jest.fn().mockReturnValue(0);
      $(window).trigger('scroll');

      expect($('.main-nav').hasClass('menu-shrink')).toBe(false);
    });

    test('search button toggles overlay', () => {
      $('#search-btn').trigger('click');
      expect($('#search-overlay').css('display')).toBe('block');

      $('#close-btn').trigger('click');
      expect($('#search-overlay').css('display')).toBe('none');
    });

    test('go-top button appears on scroll past 500px', () => {
      // It's wrapped in $(function() {}) inside the IIFE, so it uses window scroll
      // Because we mock $(function(){}), we need to ensure we're triggering the correct event

      // Scroll > 500
      $.fn.scrollTop = jest.fn().mockReturnValue(600);
      $(window).trigger('scroll');

      expect($('.go-top').hasClass('active')).toBe(true);

      // Scroll < 500
      $.fn.scrollTop = jest.fn().mockReturnValue(400);
      $(window).trigger('scroll');

      expect($('.go-top').hasClass('active')).toBe(false);
    });

    test('go-top button animates to top when clicked', () => {
      $('.go-top').trigger('click');

      expect($.fn.animate).toHaveBeenCalledWith({ scrollTop: '0' }, 500);
    });

    test('accordion toggles correctly', () => {
      const secondLink = $('.accordion > li:eq(1) a');

      // Initial state - first is active
      expect($('.accordion > li:eq(0) a').hasClass('active')).toBe(true);

      // Click second
      secondLink.trigger('click');

      // Now second is active
      expect(secondLink.hasClass('active')).toBe(true);
      expect($('.accordion > li:eq(0) a').hasClass('active')).toBe(false);
    });
  });
});
