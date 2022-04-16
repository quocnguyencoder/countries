import { cleanup, fireEvent, render } from '@testing-library/react'
import Results from '@/components/Results'
import Country from '@/interfaces/country'
import testData from '../test-data/countries-test-data'

afterEach(cleanup)

const setup = (data: Country[]) => {
  const goToDetail = jest.fn((index: number) => void index)
  const selectedCountry = 3
  const { getByTestId, getByLabelText, getAllByRole } = render(
    <Results
      filteredCountries={data}
      selectedCountry={selectedCountry}
      searchTerm={''}
      goToDetail={goToDetail}
    />,
  )

  const resultsSection = getByTestId('results-section') as HTMLDivElement

  return {
    resultsSection,
    selectedCountry,
    goToDetail,
    getByTestId,
    getByLabelText,
    getAllByRole,
  }
}

const data = testData as Country[]

describe('<Results />', () => {
  test('Renders results list with result(s) bases on filtered data', () => {
    const { getAllByRole, getByTestId } = setup(data)
    const resultsList = getByTestId('results-list')
    expect(resultsList).toBeInTheDocument()
    const listItems = getAllByRole('results-listitem')
    expect(listItems).toHaveLength(data.length)
  }),
    test('Renders a notice when no results are found', () => {
      const { getByTestId } = setup([])
      const resultsNotices = getByTestId('results-notice') as HTMLDivElement
      expect(resultsNotices).toBeInTheDocument()
    }),
    test('Calls navigate function when clicking on a result', () => {
      const { getAllByRole, goToDetail } = setup(data)
      const listItem = getAllByRole('results-listitem')[0]
      fireEvent.mouseDown(listItem)
      expect(goToDetail.mock.calls.length).toBe(1)
    }),
    test('Selected result should be highlighted by MUI', () => {
      const { getByTestId, selectedCountry } = setup(data)
      const selectedListItemClasses = getByTestId(
        `results-listitem-${selectedCountry}`,
      ).getAttribute('class')
      const splitClasses = selectedListItemClasses?.split(' ')
      expect(splitClasses?.includes('Mui-selected')).toBe(true)
    })
})
