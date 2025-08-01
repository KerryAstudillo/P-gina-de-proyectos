

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between items-center bg-gray-800 text-white p-4">
            <div className="flex items-center">
                <h1 className="font-semibold">KERRY ASTUDILLO</h1>
            </div>
            <div className="flex space-x-4">
                <a href=""> {/* link a skills */}
                    <button className="hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
                        <h2>My Skills</h2>
                    </button>
                </a>
                <a href=""> {/* link a about me */}
                    <button className="hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
                        <h2>About Me</h2>
                    </button>
                </a>
                <a href=""> {/* link a projects */}
                    <button className="hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
                        <h2>My Proyects</h2>
                    </button>
                </a>
                <a href=""> {/* link a contact */}
                    <button className="hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
                        <h2>Contact</h2>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Navbar;