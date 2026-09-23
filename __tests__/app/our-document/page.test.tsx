import { render } from '@testing-library/react';
import Page from '../../../src/app/our-document/page';

describe('Our Documents Page', () => {
  it('renders the preloader', () => {
    const { container } = render(<Page />);
    const preloader = container.querySelector('.loader');
    expect(preloader).toBeInTheDocument();
  });

  it('renders the header area with contact info', () => {
    const { container } = render(<Page />);
    const address = container.querySelector('a[href="/our-document.html#"]');
    expect(address?.textContent).toContain('31, Green Park Extension, Nangal Jaisa Bohra, Jaipur.');
  });

  it('renders the page title area', () => {
    const { container } = render(<Page />);
    const title = container.querySelector('.page-title-area h2');
    expect(title?.textContent).toBe('Our Documents');
  });

  it('renders the documents section with images', () => {
    const { container } = render(<Page />);
    const documentImages = container.querySelectorAll('.our-documents img');
    expect(documentImages.length).toBe(3);

    // Check specific image sources based on the original component
    expect(documentImages[0].getAttribute('src')).toBe('/images/documents/1.jpeg');
    expect(documentImages[1].getAttribute('src')).toBe('/images/documents/2.jpeg');
    expect(documentImages[2].getAttribute('src')).toBe('/images/documents/1.jpeg');
  });

  it('renders the footer area', () => {
    const { container } = render(<Page />);
    const footer = container.querySelector('.footer-area');
    expect(footer).toBeInTheDocument();
  });
});
