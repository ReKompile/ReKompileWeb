import React from 'react'
import Image from 'next/image'
import GradientButton from './GradientButton'

function Nav() {
	return (
		<nav className='flex mt-4 justify-between mx-6 z-10 bg-cream'>
			<div>
				<Image src='/logo.svg' width='364' height='72' alt = 'ReKompile Logo'/>
			</div>
			<div className='flex justify-between basis-1/4 my-auto text-2xl text-brown'>
				<a href='/non-profits'>Non Profits</a>
				<a href='/students'>Students</a>
				<a href='/about-us'>About Us</a>
			</div>
			<div className = 'my-auto'>
				<GradientButton>View Classes</GradientButton>
			</div>
		</nav>
	)
}

export default Nav
