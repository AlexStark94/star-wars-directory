import React, { useState, useEffect, useCallback, useRef } from 'react'
import CharacterCard from '../components/CharacterCard'
import SkeletonCard from '../components/SkeletonCard'
import SearchBar from '../components/SearchBar'
import useSearch from '../hooks/useSearch'
import useFetch from '../hooks/useFetch'
import useCharacterDetails from '../hooks/useCharacterDetails'
import useInfiniteScroll from '../hooks/useLoadMore'
import { Cache, Character, Person } from '../types/interfaces'
import { GiDeathStar } from "react-icons/gi"
import Button from '../components/Button'

const Home: React.FC = () => {
	// State and hooks
	const [characters, setCharacters] = useState<Character[]>([])
	const [nextUrl, setNextUrl] = useState<string | null>('https://swapi.dev/api/people/')
	const { loading: fetchLoading, fetchData } = useFetch<Person>()
	const { searchTerm, filteredData, handleSearch } = useSearch(characters)
	const initialFetchDone = useRef(false)
	const cache = useRef<Cache>({ homeworlds: {}, species: {} })

	const { fetchCharacterDetails } = useCharacterDetails(setCharacters, cache)

	/*
	 * Load characters from the API
	 * Updates characters state and nextUrl
	 * Fetches additional details for each character
	 */
	const loadCharacters = useCallback(async (url: string) => {
		const result = await fetchData(url)
		if (result && Array.isArray(result.results)) {
			const newCharacters: Character[] = result.results.map(person => ({
				...person,
				homeworld: '',
				speciesName: '',
				detailsLoaded: false
			}))
			setCharacters(prev => [...prev, ...newCharacters])
			setNextUrl(result.next)

			// Fetch additional details for each character
			result.results.forEach(fetchCharacterDetails)
		}
	}, [fetchData, fetchCharacterDetails])

	// Set up infinite scrolling
	const { loadMore } = useInfiniteScroll(loadCharacters, nextUrl)

	// Initial data fetch
	useEffect(() => {
		if (!initialFetchDone.current && nextUrl) {
			loadCharacters(nextUrl)
			initialFetchDone.current = true
		}
	}, [loadCharacters, nextUrl])

	const isLoading = fetchLoading

	return (
		<div className="container mx-auto p-4">
			<SearchBar value={searchTerm} onChange={handleSearch} />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
				{/* Display skeleton cards while loading initial data */}
				{fetchLoading && characters.length === 0
					? Array.from({ length: 10 }).map((_, index) => <SkeletonCard key={index} />)
					: filteredData.length > 0
						? filteredData.map(character => (
							<CharacterCard
								key={character.url}
								name={character.name}
								homeworld={character.homeworld}
								species={character.speciesName}
								gender={character.gender}
								height={character.height}
								skin_color={character.skin_color}
								mass={character.mass}
								loading={!character.detailsLoaded}
							/>
						))
						: <p>No results found</p>
				}
			</div>
			{/* Loading indicator for additional characters */}
			{isLoading && (
				<div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
					<GiDeathStar className="text-white text-6xl animate-pulse" />
				</div>
			)}
			{/* "Load More" button */}
			{nextUrl && (
				<div className='flex justify-center mt-12'>
					<div className='flex justify-center mt-12'>
						<Button
							label="Load More"
							onClick={loadMore}
							disabled={isLoading}
							className="mt-4 px-20"
						/>
					</div>
				</div>
			)}
			<div className="animated-div absolute top-16 left-8 bg-red-600 blur-[140px] rounded-full h-[10rem] w-[10rem]"></div>
			<div className="animated-div absolute bottom-16 right-8 bg-blue-600 blur-[120px] rounded-full h-[10rem] w-[10rem]"></div>
		</div>
	)
}

export default Home