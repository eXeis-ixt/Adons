import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React, { PropsWithChildren } from 'react'

const Default = ({children}: PropsWithChildren) => {
  return (
    <div>

<div>
    <Navbar />
</div>

<div className=' mt-24 container'>
    {children}
</div>

<div className='mt-24'>
    <Footer version="1" />
</div>

    </div>
  )
}

export default Default
