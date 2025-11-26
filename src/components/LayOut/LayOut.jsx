import React from 'react'
import Navbar from '../Navbar/Navbar'

const LayOut = ({children}) => {
  return (
    <div>
      {/* <Header/> */}
      <Navbar/>
      {children}
    </div>
  )
}

export default LayOut