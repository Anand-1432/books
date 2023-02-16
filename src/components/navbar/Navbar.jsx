import React from 'react'
import './navbar.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <>
        <div className='navBar'>
            <div className='logo'>LOGO</div>
            <div className='menu'>
               <div><AccountCircleIcon fontSize='small'/></div>
               <div><MenuIcon fontSize='small' htmlColor='black'/></div>
            </div>
        </div>
    </>
  )
}

export default Navbar