import KerryGhibli from "../../images/KerryGhibli.png";

const AboutMe = () => {
    return(
        <div className="flex flex-col justify-center items-center text-black p-4 gap-2 my-8">
            <h1 className="text-xl font-bold">About Me</h1>
            <div className="relative flex flex-col bg-gray-400 justify-center p-8 gap-1 rounded-lg shadow-lg shadow-gray-500/50 text-left">
                <img 
                    src={KerryGhibli}
                    alt="Kerry Ghibli" 
                    width={80}
                    height={80}
                    className="absolute top-[-20px] right-[-20px] rounded-full shadow-lg shadow-gray-500/50 z-50 border-2 border-gray-300"
                />
                <p>I'm a guy from a small town who likes to code in his <br /> free time and learn new technologies.</p>
                <p>I also know about backend, but I'm more into frontend.</p>
                
            </div>
        </div>
    );
}

export default AboutMe;