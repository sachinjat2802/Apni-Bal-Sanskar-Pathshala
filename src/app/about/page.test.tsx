import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Page from './page'

describe('About Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<Page />)
    expect(container).toBeInTheDocument()
  })

  it('renders the Contact info section', () => {
    render(<Page />)
    const heading = screen.getByText('Contact info')
    expect(heading).toBeInTheDocument()
  })

  it('renders the Donation modal trigger or title', () => {
    render(<Page />)
    const donationElements = screen.getAllByText('Your Donation')
    expect(donationElements.length).toBeGreaterThan(0)
  })
})
