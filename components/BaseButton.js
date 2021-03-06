import Link from 'next/link'

function BaseButton({ href = null, ...props }) {
	let s = `px-12 py-5 sm:text-2xl lg:text-2xl font-bai-jamjuree hover:translate-y-1 text-center transition duration-200 ease-in-out ${props.className}`

	if (href) {
		return (
			<>
				<Link href={href} passHref>
					<button {...props} className={s} />
				</Link>
			
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
