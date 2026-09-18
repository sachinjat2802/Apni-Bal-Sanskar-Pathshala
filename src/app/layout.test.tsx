import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "./layout";
import React from "react";

// Mock next/script
jest.mock("next/script", () => {
  return function MockScript({ src, strategy }: { src: string; strategy?: string }) {
    // eslint-disable-next-line @next/next/no-sync-scripts
    return <script src={src} data-strategy={strategy} data-testid="mock-script" />;
  };
});

describe("RootLayout", () => {
  const originalError = console.error;
  beforeAll(() => {
    // Suppress React warning about rendering html inside html/div
    console.error = (...args) => {
      if (typeof args[0] === 'string' && /cannot be a child of/.test(args[0])) return;
      if (typeof args[0] === 'string' && /validateDOMNesting/.test(args[0])) return;
      originalError.call(console, ...args);
    };
  });

  afterAll(() => {
    console.error = originalError;
  });

  it("renders children correctly", () => {
    // Render the layout component and grab its returned elements directly
    // to avoid React warning and TestingLibrary wrapper issues with <html>
    render(
      <RootLayout>
        <div data-testid="child-element">Test Content</div>
      </RootLayout>
    );
    expect(screen.getByTestId("child-element")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("exports the correct metadata", () => {
    expect(metadata.title).toBe("Uthan seva sansthan");
    expect(metadata.description).toBe("Apni-Bal-Sanskar-Pathshala");
  });

  it("includes global CSS files", () => {
    render(
      <RootLayout>
        <div />
      </RootLayout>
    );

    // React Testing Library moves elements from head to head/body based on its parsing
    // But we can just search the document for link elements
    const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    const hrefs = stylesheets.map(link => link.getAttribute('href'));

    expect(hrefs).toContain("/css/bootstrap.min.css");
    expect(hrefs).toContain("/css/style-1.css");
    expect(hrefs).toContain("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");
  });

  it("includes global scripts with correct strategies", () => {
    render(
      <RootLayout>
        <div />
      </RootLayout>
    );

    const scripts = screen.getAllByTestId("mock-script");
    const scriptProps = scripts.map(script => ({
      src: script.getAttribute("src"),
      strategy: script.getAttribute("data-strategy"),
    }));

    // Check some key scripts
    expect(scriptProps).toContainEqual({
      src: "/js/jquery.min.js",
      strategy: "beforeInteractive",
    });

    expect(scriptProps).toContainEqual({
      src: "/js/bootstrap.bundle.min.js",
      strategy: "lazyOnload",
    });

    expect(scriptProps).toContainEqual({
      src: "/js/custom.js",
      strategy: "lazyOnload",
    });
  });
});
