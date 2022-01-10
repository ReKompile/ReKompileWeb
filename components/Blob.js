import Image from 'next/image'

function Blob({blobType = 1, className = '', size = '1/2', style = {}}) {
	return (
        <div className={`absolute -z-10 w-${size} h-${size} ${className}`} style={style}>
            <Image src={`/decorations/blobs/blob${blobType}.svg`} layout='fill' alt='ReKompile Logo'/>
        </div>
	)
}

export default Blob
