
export async function getStaticProps({ params }) {
    const { slug } = params
	return {
        props: {slug},
	}
}
export async function getStaticPaths() {
	return {
		paths: [{ params: { slug: 'web-dev' } }],
		fallback: true,
	}
}

export default function ClassPage({ slug }) {
	return (
		<>
			<div className = 'text-5xl text-center mb-5'>{slug} page</div>
			<div className='bg-under-construction h-full'></div>
		</>
	)
}
