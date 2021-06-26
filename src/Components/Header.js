import React, {useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';


const  Header = () => {
    const [click, setClick]=useState(false);

    const handClick=()=> setClick(!click)
    const closeMobileMenu = ()=> setClick(false)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
           <div className='navbar'>
           <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            
            </Link> 
            <div className='menu-icon' onClick={handClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                   <Link to='/' className='nav-links text-white ' onClick={closeMobileMenu}>
                     Home
                   </Link>
                </li>
                <li className="nav-item">
                   <Link to='/entires' className='nav-links  text-white' onClick={closeMobileMenu}> 
                       Course
                   </Link>
                </li>
                <li className="nav-item">
                   <Link to='/entires' className='nav-links  text-white' onClick={closeMobileMenu}> 
                       About us
                   </Link>
                </li>
               
            </ul>
            </div>    
           </div> 
           </IconContext.Provider>
           
        </>
    )
}

export default Header