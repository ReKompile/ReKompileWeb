import Image from 'next/image'
import GradientButton from '../components/GradientButton'
import OutlineButton from '../components/OutlineButton'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>
					ReKompile - Teaching kids coding to make a difference
				</title>
				<link rel='icon' href='/Logo-icon'></link>
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
			<div className=''>
				<div className='flex justify-center mt-20 mx-12'>
					<div className='basis-5/12 mt-10 relative left-14'>
						<div className='text-8xl'>
							Teaching kids coding to make a <br />
							<span className='orange-gradient-text'>
								{'<'}difference{'>'}
							</span>
						</div>
						<div className='flex justify-between max-w-md mt-14'>
							<OutlineButton>About Us</OutlineButton>
							<GradientButton>View Classes</GradientButton>
						</div>
					</div>
					<div className=''>
						<Image
							src='/pair_programming.svg'
							width='1060'
							height='630'
							alt='pair programming'
						/>
					</div>
				</div>
				<div className=''>
					<Image
						src='/layered-waves.svg'
						layout='fill'
						objectFit='contain'
						objectPosition='bottom'
						alt='layered waves'
					/>
				</div>
			</div>
		</>
	)
}
