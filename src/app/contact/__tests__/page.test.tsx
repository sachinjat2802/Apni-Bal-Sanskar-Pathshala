import { render } from '@testing-library/react';
import Page from '../page';

describe('Contact Page', () => {
  it('renders correctly', () => {
    const { container } = render(<Page />);

    // Test that the page renders without crashing
    expect(container).toBeInTheDocument();

    // Ensure that contact specific elements exist
    expect(container.querySelector('.contact-info-area')).toBeInTheDocument();
    expect(container.querySelector('.contact-area')).toBeInTheDocument();

    // Ensure that the contact form exists
    expect(container.querySelector('form#contactForm')).toBeInTheDocument();
    expect(container.querySelector('input[name="name"]')).toBeInTheDocument();
    expect(container.querySelector('input[name="email"]')).toBeInTheDocument();
    expect(container.querySelector('input[name="phone_number"]')).toBeInTheDocument();
    expect(container.querySelector('input[name="msg_subject"]')).toBeInTheDocument();
    expect(container.querySelector('textarea[name="message"]')).toBeInTheDocument();
    expect(container.querySelector('button[type="submit"]')).toBeInTheDocument();

    // Ensure contact details exist
    expect(container.textContent).toContain('31, Green Park Extension, Nangal Jaisa Bohra, Jaipur');
  });
});
