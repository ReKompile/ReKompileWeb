import React from 'react'
import Link from 'next/link'


function GradientButton({ children, href = null }) {
	if (href) {
		return (
			<Link href = {href} passHref>
				<button className='orange-gradient px-12 py-5 text-2xl text-white'>
					{children}
				</button>
			</Link>
		)
	}
	return (
		<div>
			<button className='orange-gradient px-12 py-5 text-2xl text-white'>
				{children}
			</button>
		</div>
	)
}

export default GradientButton
