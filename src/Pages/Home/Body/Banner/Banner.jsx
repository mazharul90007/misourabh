import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import profileImg from '../../../../assets/profileImg.png';
import Typewriter from 'typewriter-effect';
import { FaFacebook } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="my-10 shadow">
            <div className=" bg-secondary w-full p-4 md:p-8 mt-36 rounded-t-[100px]">
                <div className="hero-content flex-col items-center w-full mx-auto px-4 pt-40 relative">
                    {/* Profile Image */}
                    <div className="w-full flex justify-center items-center absolute -top-36">
                        <img
                            src={profileImg}
                            alt="A professional portrait"
                            className="rounded-lg max-w-full shadow-xl border border-r-4 border-b-4 border-black h-52 md:h-60 bg-paper"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-start items-center space-y-4 w-full">
                        <h1 className="text-4xl md:text-5xl font-robotoSlab font-semibold text-center">
                            Mazharul Islam Sourabh
                        </h1>

                        {/* Centered Typewriter */}
                        <div className="flex justify-center w-full text-center text-xl md:text-2xl font-semibold text-primary">
                            <Typewriter
                                options={{
                                    strings: ['Junior Web Developer', 'Frontend Developer', 'React Developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 30,
                                    deleteSpeed: 25
                                }}
                            />
                        </div>
                        <p className="font-semibold text-gray-500 text-center w-11/12 md:w-9/12 mx auto">
                            A passionate Junior Developer who loves creating user-friendly interfaces and building responsive web applications for fast-growing startups.
                        </p>

                        <div className="flex justify-between items-center w-full pt-20">
                            {/* Resume Button */}
                            <a href="/Resume_of_Sourabh.pdf" target="_blank" rel="noopener noreferrer">
                                <button className="py-2 px-4 border border-primary border-b-2 border-r-2  text-gray-500 rounded-md hover:text-primary hover:scale-95 transition-transform duration-300 shadow font-robotoSlab font-bold">
                                    View Resume
                                </button>
                            </a>

                            {/* Social Links */}
                            <div className="flex gap-3 text-xl">
                            <a href="https://www.facebook.com/mazharul90007" target="_blank" rel="noopener noreferrer">
                                    <div className="p-2 border border-primary border-b-2 border-r-2 text-gray-500 rounded-md hover:text-primary hover:scale-95 transition-transform duration-300 shadow font-robotoSlab font-bold">
                                        <FaFacebook />
                                    </div>
                                </a>
                                
                                <a href="https://www.linkedin.com/in/mazharul-islam-sourabh-4111b3227/" target="_blank" rel="noopener noreferrer">
                                    <div className="p-2 border border-primary border-b-2 border-r-2 text-gray-500 rounded-md hover:text-primary hover:scale-95 transition-transform duration-300 shadow font-robotoSlab font-bold">
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a href="https://github.com/mazharul90007" target="_blank" rel="noopener noreferrer">
                                    <div className="p-2 border border-primary border-b-2 border-r-2 text-gray-500 rounded-md hover:text-primary hover:scale-95 transition-transform duration-300 shadow font-robotoSlab font-bold">
                                        <FaGithub />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
