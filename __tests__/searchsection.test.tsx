import { cleanup, fireEvent, render } from '@testing-library/react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure, mount } from 'enzyme'
import { useRouter } from 'next/router'
import SearchSection from '@/components/SearchSection'
import toSpinalCase from '@/helpers/toSpinalCase'
import Country from '@/interfaces/country'
import testData from '../test-data/countries-test-data'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

afterEach(cleanup)
configure({ adapter: new Adapter() })
const setup = (data: Country[]) => {
  const { getByTestId, getByLabelText, getAllByRole } = render(
    <SearchSection countries={data} />,
  )

  const searchSection = getByTestId('search-section') as HTMLDivElement
  const searchBar = getByTestId('search-bar') as HTMLInputElement

  return {
    searchSection,
    searchBar,
    getByTestId,
    getByLabelText,
    getAllByRole,
  }
}

const data = testData as Country[]

describe('<SearchSection />', () => {
  test('Always renders a search bar with type="text"', () => {
    const { searchBar } = setup([])
    expect(searchBar).toHaveAttribute('type', 'text')
  }),
    test('Search term value updates on change', () => {
      const { searchBar } = setup([])
      fireEvent.change(searchBar, { target: { value: 'test' } })
      expect(searchBar.value).toBe('test')
    }),
    test('Show clear search button input is not empty', () => {
      const { searchBar, getByTestId } = setup([])
      fireEvent.change(searchBar, { target: { value: 'test' } })
      const button = getByTestId('clear-search-btn')
      expect(button).toBeInTheDocument()
    }),
    test('Hide clear search button when input is empty', () => {
      const { getByTestId } = setup([])
      expect(() => getByTestId('clear-search-btn')).toThrow()
    }),
    test('Show results section when focus', () => {
      const { searchSection, getByTestId } = setup([])
      fireEvent.focusIn(searchSection)
      const resultsSection = getByTestId('results-section')
      expect(resultsSection).toBeInTheDocument()
    }),
    test('Hide results section when loses focus', () => {
      const { searchSection, getByTestId } = setup([])
      fireEvent.focusIn(searchSection)
      fireEvent.focusOut(searchSection)
      expect(() => getByTestId('results-section')).toThrow()
    }),
    test('Filter countries correctly: have results', () => {
      const { searchSection, searchBar, getAllByRole } = setup(data)
      fireEvent.focusIn(searchSection)
      fireEvent.change(searchBar, { target: { value: 'vi' } })
      const listItems = getAllByRole('listitem')
      expect(listItems).toHaveLength(8)
    }),
    test('Filter countries correctly: have 1 result', () => {
      const { searchSection, searchBar, getAllByRole } = setup(data)
      fireEvent.focusIn(searchSection)
      fireEvent.change(searchBar, { target: { value: 'vie' } })
      const listItems = getAllByRole('listitem')
      expect(listItems).toHaveLength(1)
    }),
    test('Filter countries correctly: no results', () => {
      const { searchSection, searchBar, getByTestId } = setup(data)
      fireEvent.focusIn(searchSection)
      fireEvent.change(searchBar, { target: { value: 'vie23f' } })
      const resultsList = () => getByTestId('results-list')
      expect(resultsList).toThrow()
    }),
    test('Press "Enter" to select a country and navigate to detail page', () => {
      const searchSection = mount(<SearchSection countries={data} />)

      const push = jest.fn()
      ;(useRouter as jest.Mock).mockImplementation(() => ({
        push,
      }))

      searchSection
        .find('input')
        .simulate('focus')
        .simulate('keyup', { key: 'Enter' })

      const expectedRoute = `/detail/${toSpinalCase(data[0].name.common)}`

      expect(push).toHaveBeenCalledWith(expectedRoute)
    }),
    test('Change selected country by keyboard: Up and Down Arrow', () => {
      const searchSection = mount(<SearchSection countries={data} />)

      const push = jest.fn()
      ;(useRouter as jest.Mock).mockImplementation(() => ({
        push,
      }))

      searchSection
        .find('input')
        .simulate('focus')
        .simulate('keyup', { key: 'ArrowDown' })
        .simulate('keyup', { key: 'ArrowDown' })
        .simulate('keyup', { key: 'ArrowDown' })
        .simulate('keyup', { key: 'ArrowUp' })
        .simulate('keyup', { key: 'Enter' })

      const expectedRoute = `/detail/${toSpinalCase(data[2].name.common)}`

      expect(push).toHaveBeenCalledWith(expectedRoute)
    }),
    test('Change selected result to bottom result when ArrowUp in top result', () => {
      const searchSection = mount(<SearchSection countries={data} />)

      const push = jest.fn()
      ;(useRouter as jest.Mock).mockImplementation(() => ({
        push,
      }))

      searchSection
        .find('input')
        .simulate('focus')
        .simulate('keyup', { key: 'ArrowUp' })
        .simulate('keyup', { key: 'Enter' })

      const expectedRoute = `/detail/${toSpinalCase(
        data[data.length - 1].name.common,
      )}`

      expect(push).toHaveBeenCalledWith(expectedRoute)
    }),
    test('Change selected result to top result when ArrowDown in bottom result', () => {
      const searchSection = mount(<SearchSection countries={data} />)

      const push = jest.fn()
      ;(useRouter as jest.Mock).mockImplementation(() => ({
        push,
      }))

      const searchTerm = 'vo'
      searchSection
        .find('input')
        .simulate('focus')
        .simulate('change', { target: { value: searchTerm } })
        // result will have 2 results: Kosovo and Ivory Coast
        .simulate('keyup', { key: 'ArrowDown' })
        .simulate('keyup', { key: 'ArrowDown' })
        .simulate('keyup', { key: 'Enter' })

      const searchResults = data.filter((country) =>
        country.name.common
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()),
      )
      const expectedRoute = `/detail/${toSpinalCase(
        searchResults[0].name.common,
      )}`

      expect(push).toHaveBeenCalledWith(expectedRoute)
    })
})
