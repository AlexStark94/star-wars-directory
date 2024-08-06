import React from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
  className?: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, className = '' }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 bg-gray-700 shadow-lg text-white rounded ${className}`}
    >
      {label}
    </button>
  )
}

export default Button