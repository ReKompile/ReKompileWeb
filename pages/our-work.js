import Image from 'next/image'
import GradientButton from '../components/GradientButton'
import Blob from '../components/Blob'
import PortfolioBox from '../components/PortfolioBox'

export default function OurWork() {

	return (
		<>
			<div className='classes-page'>
				<div className='inner-page'>
					{/* first container */}
					<div className='base-container'>
						<div className='main-heading'>
							<h2>
								You focus on your mission. We{"'"}ll take care
								of the rest.
							</h2>
							<img
								src='/classesAssets/line-vector.png'
								className='line-vector'
								alt='line vector'
							/>
						</div>

						<img
							src='/classesAssets/base-container-vector.png'
							className='container-vector'
							alt='container vector'
						/>
					</div>

					{/* items container */}

					<div className='items-container'>
						<div className='item forward'>
							<div className='overlap-images'>
								<img
									className='down-img'
									src='classesAssets/cutting-vector.png'
									width='300px'
								/>
								<img
									className='top-img'
									src='classesAssets/data-processing.png'
									width='200px'
								/>
							</div>
							<div className='text-data'>
								<h1>Tech driven solutions</h1>
								<p>
									Our talented team of developers will cater
									to your non profit organization{"'"}s unique
									needs in the technology-driven age. From
									custom-built platforms to responsive
									websites and mobile apps, we have you
									covered. We{"'"}ll work with your team to
									ensure that your organization is using
									technology to its fullest potential, and we
									{"'"}ll stay with you for the long term,
									providing support and maintenance.
								</p>
							</div>
						</div>
						<div className='item reverse'>
							<div className='overlap-images'>
								<img
									className='down-img'
									src='classesAssets/world-vector.png'
									width='300px'
								/>
								<img
									className='top-img'
									src='classesAssets/world.png'
									width='250px'
								/>
							</div>
							<div className='text-data'>
								<h1>Empoweringly youth led</h1>
								<p>
									Our entire development team is composed of
									young yet experienced volunteers. We
									strongly believe in the power of technology
									in the hands of individuals to transform
									society and empower communities. We want to
									help them achieve their goals and make a
									difference in the world.
								</p>
							</div>
						</div>
						<div className='item forward'>
							<div className='overlap-images'>
								<img
									className='down-img'
									src='classesAssets/letter-vector.png'
									width='300px'
								/>
								<img
									className='top-img'
									src='classesAssets/love-letter.png'
									width='200px'
								/>
							</div>
							<div className='text-data'>
								<h1>Fully free and affordable</h1>
								<p>
									We understand the time and money constraints
									of non-profit organizations, and so we make
									it a point to offer free of cost solutions.
									Our goal is simply to help non profits by
									making sure they have access to the best
									possible resources.
								</p>
							</div>
						</div>
						<div className='item reverse'>
							<div className='overlap-images'>
								<img
									className='down-img'
									src='classesAssets/mail-vector.png'
									width='300px'
								/>
								<img
									className='top-img'
									src='classesAssets/certificate.png'
									width='170px'
								/>
							</div>
							<div className='text-data'>
								<h1>Our experience speaks for itself</h1>
								<p>
									We may be youth powered, but our experience
									speaks for itself. Our diverse team includes
									some of the most passionate and driven high
									school students with experiences from around
									the world. Look below to see some of our
									most recent projects.
								</p>
							</div>
						</div>
					</div>

					<div className='page-divider'>
						<img src='classesAssets/Arrow.png' alt='page-divider' />
					</div>

					{/* products container */}
				</div>
				<div className='products-container'>
					<h1 className='portfolio-header'>Projects</h1>
					<PortfolioBox
						title='SABA Islamic Center'
						description='SABA is one of the largest Shia mosques in North America. It aims to serve the greater Muslim community by providing a platform for spiritual devotion, education, social integration and self-development based on the traditions of the Noble Qurʾan and Ahl al-Bayt.'
						image='\portfolioAssets\saba-igc-portfolio.png'
						link='https://www.saba-igc.org/'
						color='primary'
					/>
					<PortfolioBox
						title='Literacy International'
						description='Literacy International supports education in underserved communities by investing in educational infrastructure, foundational programs, and activities that provide sustained benefits over time to help raise educated children with high morals values, acquire valuable skills to raise their living standard and contribute to society.'
						image='\portfolioAssets\literacy-international-portfolio.png'
						link='https://literacyintl.org/'
						color='secondary'
					/>
					<PortfolioBox
						title='Heal Child Skin Disease Foundation'
						description='The Heal Child Skin Disease Foundation seeks to directly help those affected by severe skin diseases and more specifically Epidermolysis Bullosa (EB). Their goal is to raise funding to sponsor children affected by such diseases. 100% of the donations they receive are allocated towards treatment of our patients. Currently, Heal sponsors over 600 children who suffer from EB.'
						image='\portfolioAssets\heal-child-portfolio.png'
						link='https://asfco.ir/healchild/web/'
						color='warning'
					/>
					<PortfolioBox
						title='Community Connector'
						description='Community Connector is a high school led nonprofit which operates internationally with a mission of uniting the community in order to make an impact in society and help those in need. Some of their projects include relief for the Austin storm, a relief fund for Afghanistan, and sports equipment for children in Sri Lanka. They believe that by empowering individuals and communities, they can create a better world for everyone.'
						image='\portfolioAssets\community-connector.png'
						link='http://comconnector.weebly.com/'
						color='primary'
					/>
				</div>
			</div>
		</>
	)
}
