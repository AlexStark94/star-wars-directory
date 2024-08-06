import { useState, useMemo } from 'react'

/*
 * A custom hook for searching and filtering an array of objects
 * @param items - An array of objects to be searched
 * @returns An object containing the search term, filtered data, and a search handler
 */
function useSearch<T extends Record<string, any>>(items: T[]) {
  // State to hold the current search term
  const [searchTerm, setSearchTerm] = useState('')

  // Memoized filtered data based on the search term
  const filteredData = useMemo(() => {
    return items.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [items, searchTerm])

  /*
   * Handler for updating the search term
   * @param event - The input change event
   */
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return { searchTerm, filteredData, handleSearch }
}

export default useSearch