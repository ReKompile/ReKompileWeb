import Image from "next/image"

function TeamMember({name, portrait}) {
	return (
		<div className={`flex flex-col justify-center items-center h-80 w-80`}>
            <h3 className="text-3xl leading-loose">{name}</h3>
            <div className='object-contain relative w-52 h-52 overflow-hidden'>
                <Image src={portrait} layout='fill' objectFit="cover" className="rounded-full object-contain relative w-full"/>
            </div>
        </div>
	)
}

export default TeamMember