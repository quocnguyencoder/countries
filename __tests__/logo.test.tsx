import { render, screen } from '@testing-library/react'
import Logo from '@/components/Logo'

describe('<Logo />', () => {
  test('Renders a logo image with alt = "Logo"', () => {
    render(<Logo />)
    const logo = screen.getByRole('img')
    expect(logo).toHaveAttribute('alt', 'Logo')
  })
})
