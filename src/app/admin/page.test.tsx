import { render, screen, fireEvent } from '@testing-library/react';
import Page from './page';

// Define a type for the window to avoid "any" and make typescript happy
declare global {
  interface Window {
    login?: () => void;
    logout?: () => void;
  }
}

describe('Admin Page', () => {
  beforeEach(() => {
    // Reset document body
    document.body.innerHTML = '';
  });

  const setup = () => {
    const { container } = render(<Page />);
    // Evaluate the inline script to make login() and logout() available globally
    const script = container.querySelector('script');
    if (script) {
      window.eval(script.innerHTML);
    }
    return container;
  };

  it('renders login form initially', () => {
    const container = setup();
    expect(screen.getByText('Admin Login')).toBeInTheDocument();

    const loginContainer = container.querySelector('#login-container');
    const dashboardContainer = container.querySelector('#dashboard-container');

    expect(loginContainer).not.toHaveClass('hidden');
    expect(dashboardContainer).toHaveClass('hidden');
    expect(container.querySelector('#error-msg')).toHaveClass('hidden');
  });

  it('shows error on invalid login', () => {
    const container = setup();
    const usernameInput = container.querySelector('#username') as HTMLInputElement;
    const passwordInput = container.querySelector('#password') as HTMLInputElement;

    fireEvent.change(usernameInput, { target: { value: 'wrong' } });
    fireEvent.change(passwordInput, { target: { value: 'wrong' } });

    // Call the global login function directly since inline onclick
    // doesn't trigger automatically in JSDOM fireEvent
    if (typeof window.login === 'function') {
      window.login();
    }

    const errorMsg = container.querySelector('#error-msg');
    expect(errorMsg).not.toHaveClass('hidden');

    const loginContainer = container.querySelector('#login-container');
    const dashboardContainer = container.querySelector('#dashboard-container');
    expect(loginContainer).not.toHaveClass('hidden');
    expect(dashboardContainer).toHaveClass('hidden');
  });

  it('shows dashboard on successful login', () => {
    const container = setup();
    const usernameInput = container.querySelector('#username') as HTMLInputElement;
    const passwordInput = container.querySelector('#password') as HTMLInputElement;

    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    if (typeof window.login === 'function') {
      window.login();
    }

    const loginContainer = container.querySelector('#login-container');
    const dashboardContainer = container.querySelector('#dashboard-container');

    expect(loginContainer).toHaveClass('hidden');
    expect(dashboardContainer).not.toHaveClass('hidden');
    expect(screen.getByText('Admin Dashboard')).toBeInTheDocument();
  });

  it('logs out successfully', () => {
    const container = setup();

    // First login
    const usernameInput = container.querySelector('#username') as HTMLInputElement;
    const passwordInput = container.querySelector('#password') as HTMLInputElement;

    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    if (typeof window.login === 'function') {
      window.login();
    }

    // Then logout
    if (typeof window.logout === 'function') {
      window.logout();
    }

    const loginContainer = container.querySelector('#login-container');
    const dashboardContainer = container.querySelector('#dashboard-container');

    // Check that we're back to the login screen
    expect(loginContainer).not.toHaveClass('hidden');
    expect(dashboardContainer).toHaveClass('hidden');

    // Check that inputs are cleared
    expect((container.querySelector('#username') as HTMLInputElement).value).toBe('');
    expect((container.querySelector('#password') as HTMLInputElement).value).toBe('');
  });
});
