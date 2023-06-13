import React from 'react'
import NavBar from '../NavBar'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col items-center mt-20 flex-wrap'>
        <NavBar />
        {children}
    </div>
  )
}

export default Layout