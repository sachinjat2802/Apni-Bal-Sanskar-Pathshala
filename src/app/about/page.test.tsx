import { render, screen } from '@testing-library/react'
import Page from './page'

describe('About Page', () => {
  it('renders the preloader', () => {
    const { container } = render(<Page />)
    expect(container.querySelector('.loader')).toBeInTheDocument()
  })

  it('renders specific content injected via dangerouslySetInnerHTML', () => {
    const { container } = render(<Page />)

    // Test for header-area which is present in the innerHTML string
    expect(container.querySelector('.header-area')).toBeInTheDocument()

    // Since the content is quite large and injected via innerHTML, we check
    // that at least some key elements from the HTML string are parsed and added to the DOM.
    expect(container.querySelector('.footer-contact')).toBeInTheDocument()

    // Check for specific text content that should be in the document
    expect(screen.getByText('Contact info')).toBeInTheDocument()
  })

  it('renders the Whatsapp button', () => {
    const { container } = render(<Page />)
    const whatsappBtn = container.querySelector('.whatsapp-btn')
    expect(whatsappBtn).toBeInTheDocument()
    expect(whatsappBtn).toHaveAttribute('href', 'https://wa.me/919828603138')
  })
})
