import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Page from '../page';

describe('Donations Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<Page />);
    expect(container).toBeTruthy();
  });

  it('renders the preloader', () => {
    const { container } = render(<Page />);
    const loader = container.querySelector('.loader');
    expect(loader).toBeTruthy();
  });

  it('renders the header area with contact info', () => {
    const { container } = render(<Page />);
    const contactPhone = container.querySelector('a[href="tel:9785488455"]');
    expect(contactPhone).toBeTruthy();
    expect(contactPhone?.textContent).toContain('9785488455');
  });

  it('renders donation items', () => {
    const { container } = render(<Page />);
    const donationItems = container.querySelectorAll('.donation-item');
    // Check that we render at least one donation item
    expect(donationItems.length).toBeGreaterThan(0);
  });
});
