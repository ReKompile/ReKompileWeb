import WhiteButton from './WhiteButton'

export default function PortfolioBox({ title, description, image, link, color}) {
	return (
		<div className={`box ${color}`}>
			<div className='box-data'>
				<div>
					<h1>{title}</h1>
				</div>
				<div>
					<p className='box-text'>{description}</p>
				</div>
				<div>
					<WhiteButton href={link} useNextLink={false}>
						Visit
					</WhiteButton>
				</div>
			</div>
			<div className='box-img'>
				<img className='box-img-img' src={image} />
			</div>
		</div>
	)
}

