import Image from "next/image"

function TeamMember({name, role, portrait, children}) {
	return (
		<div className='flex flex-col justify-center items-center h-fit basis-full bg-darkcream py-4 m-2 border-2 border-orange rounded-xl'>
            <div className='object-contain relative w-32 h-32 overflow-hidden'>
                <Image src={portrait} layout='fill' objectFit="cover" className="rounded-full object-contain relative w-full" alt="person profile picture"/>
            </div>
            <h3 className="text-2xl text-center pt-2">{name}</h3>
            <h3 className="text-md leading-loose text-slate-600 uppercase text-center">{role}</h3>
            <p className="text-lg md:text-base px-5 pt-2">
                {children}
            </p>
        </div>
	)
}

export default TeamMember