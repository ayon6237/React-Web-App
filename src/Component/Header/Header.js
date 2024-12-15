import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {

  const [menuOpen,setMenuOpen]=useState(false);

  const toggleMenu=()=>{
    setMenuOpen(!menuOpen);
  }

  return (
    <div className='container header' >
        <div>
        <Link className='logo' to="/"><h2>Bangla <span>Wash</span></h2></Link>
            
        </div>

        <div className='menu-icon' onClick={toggleMenu}>
           <CiMenuBurger />
        </div>
      
        <div className={`link ${menuOpen? 'show':'hide'}`}> 
        <Link className='li' to="/">Home</Link>
          <Link className='li' to="/services">Our Services</Link>
          <Link className='li' to="/about">About us</Link>
          <Link className='li' to="/contact">Contact</Link>
        </div>
    
    </div>
  )
}

export default Header
