import Image from 'next/image'
import GradientButton from '../../components/GradientButton'

export default function Classes() {
    return (
        <>
            {/* Foreground */}
            <div className='h-full relative'>
                <div className="flex justify-items-end items-stretch h-5/6">
                    <div className='basis-1/2 p-8'>
                        <h1 className="font-bold text-6xl m-8">Classes</h1>
                        <div className='w-5/6 text-2xl'>
                            <p>We offer cutting edge computer science classes that will teach you valuable skills and leave the world a better place.</p>
                            <p className='relative top-16 left-16'>Each class teaches you the concepts, and then teams you up with a non profit organization that needs those skills and guides you to apply them.</p>
                        </div>
                    </div>
                    <div className='basis-1/2 relative'>
                        <Image
                            src="/online_learning.svg"
                            layout='fill'
                            alt="programming learning"
                        />
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute bottom-10 inset-x-0 mx-auto w-fit'>
                        <Image
                            src="/arrow.svg"
                            width={'100px'}
                            height={'100px'}
                            alt="arrow"
                        />
                    </div>
                </div>


                <div className='border-2 border-orange h-fit w-2/3 mx-auto relative p-10 m-10'>
                    <div className='border-2 border-orange h-full w-full absolute top-2 left-3' />
                    <h2 className='text-3xl text-center relative'>Intro to Website Development</h2>
                    <div className='w-5/6 h-80 relative my-5 mx-auto'>
                        <Image
                            src="/static_website_cover.svg"
                            alt='static website cover'
                            layout='fill'
                        />   
                    </div>
                    <div className='text-center relative'>
                        <GradientButton>
                            <a href='classes/wev-dev'>See More</a>
                        </GradientButton>
                    </div>
                </div>
            </div>

                
        </>
    )
}

