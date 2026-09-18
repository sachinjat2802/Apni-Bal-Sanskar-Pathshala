import { render, screen } from '@testing-library/react';
import Page from './page';

describe('About Page', () => {
  it('renders without crashing and displays contact info', () => {
    render(<Page />);

    // Check if the Contact info heading is present
    expect(screen.getByText('Contact info')).toBeInTheDocument();

    // Check if the donation modal title is present
    const donationHeadings = screen.getAllByText('Your Donation');
    expect(donationHeadings.length).toBeGreaterThan(0);
  });
});
