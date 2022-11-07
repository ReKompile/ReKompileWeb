import Image from 'next/image'
import GradientButton from '../components/GradientButton'
import OutlineButton from '../components/OutlineButton'

export default function Home(props) {
	return (
		<div className='page-body relative flex'>
			<div className='overflow-hidden w-full h-full sm:left-60 sm:h-screen sm:w-5/6 md:w-3/4 lg:w-screen lg:left-[200px] absolute'>
				<div className='absolute w-full h-full z-0'>
					<Image
						src='/decorations/skyblue_vector.svg'
						layout='fill'
						alt='skyblue vector'
					/>
				</div>
			</div>

			<div className='flex justify-center items-center'>
				<div className='lg:basis-4/6 basis-full m-5 md:m-10 font-bai-jamjuree flex flex-col justify-center items-center lg:items-start'>
					<div className='text-sm md:text-base text-lg lg:text-xl uppercase text-orange'>
						<div className='inline-block mr-1 align-middle'>
							<Image
								src='/decorations/star.svg'
								width={20}
								height={20}
								alt='star'
							/>
						</div>
						Our mission
					</div>
					<div className='text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-belgrano leading-normal text-center lg:text-left'>
						The non&#8209;profit, for&nbsp;
						<span className='orange-gradient-text'>
							{'<'}non&#8209;profits{'>'}
						</span>
					</div>
					<p className='text-2xl leading-normal lg:text-lg my-10 lg:w-3/4 mx-auto lg:mx-0'>
						ReKompile is a registered non profit organization
						started by students, with a mission of developing
						websites and applications for charities and more. All
						for free.
					</p>
					<div className='flex'>
						<OutlineButton href='/our-team'>Our Team</OutlineButton>
						<GradientButton className='ml-4' href='/our-work'>
							Our Work
						</GradientButton>
					</div>
				</div>
				<div className='basis-3/4 relative top-10 right-15 hidden lg:block'>
					<Image
						src='/pair_programming.svg'
						width='1060'
						height='630'
						alt='pair programming'
					/>
				</div>
			</div>
		</div>
	)
}
