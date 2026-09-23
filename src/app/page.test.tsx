import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page'

test('Home page renders correctly', () => {
  render(<Home />)

  // Verify heading
  expect(screen.getByRole('heading', { level: 1, name: 'To get started, edit the page.tsx file.' })).toBeDefined()

  // Verify links using text confirmed in the file trace
  const deployLink = screen.getByRole('link', { name: /deploy now/i })
  expect(deployLink).toBeDefined()
  expect(deployLink.getAttribute('href')).toBe('https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app')

  const docsLink = screen.getByRole('link', { name: /documentation/i })
  expect(docsLink).toBeDefined()
  expect(docsLink.getAttribute('href')).toBe('https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app')

  const learningLink = screen.getByRole('link', { name: /learning/i })
  expect(learningLink).toBeDefined()

  // Verify Image (Vercel logo)
  const vercelLogo = screen.getByAltText('Vercel logomark')
  expect(vercelLogo).toBeDefined()
})
