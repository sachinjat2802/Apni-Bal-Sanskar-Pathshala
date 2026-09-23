import React from 'react';
import { render, screen } from '@testing-library/react';
import RootLayout, { metadata } from '../layout';

interface ScriptProps extends React.ScriptHTMLAttributes<HTMLScriptElement> {
  strategy?: 'beforeInteractive' | 'lazyOnload' | 'afterInteractive' | 'worker';
}

// Mock Next.js Script component
jest.mock('next/script', () => {
  return function MockScript(props: ScriptProps) {
    return <script data-testid="mock-script" {...props} />;
  };
});

describe('RootLayout', () => {
  let originalConsoleError: typeof console.error;

  beforeAll(() => {
    // Suppress console.error during tests to avoid the hydration warning
    // caused by rendering <html> inside a <div> or <html>.
    originalConsoleError = console.error;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.error = (...args: any[]) => {
      if (
        typeof args[0] === 'string' &&
        args[0].includes('cannot be a child of') &&
        args[0].includes('This will cause a hydration error.')
      ) {
        return;
      }
      originalConsoleError(...args);
    };
  });

  afterAll(() => {
    // Restore console.error
    console.error = originalConsoleError;
  });

  it('renders children correctly', () => {
    render(
      <RootLayout>
        <div data-testid="child-element">Test Content</div>
      </RootLayout>
    );

    expect(screen.getByTestId('child-element')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('exports correct metadata', () => {
    expect(metadata.title).toBe('Uthan seva sansthan');
    expect(metadata.description).toBe('Apni-Bal-Sanskar-Pathshala');
  });

  it('includes required global scripts', () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    const scripts = screen.getAllByTestId('mock-script');

    // Test for a few key scripts
    const scriptSrcs = scripts.map(s => s.getAttribute('src'));
    expect(scriptSrcs).toContain('/js/jquery.min.js');
    expect(scriptSrcs).toContain('/js/bootstrap.bundle.min.js');
    expect(scriptSrcs).toContain('/js/custom.js');

    // Check total number of scripts matches the layout
    expect(scripts.length).toBe(15);
  });
});
