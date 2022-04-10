import { cleanup, fireEvent, render } from '@testing-library/react'
import SearchSection from '@/components/SearchSection'

afterEach(cleanup)

const setup = () => {
  const { getByTestId, getByLabelText } = render(
    <SearchSection countries={[]} />,
  )
  const searchSection = getByTestId('search-bar') as HTMLInputElement
  return { searchSection, getByTestId, getByLabelText }
}

describe('<SearchSection />', () => {
  test('Always renders a textbox with type="text"', () => {
    const { searchSection } = setup()
    expect(searchSection).toHaveAttribute('type', 'text')
  }),
    test('Search term value updates on change', () => {
      const { searchSection } = setup()
      fireEvent.change(searchSection, { target: { value: 'test' } })
      expect(searchSection.value).toBe('test')
    }),
    test('Show clear search button input is not empty', () => {
      const { searchSection, getByTestId } = setup()
      fireEvent.change(searchSection, { target: { value: 'test' } })
      const button = getByTestId('clear-search-btn')
      expect(button).toBeInTheDocument()
    }),
    test('Hide clear search button when input is empty', () => {
      const { getByTestId } = setup()
      expect(() => getByTestId('clear-search-btn')).toThrow()
    })
})
