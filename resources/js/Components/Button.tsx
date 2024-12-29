import React from 'react'

interface ButtonProps {
    children: React.ReactNode,
    className?: string
}

const Button: React.FC<ButtonProps> = ({children, className}) => {
  return (
    <button className={` bg-primary-50 border border-primary-500 text-primary-600 px-3 py-1 rounded-md text-xl ${className || ''}`}>
        {children}
    </button>
  )
}

export default Button
