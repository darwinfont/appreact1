//Header1 :: (CR,CR,CR) => CR
import React, { Fragment } from 'react'
import './Header.css'

const Header1 = (left = null, center = null, raigth = null) => {
  return (
    <>
      <header id="header" className="header">
        <nav className="nav">
          <div className="left"> {left} </div>
          <div className="center"> {center} </div>
          <div className="raigth"> {raigth} </div>
        </nav>
      </header>
    </>
  )
}
export default Header1
