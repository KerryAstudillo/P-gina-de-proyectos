import ImagenProyecto from "../../images/descarga.jpeg";


const MyProyects = () => {
    return(
        <div className="flex flex-col justify-center items-center gap-4 my-12">
            <h1 className="text-xl font-bold">My Proyects</h1>
            <div className="flex flex-row gap-2 justify-center items-center">
                {/*Primer Proyecto*/}
                <div className="relative group cursor-pointer overflow-hidden duration-500 flex w-[500px] h-80 bg-gray-400 text-gray-50 p-5 rounded-lg shadow-lg shadow-gray-500/50 m-2 items-center justify-center">
                    <div className="group-hover:-scale-110 w-[425px] h-60 bg-blue-400 duration-500 rounded-lg"/>
                        <img  
                            src={ImagenProyecto} 
                            alt="/"
                            width={500}
                            height={500} 
                            className="relative top-0 left-0 object-cover duration-500 group-hover:scale-110 rounded-lg"
                        />
                        <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                            <div className="absolute -z-10 left-0 flex w-[500px] h-[150px] opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-green-900 items-center justify-center text-center" />
                                <span className="text-xl font-bold">Red Social</span>
                                <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                                    Este proyecto hecho con React para el Frontend y python para el Backend.
                                </p>
                        </div>
                </div>
                {/*Segundo Proyecto*/}
                <div className="relative group cursor-pointer overflow-hidden duration-500 flex w-[500px] h-80 bg-gray-400 text-gray-50 p-5 rounded-lg shadow-lg shadow-gray-500/50 m-2 items-center justify-center">
                    <div className="group-hover:-scale-110 flex w-[425px] h-60 bg-blue-400 duration-500 rounded-lg" />
                        <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                            <div className="absolute -z-10 left-0 flex w-[500px] h-[150px] opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900 items-center justify-center text-center" />
                                <span className="text-xl font-bold">Otro Proyecto en Progreso</span>
                                <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                                    Este proyecto hecho con React para el Frontend y python para el Backend.
                                </p>
                        </div>
                </div>
                
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
                {/*Tercer Proyecto*/}
                <div className="relative group cursor-pointer overflow-hidden duration-500 flex w-[500px] h-80 bg-gray-400 text-gray-50 p-5 rounded-lg shadow-lg shadow-gray-500/50 m-2 items-center justify-center">
                    <div className="group-hover:-scale-110 w-[425px] h-60 bg-blue-400 duration-500 rounded-lg"/>
                        <img  
                            src={ImagenProyecto} 
                            alt="/"
                            width={500}
                            height={500} 
                            className="relative top-0 left-0 object-cover duration-500 group-hover:scale-110 rounded-lg"
                        />
                        <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                            <div className="absolute -z-10 left-0 flex w-[500px] h-[150px] opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-green-900 items-center justify-center text-center" />
                                <span className="text-xl font-bold">Red Social</span>
                                <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                                    Este proyecto hecho con React para el Frontend y python para el Backend.
                                </p>
                        </div>
                </div>
                {/*Cuarto Proyecto*/}
                <div className="relative group cursor-pointer overflow-hidden duration-500 flex w-[500px] h-80 bg-gray-400 text-gray-50 p-5 rounded-lg shadow-lg shadow-gray-500/50 m-2 items-center justify-center">
                    <div className="group-hover:-scale-110 w-[425px] h-60 bg-blue-400 duration-500 rounded-lg"/>
                        <img  
                            src={ImagenProyecto} 
                            alt="/"
                            width={500}
                            height={500} 
                            className="relative top-0 left-0 object-cover duration-500 group-hover:scale-110 rounded-lg"
                        />
                        <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                            <div className="absolute -z-10 left-0 flex w-[500px] h-[150px] opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-green-900 items-center justify-center text-center" />
                                <span className="text-xl font-bold">Red Social</span>
                                <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                                    Este proyecto hecho con React para el Frontend y python para el Backend.
                                </p>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default MyProyects;