import React from 'react'
import Image from 'next/image'
import GradientButton from './GradientButton'
import Link from 'next/link'

function Nav() {
	return (
		<nav className='flex pt-4 justify-between px-6 z-10'>
			<Link href = "/" passHref>
				<Image src='/logo.svg' width='364' height='72' alt = 'ReKompile Logo'/>
			</Link>
			<div className='flex justify-between basis-1/4 my-auto text-2xl text-brown'>
				<Link href='/non-profits'>Non Profits</Link>
				<Link href='/students'>Students</Link>
				<Link href='/about-us'>About Us</Link>
			</div>
			<div className = 'my-auto'>
				<GradientButton href = '/classes'>View Classes</GradientButton>
			</div>
		</nav>
	)
}

export default Nav
