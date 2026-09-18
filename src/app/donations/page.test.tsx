import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Donations Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<Page />);
    expect(container).toBeInTheDocument();
  });

  it('renders the Contact info in footer', () => {
    render(<Page />);
    expect(screen.getByText('Contact info')).toBeInTheDocument();
  });

  it('contains the correct copyright text', () => {
    render(<Page />);
    expect(screen.getByText(/Uthan seva sansthan/i)).toBeInTheDocument();
  });

  it('renders the HTML via dangerouslySetInnerHTML', () => {
    const { container } = render(<Page />);
    // Check if some specific classes from the raw HTML exist
    expect(container.querySelector('.header-area')).toBeInTheDocument();
    expect(container.querySelector('.footer-contact')).toBeInTheDocument();
    expect(container.querySelector('.whatsapp-btn')).toBeInTheDocument();
  });
});
