import React from 'react';
import { render } from '@testing-library/react';
import Page from '../page';

describe('Donation Details Page', () => {
  it('renders successfully', () => {
    const { container } = render(<Page />);
    expect(container).toBeTruthy();
  });
});
