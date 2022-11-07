import TeamMember from "../components/OurTeam/TeamMember";

export default function OurTeam() {
	return (
        <div className='page-body relative flex-col'>
            <header className='text-4xl md:text-5xl font-belgrano leading-normal text-center lg:text-lef my-10'>
                Meet the Team
            </header>
            
            <div className="flex flex-wrap justify-center align-center mb-10">
                <TeamMember name='Zackaria Ghanbari' portrait='/team/zackaria ghanbari.jpg' role='Co-founder'>
                    A high school student who loves to code and is passionate about helping others.
                </TeamMember>
                <TeamMember name='Ali Rastegar' portrait='/team/ali rastegar.png' role='Co-founder'>
                    Ali thinks descriptions are boring. He mentions, though, that he codes every day.
                </TeamMember>
                <TeamMember name='Abid Raza Mir' portrait='/team/abid raza mir.png' role='Technical Advisor'>
                    Abid is a software engineer who is a co-founder of a startup and a mentor at ReKompile.
                </TeamMember>
                <TeamMember name='Abbas Abidi Mir' portrait='/team/abbas abidi mir.png' role='Technical Manager'>
                </TeamMember>
                <TeamMember name='Kumel Hasni' portrait='/team/kumel hasni.png' role='Technical Manager'>
                </TeamMember>
                <TeamMember name='Ali Haidar Salak' portrait='/team/ali haidar salak.png' role='Marketer'>
                </TeamMember>
                <TeamMember name='Muhammad Hadi Yusufali' portrait='/team/blank.png' role='Marketer'>
                </TeamMember>
                <TeamMember name='Muhammad Abidi Mir' portrait='/team/blank.png' role='Recruiter'>
                </TeamMember>
                <TeamMember name='Amin Kiaei' portrait='/team/blank.png' role='Developer'>
                </TeamMember>
                <TeamMember name='Hayaan Rizvi' portrait='/team/blank.png' role='Developer'>
                </TeamMember>
                <TeamMember name='Ali Isa Talebi' portrait='/team/blank.png' role='Developer'>
                </TeamMember>
                <TeamMember name='Hasib Abbas' portrait='/team/blank.png' role='Developer'>
                </TeamMember>
                <TeamMember name='Hasan Abidi' portrait='/team/hasan abidi.png' role='Developer'>
                </TeamMember>
            </div>
        </div>
	)
}