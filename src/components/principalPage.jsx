import Navbar from "./navbar/navbar";
import SectionData from "./sectionData/sectionData";
import SkillBar from "./skillsbar/skillbar";
import AboutMe from "./aboutMe/aboutMe";
import MyProyects from "./myProyects/myProyects";

const PrincipalPage = () => {
    return(
        <div>
            <Navbar />
            <div className="flex flex-col bg-gray-300">
                <SectionData />
                <SkillBar />
            </div>
            <AboutMe />
            <MyProyects />
        </div>
    );
}

export default PrincipalPage;