import React from 'react'
import Image from 'next/image'
import GradientButton from './GradientButton'

function Nav() {
	return (
		<nav className='flex mt-4 justify-between mx-6'>
			<div className=''>
				<Image src='/logo.svg' width='364' height='72' alt = 'ReKompile Logo'/>
			</div>
			<div className='flex justify-between basis-1/4 my-auto text-2xl text-brown'>
				<div>Non Profits</div>
				<div>Students</div>
				<div>About Us</div>
			</div>
			<div className = 'my-auto'>
				<GradientButton>View Classes</GradientButton>
			</div>
		</nav>
	)
}

export default Nav
