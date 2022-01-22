import Image from 'next/image'
import GradientButton from '../components/GradientButton'
import OutlineButton from '../components/OutlineButton'

export default function Home(props) {
	return (
        <div>
            <div className='overflow-hidden top-0 w-full h-full absolute'>
                <div className='absolute w-11/12 h-full z-0' style={{left: '20%'}}>
                    <Image
                        src='/decorations/skyblue_vector.svg'
                        layout='fill'
                        alt='skyblue vector'
                    />
                </div>
            </div>

            <div className='flex justify-center mt-20 mx-12 items-center'>
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
                        with a mission of teaching other students about technology and inpsiring them
                        by connecting them with other non profits who can benefit from their newly
                        learned skills. All for free.
                    </p>
                    <div className='flex justify-between  max-w-md mt-14'>
                        <OutlineButton href='/about-us'>
                            About Us
                        </OutlineButton>
                        <GradientButton href='/classes'>
                            View Classes
                        </GradientButton>
                    </div>
                </div>
                <div className='basis-2/3'>
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