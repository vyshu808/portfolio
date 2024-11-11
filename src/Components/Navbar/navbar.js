import React from 'react';
import './navbar.css'
import logo from '../../assets/Logo.png.png';
import contactImg  from '../../assets/contact.png'
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-50}  duration={500} className='desktopMenuListItem' >Home</Link>
            <Link activeClass='active' to='About' spy={true} smooth={true} offset={-50}  duration={500} className='desktopMenuListItem' >About</Link>
            <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-50}  duration={500} className='desktopMenuListItem' >Skills</Link>
            <Link  activeClass='active' to='Experience' spy={true} smooth={true} offset={-50}  duration={500}className='desktopMenuListItem' >Experience</Link>
            </div> 
            <button className='desktopMenubtn'onClick={()=>{
            document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactImg}alt='' className='destopMenuImg'/>Contact Me  
                </button>  
                 </nav>
  );
}

export default Navbar;
