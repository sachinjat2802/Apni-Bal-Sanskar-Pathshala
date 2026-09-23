import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Contact Page', () => {
  it('renders the contact page without crashing', () => {
    const { container } = render(<Page />);

    // Check if some key elements from the raw HTML are present
    expect(container.querySelector('.header-area')).toBeInTheDocument();
    expect(container.querySelector('.footer-contact')).toBeInTheDocument();

    // Verify specific content exists in the rendered HTML
    expect(screen.getByText('Contact info')).toBeInTheDocument();

    // Check for the presence of phone numbers
    expect(screen.getByText('9828603138')).toBeInTheDocument();
  });
});
