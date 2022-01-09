import Nav from '../components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<div className='flex flex-col h-screen'>
			<Nav />
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
