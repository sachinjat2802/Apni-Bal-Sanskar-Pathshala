import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Gallery Page', () => {
  it('renders the gallery page correctly', () => {
    const { container } = render(<Page />);
    expect(container).toBeInTheDocument();
  });
});
