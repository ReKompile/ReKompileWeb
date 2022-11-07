import WhiteButton from './WhiteButton'

export default function PortfolioBox({ title, description, image, link, color}) {
	return (
		<div className={`box ${color}`}>
			<div className='box-data'>
				<h1>{title}</h1>
				<p className='box-text'>{description}</p>
				<WhiteButton href={link}>Visit</WhiteButton>
			</div>
			<div className='box-img'>
				<img className='box-img-img' src={image} />
			</div>
		</div>
	)
}

