import Image from 'next/image'
import GradientButton from '../components/GradientButton'
import OutlineButton from '../components/OutlineButton'

export default function Home(props) {
	return (
        <div className='page-body relative flex'>
            <div className='overflow-hidden w-screen h-screen absolute'>
                <div className='absolute w-full h-full z-0' style={{left: '13%'}}>
                    <Image
                        src='/decorations/skyblue_vector.svg'
                        layout='fill'
                        alt='skyblue vector'
                    />
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className='basis-4/6 mt-10 relative left-14 font-bai-jamjuree'>
                    <div className='text-xl uppercase text-orange'>
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
                    <div className='text-6xl font-belgrano leading-normal'>
                        Teaching kids coding to make a&nbsp;
                        <span className='orange-gradient-text'>
                            {'<'}difference{'>'}
                        </span>
                    </div>
                    <p className='text-lg my-10 w-3/4'>
                        ReKompile is a registered non profit organization started by students,
                        with a mission of teaching other students about technology and inspiring them
                        by connecting them with other non profits who can benefit from their newly
                        learned skills. All for free.
                    </p>
                    <div className='flex'>
                        <OutlineButton href='/about-us'>
                            About Us
                        </OutlineButton>
                        <GradientButton className='ml-4' href='/classes'>
                            View Classes
                        </GradientButton>
                    </div>
                </div>
                <div className='basis-3/4 relative top-10 right-15'>
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