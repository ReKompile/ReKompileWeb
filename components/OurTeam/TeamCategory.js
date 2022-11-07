function TeamCategory(props) {
	return (
		<div className={`flex flex-col justify-center items-center h-fit ${props.odd ? 'bg-darkcream' : ''}`}>
            <h1 className='font-bai-jamjuree text-4xl md:text-5xl my-5'>
                {props.header}
            </h1>

            <div className='flex flex-wrap justify-center items-center w-full h-full'>
                {props.children}
            </div>
        </div>
	)
}

export default TeamCategory
