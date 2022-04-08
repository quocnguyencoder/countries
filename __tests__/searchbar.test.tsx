import { cleanup, fireEvent, render } from '@testing-library/react'
import SearchBar from '@/components/SearchBar'

afterEach(cleanup)

const setup = () => {
  const { getByTestId } = render(<SearchBar />)
  const searchBar = getByTestId('search-bar') as HTMLInputElement
  return { searchBar }
}

describe('<SearchBar />', () => {
  test('Renders a textbox with type="text"', () => {
    const { searchBar } = setup()
    expect(searchBar).toHaveAttribute('type', 'text')
  }),
    test('Search term value update on change', () => {
      const { searchBar } = setup()
      fireEvent.change(searchBar, { target: { value: 'test' } })
      expect(searchBar.value).toBe('test')
    })
})
