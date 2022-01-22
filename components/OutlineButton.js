import BaseButton from './BaseButton'

function OutlineButton(props) {
	return (
		<BaseButton
			className='border-2 border-orange text-orange rounded-[10px]'
			{...props}
		/>
	)
}

export default OutlineButton
