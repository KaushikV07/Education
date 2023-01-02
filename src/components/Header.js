import React from 'react'
import "./Header.css"
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

function Header() {
  return (
    <header>
      <div className='container'>
        <div className='header_container'>
          <a href='!#' className='logo'>
          <LocalLibraryIcon />
          <span>KIDER</span>
          </a>

          <div className='navbar'>
            <a href='!#'>HOME</a>
            <a href='!#'>ABOUT</a>
            <a href='!#'>CLASSES</a>
            <a href='!#'>CONTACT US</a>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header