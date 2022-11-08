import TeamMember from "../components/OurTeam/TeamMember";

export default function OurTeam() {
	return (
        <div className='page-body relative flex-col'>
            <header className='text-4xl md:text-5xl font-belgrano leading-normal text-center lg:text-lef my-10'>
                Meet the Team
            </header>
            
            <div className="flex flex-wrap justify-center align-center mb-10">
                <TeamMember name='Zackaria Ghanbari' portrait='/team/zackaria ghanbari.jpg' role='Co-founder'>
                    Zack has extensive experience in many areas of programming from web development to chatbots, and is passionate about creating new and innovative projects to help those in need.
                </TeamMember>
                <TeamMember name='Ali Rastegar' portrait='/team/ali rastegar.png' role='Co-founder'>
                    Ali thinks descriptions are boring. He mentions, though, that he codes every day.
                </TeamMember>
                <TeamMember name='Abbas Raza Mir' portrait='/team/abbas raza mir.png' role='Co-founder'>
                    High school student who loves programming, business, and hard work; changing the world, one step at a time.
                </TeamMember>
                <TeamMember name='Abid Raza Mir' portrait='/team/abid raza mir.png' role='Technical Advisor'>
                    Abid is a software engineer who is a co-founder of a startup and a mentor at ReKompile.
                </TeamMember>
                <TeamMember name='Kumel Hasni' portrait='/team/kumel hasni.png' role='Technical Manager'>
                    Kumel is a highschool student who is interested in cyber-security and economics. He is also the co-founder of Community Connector.
                </TeamMember>
                <TeamMember name='Ali Haidar Salak' portrait='/team/ali haidar salak.png' role='Marketer'>
                    Salak is him, and I am Salak. Avid sports fan and a lover of all things tech.
                </TeamMember>
                <TeamMember name='Muhammad Hadi Yusufali' portrait='/team/muhammad hadi yusufali.png' role='Marketer'>
                    M Hadi is a Multimedia Producer based in the San Fransisco Bay Area. He has worked on many multimedia projects, including video production and editing, photography, videography, graphic and web design, digital marketing, and more.
                </TeamMember>
                <TeamMember name='Abduallah Raza Mir' portrait='/team/abdullah raza mir.png' role='Recruiter'>
                    A high school student who is creative and passionate about making a difference.
                </TeamMember>
                <TeamMember name='Amin Kiaei' portrait='/team/amin kiaei.png' role='Developer'>
                    Amin is a high school student interested in cybersecurity, programming, and mathematics. He loves to take initiative and help serve the community.
                </TeamMember>
                <TeamMember name='Hayaan Rizvi' portrait='/team/hayaan rizvi.png' role='Developer'>
                    A creative 3D artist and efficient programmer, Hayaan is an expert in Blender and has worked with a varied myriad of apps and programming languages.
                </TeamMember>
                <TeamMember name='Ali Isa Talebi' portrait='/team/blank.png' role='Developer'>
                    Isa is a high school student interested in data science, artificial intelligence and physics. He hopes to build emerging technologies driven by AI.
                </TeamMember>
                <TeamMember name='Hasib Abbas' portrait='/team/hasib abbas.png' role='Developer'>
                </TeamMember>
                <TeamMember name='Hasan Abidi' portrait='/team/hasan abidi.png' role='Developer'>
                </TeamMember>
            </div>
        </div>
	)
}