import BaseButton from './BaseButton'

function WhiteButton({ ...props }) {
	let s = `white-button ${props.className}`

	return (
		<BaseButton
			{...props}
			className={s}
		/>
	)
}

export default WhiteButton
