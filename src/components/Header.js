import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Blog App</h1>
            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
            <NavLink to='/blogs' activeClassName='active'>Blogs</NavLink>
            <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
        </header>
    )
}

export default Header
