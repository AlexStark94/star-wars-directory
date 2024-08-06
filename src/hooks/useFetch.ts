import { useState, useCallback } from 'react'

/*
 * Interface for the API response structure
 * T is a generic type for the results array
 */
interface ApiResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

const useFetch = <T>() => {
  // State for storing the fetched data and loading status
  const [data, setData] = useState<ApiResponse<T> | null>(null)
  const [loading, setLoading] = useState(false)

  /*
   * Fetches data from the given URL
   * Returns the fetched data or null if an error occurs
   */
  const fetchData = useCallback(async (url: string): Promise<ApiResponse<T> | null> => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const result: ApiResponse<T> = await response.json()
      setData(result)
      return result
    } catch (error) {
      console.error('Error fetching data:', error)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  // Return the data, loading state, and fetchData function
  return { data, loading, fetchData }
}

export default useFetch