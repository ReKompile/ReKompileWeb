import BaseButton from './BaseButton'

function OutlineButton(props) {
	return (
		<BaseButton
			className='border-2 border-orange text-orange'
			{...props}
		/>
	)
}

export default OutlineButton
