import Nav from '../components/Nav'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component: Page, pageProps }) {
	return (
		<>
			<Head>
				{/* Fonts */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Bai+Jamjuree&family=Belgrano&display=swap'
					rel='stylesheet'
				></link>

				<title>
					ReKompile - The nonprofit for nonprofits
				</title>
				<link rel='icon' href='/Logo-icon.png'></link>
				<meta
					name='title'
					content='ReKompile - The nonprofit for nonprofits'
				/>
				<meta
					name='description'
					content='Rekompile is a nonprofit that helps nonprofits by providing them with the technological tools they need to succeed.'
				/>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='http://rekompile.org/' />
				<meta property='og:title' content='ReKompile - The nonprofit for nonprofits'/>
				<meta property='og:description' content='Rekompile is a nonprofit that helps nonprofits by providing them with the technological tools they need to succeed.'/>
				<meta property='og:image' content='/Logo-icon.png' />
				<meta property="theme-color" content="#e25024" />
			</Head>
			<div
				className={`bg-cream min-h-screen min-w-screen flex flex-col ${pageProps.className}`}
			>
				<Nav />
				<Page {...pageProps} />
			</div>
		</>
	)
}

export default MyApp
