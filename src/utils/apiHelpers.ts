/*
 * Fetches the homeworld name for a character
 * @param url - The URL to fetch the homeworld data from
 * @param cache - A cache object to store and retrieve previously fetched results
 * @returns The name of the homeworld or 'Unknown' if fetching fails
 */
export const fetchHomeworld = async (url: string, cache: Record<string, string>): Promise<string> => {
  // Return cached result if available
  if (cache[url]) return cache[url]

  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      // Cache the result for future use
      cache[url] = data.name
      return data.name
    }
  } catch (error) {
    console.error('Error fetching homeworld:', error)
  }

  return 'Unknown'
}

/*
 * Fetches the species name for a character
 * @param url - The URL to fetch the species data from (undefined for humans)
 * @param cache - A cache object to store and retrieve previously fetched results
 * @returns The name of the species, 'Human' if url is undefined, or 'Unknown' if fetching fails
 */
export const fetchSpecies = async (url: string | undefined, cache: Record<string, string>): Promise<string> => {
  // Return 'Human' if no URL is provided
  if (!url) return 'Human'
  // Return cached result if available
  if (cache[url]) return cache[url]

  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      // Cache the result for future use
      cache[url] = data.name
      return data.name
    }
  } catch (error) {
    console.error('Error fetching species:', error)
  }

  return 'Unknown'
}