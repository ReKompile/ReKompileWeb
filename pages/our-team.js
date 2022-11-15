import GradientButton from "../components/GradientButton";
import TeamList from "../components/OurTeam/TeamList";
import TeamMember from "../components/OurTeam/TeamMember";

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
					portrait='/team/zackaria ghanbari.jpg'
					role='Co-founder & CTO'
				>
					Zack has extensive experience in many areas of programming
					from web development to chatbots, and is passionate about
					creating new and innovative projects to help those in need.
				</TeamMember>
				<TeamMember
					name='Ali Rastegar'
					portrait='/team/ali rastegar.png'
					role='Co-founder & CEO'
				>
					Ali is a passionate activist, data scientist, and high
					school student. He is a strong believer in the power of
					entrepreneurship and technology to help underserved
					communities. He also codes everyday.
				</TeamMember>
				<TeamMember
					name='Abbas Raza Mir'
					portrait='/team/abbas raza mir.png'
					role='Co-founder & COO'
				>
					Abbas is a high school student who loves programming,
					business, and hard work; changing the world, one step at a
					time.
				</TeamMember>
				<TeamMember
					name='Abid Raza Mir'
					portrait='/team/abid raza mir.png'
					role='Technology & Strategy Advisor'
				>
					Abid is a college student who is a co-founder of an exicting
					Silicon Valley crypto startup. He also serves as a mentor
					and advisor at ReKompile.
				</TeamMember>
				<TeamMember
					name='Hasan Abidi'
					portrait='/team/hasan abidi.png'
					role='Director of Technology Development'
				>
					Hasan is a college student who is enamored by the disruptive
					power of technology. He strives to harness its potential for
					the betterment of society.
				</TeamMember>
				<TeamMember
					name='Kumel Hasni'
					portrait='/team/kumel hasni.png'
					role='Technical Project Manager'
				>
					Kumel is a high school student who is interested in
					cyber-security and economics. He is seasoned in the
					non-profit sector and leads Community Connector.
				</TeamMember>
				<TeamMember
					name='Hayaan Rizvi'
					portrait='/team/hayaan rizvi.png'
					role='Lead Software Developer'
				>
					A creative 3D artist and efficient programmer, Hayaan is an
					expert in Blender and has worked with a varied myriad of
					apps and programming languages.
				</TeamMember>
				<TeamMember
					name='Muhammad Hadi Yusufali'
					portrait='/team/muhammad hadi yusufali.png'
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
					portrait='/team/ali haidar salak.png'
					role='Digital Marketing Strategist'
				>
					Salak is him, and I am Salak. Avid sports fan and a lover of
					all things tech.
				</TeamMember>
				<TeamMember
					name='Abbas Mirza'
					portrait='/team/abbas mirza.png'
					role='Digital Marketing Strategist'
				>
					Abbas is a high school student who loves to generate ideas,
					get hands on, and enjoys problem solving and puzzles.
				</TeamMember>
				<TeamMember
					name='Abdullah Raza Mir'
					portrait='/team/abdullah raza mir.png'
					role='Talent Acquisition Specialist'
				>
					Abdullah is a high school student who is highly creative and
					driven to tackle old problems in new ways.
				</TeamMember>
				<TeamMember
					name='Amin Kiaei'
					portrait='/team/amin kiaei.png'
					role='Software Developer'
				>
					Amin is a high school student interested in cybersecurity,
					programming, and mathematics. He loves to take initiative
					and help serve the community.
				</TeamMember>
				<TeamMember
					name='Ali Isa Talebi'
					portrait='/team/ali isa talebi.png'
					role='Software Developer'
				>
					Isa is a high school student interested in data science,
					artificial intelligence and physics. He hopes to build
					emerging technologies driven by AI.
				</TeamMember>
				<TeamMember
					name='Hasib Abbas'
					portrait='/team/hasib abbas.png'
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