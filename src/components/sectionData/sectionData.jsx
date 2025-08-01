import KerryNormal from "../../images/KerryNormal.png";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

const SectioData = () => {
    return(
        <div className="flex flex-row justify-between items-center bg-gray-300 text-black p-4">
            <div className="flex flex-col justify-center items-start p-4 gap-4">
                <div className="flex flex-col justify-center items-start p-4 gap-1">
                    <h1 className="text-4xl font-bold text-left">FRONTEND WEB <br /> DEVELOPER</h1>
                    <h2>Hi, I'm <span className="font-semibold"> Kerry Astudillo</span></h2>
                    <h2 className="text-left">A passionate Frontend Web Developer <br />from Ecuador.</h2>
                </div>
                <div className="flex flex-row justify-center items-center p-4 gap-4">
                    <a href="https://www.linkedin.com/in/kerry-astudillo-7269a2352?lipi
                        =urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details
                        %3BW%2FXkFRovSgK6x7ZYuQeRfQ%3D%3D"> {/* link a mi pagina de linkedin */}
                        <button className="font-semibold justify-center items-center flex relative group cursor-pointer">
                            <FaLinkedin className="inline-block mr-2 bg-blue-600 text-white hover:text-blue-600 hover:bg-white transition duration-300" size={40}/>
                            <span
                                class="absolute top-12 left-[50%] -translate-x-[50%] z-20 origin-top scale-0 px-3 py-1.5 rounded-lg border 
                                    border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 
                                    before:absolute before:top-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent
                                    before:border-b-white"
                                >
                                    Mi perfil en Linkedin
                            </span> {/* Globo pequeño donde sale el nombre */}
                        </button>
                        
                    </a>
                    <a href="https://github.com/KerryAstudillo/Portafolio.git"> {/* link a mi pagina de github */}
                        <button className=" font-semibold justify-center items-center flex relative group cursor-pointer">
                            <VscGithub className="inline-block mr-2 bg-gray-600 text-white hover:text-black hover:bg-white rounded-full transition duration-300" size={40} />
                            <span
                                class="absolute top-12 left-[50%] -translate-x-[50%] z-20 origin-top scale-0 px-3 py-1.5 rounded-lg border 
                                    border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 
                                    before:absolute before:top-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent
                                    before:border-b-white"
                                >
                                    Mi repositorio en GitHub
                            </span> {/* Globo pequeño donde sale el nombre */}
                        </button>
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center p-4">
                <img 
                    src={KerryNormal} 
                    alt="Foto de Perfil"
                    width={300}
                    height={300}
                    className="rounded-full object-cover shadow-lg shadow-gray-500/50 border-2 border-white"
                />
            </div>
        </div>
    );
}

export default SectioData;