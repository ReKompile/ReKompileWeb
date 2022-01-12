import Image from 'next/image'
import GradientButton from '../components/GradientButton'
import OutlineButton from '../components/OutlineButton'

export default function Home(props) {
	return (
		<div>
			<div>
				<div className='flex justify-center mt-20 mx-12'>
					<div className='basis-5/12 mt-10 relative left-14'>
						<div className='md:text-7xl lg:text-8xl'>
							Teaching kids coding to make a <br />
							<span className='orange-gradient-text'>
								{'<'}difference{'>'}
							</span>
						</div>
						<div className='flex justify-between  max-w-md mt-14'>
							<OutlineButton href='/about-us'>
								About Us
							</OutlineButton>
							<GradientButton href='/classes'>
								View Classes
							</GradientButton>
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
			</div>
		</div>
	)
}

export async function getStaticProps(context) {
	return {
		props: {
			className:
				"bg-[url('/layered-waves.svg')] bg-contain bg-bottom bg-repeat-x bg-origin-content",
		},
	}
}