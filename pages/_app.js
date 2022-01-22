import Nav from '../components/Nav'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
        <>
            <Head>
                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&family=Belgrano&display=swap" rel="stylesheet"></link>
            </Head>
            <div className='flex flex-col min-h-screen'>
                <Nav />
                <Component {...pageProps} />
            </div>
        </>
	)
}

export default MyApp
