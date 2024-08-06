import React from 'react'
import { BiWorld } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";

/*
 * SkeletonCard: A placeholder component for loading states
 * Displays a pulsing card with a style similar to CharacterCard
 */
const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-gray-900 shadow-md rounded-lg p-4 border-1 border-transparent bg-gradient-to-r from-red-700 to-purple-500 p-[2px]">
      <div className="bg-gray-900 rounded-md p-4">
        <div className="h-6 bg-gray-700 animate-pulse rounded w-3/4 mb-2"></div>
        <div className="flex items-center mb-2">
          <div className="h-4 bg-gray-700 animate-pulse rounded w-2/3"></div>
        </div>
        <div className="flex items-center mb-2">
          <div className="h-4 bg-gray-700 animate-pulse rounded w-1/2"></div>
        </div>
        <div className="flex items-center mb-2">
          <div className="h-4 bg-gray-700 animate-pulse rounded w-2/3"></div>
        </div>
        <div className="flex items-center">
          <div className="h-4 bg-gray-700 animate-pulse rounded w-1/2"></div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard