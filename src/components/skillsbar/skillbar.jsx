import { 
    FaHtml5,
    FaCss3,
    FaReact,
    FaNodeJs,
    FaFigma
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const SkillBar = () => {
    return(
        <div className="flex flex-col justify-center items-center text-black p-4 gap-4 my-7">
            <h1 className="text-xl font-bold">My Skills</h1>
            <div className="flex flex-row bg-gray-400 justify-center items-center p-4 gap-4 rounded-lg shadow-lg shadow-gray-500/50">
                <div className="relative group cursor-pointer">
                    <FaHtml5 
                        className="inline-block mr-2 bg-red-600 text-white rounded-sm hover:scale-110 transition-transform duration-300" 
                        size={30}
                    />
                    <span
                        class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border 
                        border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 
                        before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent
                        before:border-t-white"
                    >
                        HTML
                    </span> {/* Globo pequeño donde sale el nombre */}
                </div>
                <div className="relative group cursor-pointer">
                    <FaCss3 
                        className="inline-block mr-2 bg-blue-600 text-white rounded-sm hover:scale-110 transition-transform duration-300" 
                        size={30}
                    />
                    <span
                        class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border 
                        border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 
                        before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent
                        before:border-t-white"
                    >
                        Css
                    </span> {/* Globo pequeño donde sale el nombre */}
                </div>
                <div className="relative group cursor-pointer">
                    <IoLogoJavascript 
                        className="inline-block mr-2 bg-slate-600 text-yellow-500 rounded-sm hover:scale-110 transition-transform duration-300" 
                        size={30} 
                    />
                    <span
                        class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border 
                        border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 
                        before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent
                        before:border-t-white"
                    >
                        JavaScript
                    </span> {/* Globo pequeño donde sale el nombre */}
                </div>
                <div className="relative group cursor-pointer">
                    <FaReact 
                        className="inline-block mr-2 bg-slate-700 text-blue-400 rounded-sm hover:scale-110 transition-transform duration-300" 
                        size={30}
                    />
                    <span
                        class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border 
                        border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 
                        before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent
                        before:border-t-white"
                    >
                        React
                    </span> {/* Globo pequeño donde sale el nombre */}
                </div>
                <div className="relative group cursor-pointer">
                    <FaNodeJs 
                        className="inline-block mr-2 bg-green-600 text-white rounded-sm hover:scale-110 transition-transform duration-300"
                        size={30}
                    />
                    <span
                        class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border 
                        border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 
                        before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent
                        before:border-t-white"
                    >
                        Node.js
                    </span> {/* Globo pequeño donde sale el nombre */}
                </div>
                <div className="relative group cursor-pointer">
                    <RiTailwindCssFill 
                        className="inline-block mr-2 bg-sky-400 text-white rounded-sm hover:scale-110 transition-transform duration-300" 
                        size={30}
                    /> 
                    <span
                        class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border 
                        border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 
                        before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent
                        before:border-t-white"
                    >
                        Tailwind
                    </span> {/* Globo pequeño donde sale el nombre */}
                </div>
                <div className="relative group cursor-pointer">
                    <FaFigma 
                        className="inline-block mr-2 bg-black text-purple-600 rounded-sm hover:scale-110 transition-transform duration-300" 
                        size={30}
                    />
                    <span
                        class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border 
                        border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 
                        before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent
                        before:border-t-white"
                    >
                        Figma
                    </span> {/* Globo pequeño donde sale el nombre */}
                </div>
            </div>
        </div>
    );
}

export default SkillBar;