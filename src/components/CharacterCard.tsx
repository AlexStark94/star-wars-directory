import React from 'react'
import { BiWorld, BiBody } from "react-icons/bi";
import { FaUserAstronaut, FaTransgender } from "react-icons/fa";
import { GiBodyHeight, GiWeight } from "react-icons/gi";

// Define the props interface for the CharacterCard component
interface CharacterCardProps {
  name: string
  homeworld: string
  species: string
  gender: string
  height: string
  skin_color: string
  mass: string
  loading?: boolean // Optional prop to indicate loading state
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, homeworld, species, gender, height, skin_color, mass, loading }) => {
  /*
   * Render a loading state if the 'loading' prop is true
   * This shows placeholder content with a pulsing animation
   */
  if (loading) {
    return (
      <div className="z-[2] bg-gray-900 shadow-md rounded-lg p-4 border-1 border-transparent bg-gradient-to-r from-red-700 to-purple-700 p-[2px]">
        <div className="bg-gray-900 rounded-md p-4">
          <h2 className="text-xl font-bold mb-2 text-white text-center">{name}</h2>
          <hr className="my-4 border-gray-700"/>
          <p className="text-gray-300 flex items-center">
            <BiWorld className="mr-2 text-green-400" /> <strong className='mr-2'>Planet:</strong> <span className="bg-gray-700 h-4 ml-2 w-full animate-pulse rounded"></span>
          </p>
          <p className="text-gray-300 flex items-center">
            <FaUserAstronaut className="mr-2 text-blue-400" /> <strong className='mr-2'>Species:</strong> <span className="bg-gray-700 ml-2 h-4 w-full animate-pulse rounded"></span>
          </p>
          <p className="text-gray-300 flex items-center">
            <FaTransgender className="mr-2 text-purple-400" /> <strong className='mr-2'>Gender:</strong> <span className="bg-gray-700 ml-2 h-4 w-full animate-pulse rounded"></span>
          </p>
          <p className="text-gray-300 flex items-center">
            <GiBodyHeight className="mr-2 text-yellow-400" /> <strong className='mr-2'>Height:</strong> <span className="bg-gray-700 ml-2 h-4 w-full animate-pulse rounded"></span>
          </p>
          <p className="text-gray-300 flex items-center">
            <BiBody className="mr-2 text-red-400" /><strong className='mr-2'>Skin Color:</strong> <span className="bg-gray-700 ml-2 h-4 w-full max-w-[50%] animate-pulse rounded"></span>
          </p>
          <p className="text-gray-300 flex items-center">
            <GiWeight className="mr-2 text-orange-400" /> <strong className='mr-2'>Mass: </strong><span className="bg-gray-700 ml-2 h-4 w-full animate-pulse rounded"></span>
          </p>
        </div>
      </div>
    )
  }

  // Render the character information when data is loaded
  return (
    <div className="z-[2] bg-gray-900 shadow-md rounded-lg p-4 border-1 border-transparent bg-gradient-to-r from-red-700 to-purple-700 p-[2px]">
      <div className="bg-gray-900 rounded-md p-4">
        <h2 className="text-xl font-bold mb-2 text-white text-center">{name}</h2>
        <hr className="my-4 border-gray-700"/>
        <p className="text-gray-300 flex items-center">
          <BiWorld className="mr-2 text-green-400" /> <strong className='mr-2'>Planet:</strong> {homeworld}
        </p>
        <p className="text-gray-300 flex items-center">
          <FaUserAstronaut className="mr-2 text-blue-400" /> <strong className='mr-2'>Species:</strong> {species}
        </p>
        <p className="text-gray-300 flex items-center">
          <FaTransgender className="mr-2 text-purple-400" /> <strong className='mr-2'>Gender:</strong> {gender}
        </p>
        <p className="text-gray-300 flex items-center">
          <GiBodyHeight className="mr-2 text-yellow-400" /> <strong className='mr-2'>Height:</strong> {height}
        </p>
        <p className="text-gray-300 flex items-center">
          <BiBody className="mr-2 text-red-400" /> <strong className='mr-2'>Skin Color</strong>: {skin_color}
        </p>
        <p className="text-gray-300 flex items-center">
          <GiWeight className="mr-2 text-orange-400" /> <strong className='mr-2'>Mass:</strong> {mass}
        </p>
      </div>
    </div>
  )
}

export default CharacterCard
