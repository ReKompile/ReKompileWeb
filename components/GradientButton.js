import React from 'react'

function GradientButton({ children }) {
	return (
		<div>
			<button className='orange-gradient px-12 py-5 text-2xl text-white'>
				{children}
			</button>
		</div>
	)
}

export default GradientButton
