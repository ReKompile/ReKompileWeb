import BoolAlternator from "../components/BoolAlternator";
import TeamCategory from "../components/OurTeam/TeamCategory";
import TeamMember from "../components/OurTeam/TeamMember";

export default function OurTeam() {
	return (
        <div className='page-body relative flex-col'>
            <header className='text-4xl md:text-5xl font-belgrano leading-normal text-center lg:text-lef my-10'>
                Meet the Team
            </header>
            
            <BoolAlternator>
                <TeamCategory header='Founders'>
                    <TeamMember name='Zackaria Ghanbari' portrait='/team/zackaria ghanbari.jpg'/>
                    <TeamMember name='Ali Rastegar' portrait='/team/ali rastegar.png'/>
                </TeamCategory>

                <TeamCategory header='Techinical Managers'>
                    <TeamMember name='Abbas Abidi Mir' portrait='/team/blank.png'/>
                    <TeamMember name='Kumel Hasni' portrait='/team/blank.png'/>
                </TeamCategory>

                <TeamCategory header='Marketers'>
                    <TeamMember name='Ali Haidar Salak' portrait='/team/blank.png'/>
                    <TeamMember name='Muhammad Yusufali' portrait='/team/blank.png'/>
                </TeamCategory>

                <TeamCategory header="Recruiters">
                    <TeamMember name='Muhammad Abidi Mir' portrait='/team/blank.png'/>
                </TeamCategory>

                <TeamCategory header="Developers">
                    <TeamMember name='Amin Keiai' portrait='/team/blank.png'/>
                    <TeamMember name='Hayaan Rizvi' portrait='/team/blank.png'/>
                    <TeamMember name='Ali Isa Talebi' portrait='/team/blank.png'/>
                    <TeamMember name='Hasib Abbas' portrait='/team/blank.png'/>
                    <TeamMember name='Hasan Abidi' portrait='/team/blank.png'/>
                </TeamCategory>
            </BoolAlternator>
        </div>
	)
}