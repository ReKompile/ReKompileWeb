import Link from 'next/link'

function BaseButton({ href = null, useNextLink = true, ...props }) {
	let s = `px-5 py-3 md:px-8 md:py-5 lg:px-12 lg:py-5 sm:text-2xl lg:text-2xl font-bai-jamjuree hover:translate-y-1 text-center transition duration-200 ease-in-out ${props.className}`

	const LinkComponent = useNextLink ? Link : 'a'

	if (href) {
		return (
			<>
				<LinkComponent href={href} target = '_blank' passHref>
					<button {...props} className={s} />
				</LinkComponent>
			
			</>
		)
	}
	return (
		<div>
			<button {...props} className={s} />
		</div>
	)
}

export default BaseButton
