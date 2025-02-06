
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import profileImg from '../../../../assets/profileImg.png'

const Banner = () => {
    return (
        <div className="my-10 shadow-md">
            <div className="hero bg-secondary w-full p-8 mt-40 rounded-t-[100px]">
                <div className="hero-content flex-col items-center w-full mx-auto px-4 pt-40 relative">
                    {/* Right Section */}
                    <div className="w-full flex justify-center items-center absolute -top-36">
                        <img
                            src={profileImg}
                            alt="A professional portrait"
                            className="rounded-lg max-w-full shadow-xl border border-r-4 border-b-4 border-black h-60 bg-paper"
                        />
                    </div>
                    {/* Left Section */}
                    <div className="flex-col justify-start space-y-4">
                        <h1 className="text-4xl md:text-5xl  font-robotoSlab font-semibold">Mazharul Islam Sourabh</h1>
                        <h3 className="text-xl md:text-2xl font-semibold text-center">Web Developer</h3>
                        <p className="text-xl font-semibold text-gray-500">I create user-friendly interface for fast-growing startups</p>
                        <a href="/Resume_of_Sourabh.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="py-2 my-4 px-4 border border-black border-r-2 border-b-2 rounded-md hover:scale-95 transition-transform duration-300 font-bold">
                                View Resume
                            </button>
                        </a>
                        <div className="flex gap-3 text-3xl ">
                            <a href="https://www.linkedin.com/in/mazharul-islam-sourabh-4111b3227/" target="_blank" rel="noopener noreferrer">
                                <div className="p-1 border border-r-2 border-b-2 shadow-md rounded  border-black hover:scale-95 transition-transform duration-300 cursor-pointer"><FaLinkedinIn /></div>
                            </a>

                            <a href="https://github.com/mazharul90007" target="_blank" rel="noopener noreferrer">
                                <div className="p-1 border border-r-2 border-b-2 shadow-md rounded  border-black hover:scale-95 transition-transform duration-300 cursor-pointer"><FaGithub /></div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;