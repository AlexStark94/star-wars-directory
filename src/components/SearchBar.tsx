import React from 'react'
import { FaSearch } from 'react-icons/fa'

/*
 * Props interface for the SearchBar component
 * value: current search input value
 * onChange: function to handle input changes
 */
interface SearchBarProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/*
 * SearchBar component
 * Renders an input field for searching characters
 */
const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="bg-gray-900 shadow-md rounded-lg p-1 border-1 border-transparent bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-gray-900 rounded-md flex items-center">
        <FaSearch className="text-gray-400 ml-3" />
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="bg-gray-900 text-white p-2 w-full focus:outline-none"
          placeholder="Search by name, homeworld, or species..."
        />
      </div>
    </div>
  )
}

export default SearchBar