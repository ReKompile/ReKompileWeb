import BaseButton from './BaseButton'

function GradientButton({ ...props }) {
	let s = `orange-gradient text-white ${props.className}`

	return (
		<BaseButton
			{...props}
			className={s}
		/>
	)
}

export default GradientButton
