import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Header.scss'

function Header() {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true })
	}, [])

	return (
		<header>
			<div className='portfolioTitle'>Portfolio</div>
			<nav className='navBar'>
				<NavLink
					to='/'
					className={({ isActive }) => (isActive ? 'activeLink' : '')}
				>
					Home
				</NavLink>
				<NavLink
					to='/projects'
					className={({ isActive }) => (isActive ? 'activeLink' : '')}
				>
					Projects
				</NavLink>
				<NavLink
					to='/resume'
					className={({ isActive }) => (isActive ? 'activeLink' : '')}
				>
					Resume
				</NavLink>
			</nav>
		</header>
	)
}

export default Header
