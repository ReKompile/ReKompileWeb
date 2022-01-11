import Nav from '../components/Nav'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component: Page, pageProps }) {
	return (
		<>
			<Head>
				<title>
					ReKompile - Teaching kids coding to make a difference
				</title>
				<link rel='icon' href='/Logo-icon.png'></link>
				<meta
					name='title'
					content='ReKompile - Teaching kids coding to make a difference'
				/>
				<meta
					name='description'
					content='ReKompile teaches high school students computer science and utilizes their skills to make a change by teaming them up with non profits in need'
				/>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='http://rekompile.org/' />
				<meta
					property='og:title'
					content='ReKompile - Teaching kids coding to make a difference'
				/>
				<meta
					property='og:description'
					content='ReKompile teaches high school students computer science and utilizes their skills to make a change by teaming them up with non profits in need'
				/>
				<meta property='og:image' content='/Home-Page-ReKompile.png' />

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='http://rekompile.org/' />
				<meta
					property='twitter:title'
					content='ReKompile - Teaching kids coding to make a difference'
				/>
				<meta
					property='twitter:description'
					content='ReKompile teaches high school students computer science and utilizes their skills to make a change by teaming them up with non profits in need'
				/>
				<meta
					property='twitter:image'
					content='/Home-Page-ReKompile.png'
				/>
			</Head>
			<div
				className={`bg-cream min-h-screen min-w-screen ${pageProps.className}`}
			>
				<Nav />
				<Page {...pageProps} />
			</div>
		</>
	)
}

export default MyApp
