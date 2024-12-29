import React from 'react'

const Footer = ({version}: {version?: string}) => {
  return (
    <footer className=' text-center bg-transparent backdrop-blur-lg '>
        A Product of adons Tech | Using V:{version}
    </footer>
  )
}

export default Footer
