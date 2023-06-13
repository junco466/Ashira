import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './NavBar.css'

const underlineText = (active) => {
  return active ? 'underline underline-offset-4' : undefined;
  //fontWeight: isActive ? "bold" : "",
  //color: isPending ? "white" : "black",
}

const NavBar = () => {

  return (
    <nav className='flex justify-between items-center top-0 fixed z-10 w-full py-4 px-20 nav-bar text-white'>
        <ul className='flex items-center gap-14'>
            <li className='font-semibold text-lg'>
              <NavLink to='/' >
                Ashira  
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/'
                className={({ isActive}) =>
                  underlineText(isActive) 
                }>
                Inicio  
              </NavLink>
            </li>
            <li className='cursor-pointer'>
              <Link to="/" activeClass="underline underline-offset-4" spy={true} smooth={true} offset={50} duration={500}>
                Acerca de  
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link to="servicios" activeClass="underline underline-offset-4" spy={true} smooth={true} offset={50} duration={1500}>
                Servicios
              </Link>
            </li>
        </ul>

        <ul className='flex items-center gap-14'>
            <li>
              <NavLink 
                to='/agendar'
                className={({ isActive}) =>
                  underlineText(isActive)
                }>
                Agendar  
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/tienda'
                className={({ isActive}) =>
                  underlineText(isActive)
                }>
                Tienda  
              </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar