import GradientButton from '../components/GradientButton'
import TeamList from '../components/OurTeam/TeamList'
import TeamMember from '../components/OurTeam/TeamMember'

export default function OurTeam() {
	return (
		<div className='page-body relative flex-col'>
			<header className='text-4xl md:text-5xl font-belgrano leading-normal text-center lg:text-lef my-6 text-orange'>
				Meet the Team
			</header>
			<div className='text-center text-xl -mb-3 text-[#222975]'>
				Our team is our pride. These volunteers are the ones who make it
				all happen.
			</div>
			<div className='text-orange text-5xl text-center mb-6'>...</div>

			<TeamList>
				<TeamMember
					name='Zackaria Ghanbari'
					portrait='/team/zackaria_ghanbari.jpg'
					role='Co-founder & CTO'
				>
					Zack is an undergraduate student at Santa Clara University who has extensive experience in many areas of programming
					from web development to chatbots, and is passionate about
					creating new and innovative projects to help those in need.
				</TeamMember>
				<TeamMember
					name='Ali Rastegar'
					portrait='/team/ali_rastegar.png'
					role='Co-founder & CEO'
				>
					Ali is a passionate activist, data scientist, and undergraduate student at UCLA. He is a strong believer in the power of
					entrepreneurship and technology to help underserved
					communities. He also codes (almost) every day.
				</TeamMember>
				<TeamMember
					name='Abbas Raza Mir'
					portrait='/team/abbas_raza_mir.png'
					role='Co-founder & COO'
				>
					Abbas is an undergradudate student at UC Berkeley who loves computer
					programming and business. He believes computers are the
					world&apos;s most powerful weapon, and he strongly advocates
					for using the technology we have today for making the world
					a better place.
				</TeamMember>
				<TeamMember
					name='Abid Raza Mir'
					portrait='/team/abid_raza_mir.png'
					role='Technology & Strategy Advisor'
				>
					Abid is a university student who is a co-founder of an
					exciting Silicon Valley startup. He also serves as a
					mentor and advisor at ReKompile.
				</TeamMember>
				<TeamMember
					name='Hasan Abidi'
					portrait='/team/hasan_abidi.png'
					role='Director of Technology Development'
				>
					Hasan is a college student who is enamored by the disruptive
					power of technology. He strives to harness its potential for
					the betterment of society.
				</TeamMember>
				<TeamMember
					name='Kumel Hasni'
					portrait='/team/kumel_hasni.png'
					role='Technical Project Manager'
				>
					Kumel is a high school student who is interested in
					cyber-security and economics. He is seasoned in the
					non-profit sector and leads Community Connector.
				</TeamMember>
				<TeamMember
					name='Rasol Alofi'
					portrait='/team/rasol_alofi.png'
					role='Technical Project Manager'
				>
					Rasol is an eager computer science student and developer
					looking to transform the field of medicine through software
					solutions. He aspires to specialize in Machine Learning &
					Artificial Intelligence and Bioinformatics to develop a
					product which reduces the risk of illness and improves
					overall health. As a pastime, he enjoys building projects,
					learning about new technologies, volunteering, and binging
					shows.
				</TeamMember>
				<TeamMember
					name='Hayaan Rizvi'
					portrait='/team/hayaan_rizvi.png'
					role='Lead Software Developer'
				>
					A creative 3D artist and efficient programmer, Hayaan is an
					expert in Blender and has worked with a varied myriad of
					apps and programming languages.
				</TeamMember>
				<TeamMember
					name='Hasnain Mirza'
					portrait='/team/hasnain_mirza.png'
					role='Digital Marketing Specialist'
				>
					Hasnain is a uiversity student who is interested in
					anything STEM related, and is studying to make it into the
					biotechnology industry in order to improve the
					quality of life and well-being of individuals and serve society.
				</TeamMember>
				<TeamMember
					name='Muhammad Hadi Yusufali'
					portrait='/team/muhammad_hadi_yusufali.png'
					role='Director of Digital Marketing'
				>
					M Hadi is a high school student who is also a Multimedia
					Producer based in the San Fransisco Bay Area. He has worked
					on many multimedia projects, including video production and
					editing, photography, videography, graphic and web design,
					digital marketing, and more.
				</TeamMember>
				<TeamMember
					name='Ali Haidar Salak'
					portrait='/team/ali_haidar_salak.png'
					role='Digital Marketing Strategist'
				>
					Ali Salak is an undergraudate student at UC Davis who is interested in the intersection of technology and biology. He is passionate about using technology to help others and is excited to be a part of the ReKompile team.
				</TeamMember>
				<TeamMember
					name='Jari Rizvi'
					portrait='/team/jari_rizvi.png'
					role='Digital Marketing Strategist'
				>
					Jari Rizvi is a high school student who is interested in
					business and marketing. He has started a small business, and
					he is always looking for new ways to market his products and
					services. He is creative and resourceful, and he enjoys
					using social media to connect with new people.
				</TeamMember>
				<TeamMember
					name='Abbas Mirza'
					portrait='/team/abbas_mirza.png'
					role='Digital Marketing Strategist'
				>
					Abbas is a high school student who loves to generate ideas,
					get hands on, and enjoys problem solving and puzzles.
				</TeamMember>
				<TeamMember
					name='Abdullah Raza Mir'
					portrait='/team/abdullah_raza_mir.png'
					role='Talent Acquisition Specialist'
				>
					Abdullah is a high school student who is highly creative and
					driven to tackle old problems in new ways.
				</TeamMember>
				<TeamMember
					name='Amin Kiaei'
					portrait='/team/amin_kiaei.png'
					role='Software Developer'
				>
					Amin is a high school student interested in cybersecurity,
					programming, and mathematics. He loves to take initiative
					and help serve the community.
				</TeamMember>
				<TeamMember
					name='Ali Isa Talebi'
					portrait='/team/ali_isa_talebi.png'
					role='Software Developer'
				>
					Isa is a high school student interested in data science,
					artificial intelligence and physics. He hopes to build
					emerging technologies driven by AI.
				</TeamMember>
				<TeamMember
					name='Hasib Abbas'
					portrait='/team/hasib_abbas.png'
					role='Software Developer'
				>
					A high schooler looking to broaden his horizon with new
					experiences of working at a non-profit organization.
				</TeamMember>
			</TeamList>

			<div className='mb-10'>
				<h3 className='text-3xl md:text-4xl font-belgrano leading-normal text-center lg:text-lef mb-5'>
					Want to join?
				</h3>
				<GradientButton href='/contact-us' className='mx-auto block'>
					Contact us!
				</GradientButton>
			</div>
		</div>
	)
}
