import Nav from '../components/Nav.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Nav />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
