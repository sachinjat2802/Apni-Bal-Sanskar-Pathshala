import { render } from '@testing-library/react';
import AdminPage from './page';

describe('Admin Page', () => {
  it('renders the login and dashboard containers', () => {
    const { container } = render(<AdminPage />);

    // The page uses dangerouslySetInnerHTML to render standard HTML components.
    // We can query the container for the elements we expect to be present.
    const loginContainer = container.querySelector('#login-container');
    const dashboardContainer = container.querySelector('#dashboard-container');
    const errorMsg = container.querySelector('#error-msg');

    expect(loginContainer).toBeInTheDocument();
    expect(dashboardContainer).toBeInTheDocument();
    expect(errorMsg).toBeInTheDocument();

    // Additional checks on initial state classes (e.g. visibility)
    expect(loginContainer).not.toHaveClass('hidden');
    expect(dashboardContainer).toHaveClass('hidden');
    expect(errorMsg).toHaveClass('hidden');
  });
});
