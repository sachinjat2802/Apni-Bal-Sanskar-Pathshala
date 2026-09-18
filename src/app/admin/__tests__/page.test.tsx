import { render } from '@testing-library/react';
import Page from '../page';

describe('Admin Page JS Logic', () => {
  let login: any;
  let logout: any;

  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = '';

    // Get HTML from the component
    render(<Page />);

    // Extract script and execute to define global functions
    const scripts = document.querySelectorAll('script');
    let scriptContent = '';
    scripts.forEach(s => {
      scriptContent += s.textContent + '\n';
    });

    if (scriptContent) {
      // Execute the script in window context
      const scriptEl = document.createElement('script');
      scriptEl.textContent = `
        ${scriptContent}
        window.login = login;
        window.logout = logout;
      `;
      document.body.appendChild(scriptEl);

      // Access the globally defined functions
      login = (window as any).login;
      logout = (window as any).logout;
    }
  });

  it('should define login and logout functions', () => {
    expect(typeof login).toBe('function');
    expect(typeof logout).toBe('function');
  });

  it('should show error message for invalid credentials', () => {
    const uInput = document.getElementById('username') as HTMLInputElement;
    const pInput = document.getElementById('password') as HTMLInputElement;
    const errorMsg = document.getElementById('error-msg')!;

    uInput.value = 'wrong';
    pInput.value = 'wrong';

    login();

    expect(errorMsg.classList.contains('hidden')).toBe(false);
  });

  it('should show dashboard and hide login on valid credentials', () => {
    const uInput = document.getElementById('username') as HTMLInputElement;
    const pInput = document.getElementById('password') as HTMLInputElement;
    const loginContainer = document.getElementById('login-container')!;
    const dashboardContainer = document.getElementById('dashboard-container')!;

    uInput.value = 'admin';
    pInput.value = 'password';

    login();

    expect(loginContainer.classList.contains('hidden')).toBe(true);
    expect(dashboardContainer.classList.contains('hidden')).toBe(false);
  });

  it('should restore login view on logout', () => {
    const uInput = document.getElementById('username') as HTMLInputElement;
    const pInput = document.getElementById('password') as HTMLInputElement;
    const loginContainer = document.getElementById('login-container')!;
    const dashboardContainer = document.getElementById('dashboard-container')!;

    // First login
    uInput.value = 'admin';
    pInput.value = 'password';
    login();

    // Then logout
    logout();

    expect(loginContainer.classList.contains('hidden')).toBe(false);
    expect(dashboardContainer.classList.contains('hidden')).toBe(true);
    expect(uInput.value).toBe('');
    expect(pInput.value).toBe('');
  });
});
