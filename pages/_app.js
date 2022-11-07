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
				<meta property='og:image' content='/rekompile_home_page.png' />

				<meta
					property='twitter:card'
					content='https://media.discordapp.net/attachments/836304486652706849/936756515593920552/unknown.png'
				/>
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
					content='/rekompile_home_page.png'
				/>
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
