import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home Page', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('To get started, edit the page.tsx file.')
  })

  it('renders descriptive text', () => {
    render(<Home />)

    expect(screen.getByText(/Looking for a starting point or more instructions\?/i)).toBeInTheDocument()
  })

  it('renders Next.js and Vercel logos', () => {
    render(<Home />)

    const nextLogo = screen.getByAltText('Next.js logo')
    expect(nextLogo).toBeInTheDocument()

    const vercelLogo = screen.getByAltText('Vercel logomark')
    expect(vercelLogo).toBeInTheDocument()
  })

  it('renders useful links', () => {
    render(<Home />)

    const deployLink = screen.getByRole('link', { name: /Deploy Now/i })
    expect(deployLink).toBeInTheDocument()
    expect(deployLink).toHaveAttribute('href', expect.stringContaining('vercel.com/new'))

    const docsLink = screen.getByRole('link', { name: /Documentation/i })
    expect(docsLink).toBeInTheDocument()
    expect(docsLink).toHaveAttribute('href', expect.stringContaining('nextjs.org/docs'))

    const templatesLink = screen.getByRole('link', { name: /Templates/i })
    expect(templatesLink).toBeInTheDocument()
    expect(templatesLink).toHaveAttribute('href', expect.stringContaining('vercel.com/templates'))

    const learningLink = screen.getByRole('link', { name: /Learning/i })
    expect(learningLink).toBeInTheDocument()
    expect(learningLink).toHaveAttribute('href', expect.stringContaining('nextjs.org/learn'))
  })
})
