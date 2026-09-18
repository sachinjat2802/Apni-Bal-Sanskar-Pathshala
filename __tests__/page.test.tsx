import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

describe('Home', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('To get started, edit the page.tsx file.')
  })

  it('renders Next.js logo', () => {
    const nextLogo = screen.getByAltText('Next.js logo')
    expect(nextLogo).toBeInTheDocument()
    expect(nextLogo).toHaveAttribute('src', '/next.svg')
  })

  it('renders templates link', () => {
    const templatesLink = screen.getByRole('link', { name: /Templates/i })
    expect(templatesLink).toBeInTheDocument()
    expect(templatesLink).toHaveAttribute('href', expect.stringContaining('https://vercel.com/templates'))
  })

  it('renders learning link', () => {
    const learningLink = screen.getByRole('link', { name: /Learning/i })
    expect(learningLink).toBeInTheDocument()
    expect(learningLink).toHaveAttribute('href', expect.stringContaining('https://nextjs.org/learn'))
  })

  it('renders deploy link and vercel logo', () => {
    const deployLink = screen.getByRole('link', { name: /Deploy Now/i })
    expect(deployLink).toBeInTheDocument()
    expect(deployLink).toHaveAttribute('href', expect.stringContaining('https://vercel.com/new'))

    const vercelLogo = screen.getByAltText('Vercel logomark')
    expect(vercelLogo).toBeInTheDocument()
    expect(vercelLogo).toHaveAttribute('src', '/vercel.svg')
  })

  it('renders documentation link', () => {
    const docLink = screen.getByRole('link', { name: /Documentation/i })
    expect(docLink).toBeInTheDocument()
    expect(docLink).toHaveAttribute('href', expect.stringContaining('https://nextjs.org/docs'))
  })
})
