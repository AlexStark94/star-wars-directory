/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'
import { Person, Character, Cache } from '../types/interfaces'
import { fetchHomeworld, fetchSpecies } from '../utils/apiHelpers'

const useCharacterDetails = (
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>,
  cache: React.MutableRefObject<Cache>
) => {
  const fetchCharacterDetails = useCallback(async (person: Person): Promise<void> => {
    /*
     * Helper function to update a specific character in the characters array
     * It creates a new array with the updated character, triggering a re-render
     */
    const updateCharacter = (partialUpdate: Partial<Character>) => {
      setCharacters(prev =>
        prev.map(char =>
          char.url === person.url ? { ...char, ...partialUpdate } : char
        )
      )
    }

    // Fetch and update homeworld
    const homeworld = await fetchHomeworld(person.homeworld, cache.current.homeworlds)
    updateCharacter({ homeworld })

    // Fetch and update species name
    const speciesName = await fetchSpecies(person.species[0], cache.current.species)
    updateCharacter({ speciesName })

    // Mark character details as loaded
    updateCharacter({ detailsLoaded: true })
  }, [setCharacters])

  return { fetchCharacterDetails }
}

export default useCharacterDetails