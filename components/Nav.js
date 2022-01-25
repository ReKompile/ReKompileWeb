import { useState } from 'react'
import Image from 'next/image'
import GradientButton from './GradientButton'
import Link from 'next/link'

function Nav() {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<nav className='md:py-5 py-10 rounded z-50 relative bg-cream'>
			<div className='container flex flex-wrap justify-between items-center mx-auto'>
				<div className='block w-1/2 md:w-1/3 lg:w-1/4'>
					<Link href='/' passHref>
						<Image
							src='/logo.svg'
							width='364'
							height='72'
							layout='responsive'
							alt='ReKompile Logo'
						/>
					</Link>
				</div>
				<div className='flex md:order-2'>
					<div className='mr-3 md:mr-0'>
						<GradientButton
							href='/classes'
							className='hidden md:block md:text-base md:px-7 md:py-3 lg:px-12 lg:py-5 lg:text-2xl'
						>
							View Classes
						</GradientButton>
					</div>
					<button
						className='inline-flex items-center p-2 text-brown rounded-lg md:hidden hover:bg-orange focus:outline-none focus:ring-2 focus:ring-gray-200'
						onClick={() => setMobileOpen(prevOpen => !prevOpen)}
					>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='w-10 h-10'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'
							></path>
						</svg>
						<svg
							className='hidden w-6 h-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clipRule='evenodd'
							></path>
						</svg>
					</button>
				</div>
				<div
					className={`${
						mobileOpen ? 'flex' : 'hidden'
					} justify-between items-center w-full md:flex md:w-auto md:order-1`}
					id='mobile-menu-4'
				>
					<ul className='flex w-full flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
						<li className='block py-2 pr-4 pl-3 text-brown sm:text-2xl md:text-lg xl:text-2xl border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
							<Link href='/non-profits' passHref>
								<span className='hover:text-blue cursor-pointer transition duration-200 ease-in-out'>
									Non Profits
								</span>
							</Link>
						</li>
						<li className='block py-2 pr-4 pl-3 text-brown sm:text-2xl md:text-lg xl:text-2xl border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
							<Link href='/students' passHref>
								<span className='hover:text-blue cursor-pointer transition duration-200 ease-in-out'>
									Students
								</span>
							</Link>
						</li>
						<li className='block py-2 pr-4 pl-3 text-brown sm:text-2xl md:text-lg xl:text-2xl border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
							<Link href='/about-us' passHref>
								<span className='hover:text-blue cursor-pointer transition duration-200 ease-in-out'>
									About Us
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Nav
