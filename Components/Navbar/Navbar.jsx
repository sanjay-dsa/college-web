import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import {Link} from 'react-scroll'
import menu_icon from '../../assets/menu.png'

export const Navbar = () => {

  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  },[])
  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
        <img  src={logo} alt="" className='logs'/>
        
        <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home
        </Link></li>
        <li><Link to='program' smooth={true} offset={0} duration={500}>
        Program</Link></li>
        <li><Link to='about' smooth={true} offset={0} duration={500}>
        About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={0} duration={500}>
        Campus</Link></li>
        <li><Link to='testmonials' smooth={true} offset={0} duration={500}>
        Testimonials</Link></li>
        {/* <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact Us</Link></li> */}
        <li><button  className='btn'><Link to='contact' smooth={true} offset={0} duration={500} >Contact Us</Link></button></li>
        </ul>
        {/* <img src={menu_icon} alt="" /> */}
    </nav>
  )
}
