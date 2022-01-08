import React from 'react'

function OutlineButton({ children }) {
	return (
		<div>
			<button className='border-2 border-orange px-12 py-5 text-2xl text-orange'>
				{children}
			</button>
		</div>
	)
}

export default OutlineButton
