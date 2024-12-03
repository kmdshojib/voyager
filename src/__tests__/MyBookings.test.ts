import React from 'react'
import { render, screen } from '@testing-library/react'
import MyBookings from '@/app/mybookings/[id]/page'
import '@testing-library/jest-dom'

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
    }
  },
  useParams() {
    return {
      id: '123'
    }
  }
}))

describe('MyBookings Page', () => {
  it('renders a heading', async () => {
    // Render the component
    // render(await MyBookings({ params: { id: '123' } }))

    // Use findByRole instead of getByRole for async rendering
    const heading = await screen.findByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})