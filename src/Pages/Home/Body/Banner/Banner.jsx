import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import profileImg from '../../../../assets/profileImg.png';
import Typewriter from 'typewriter-effect';
import { FaFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Banner = () => {
    const socialIcons = [
        {
            id: "linkedin",
            icon: <FaLinkedinIn />,
            href: "https://www.linkedin.com/in/mazharul-islam-sourabh-4111b3227/"
        },
        {
            id: "github",
            icon: <FaGithub />,
            href: "https://github.com/mazharul90007"
        },
        {
            id: "facebook",
            icon: <FaFacebook />,
            href: "https://www.facebook.com/mazharul90007"
        }
    ];

    const positionStyles = [
        { top: 0, left: '50%', x: '-50%', y: 0 },
        { top: '100%', left: '100%', x: '-100%', y: '-100%' },
        { top: '100%', left: 0, x: 0, y: '-100%' }
    ];

    const [index, setIndex] = useState(0);

    // Rotate every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % 3);
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="my-10 shadow">
            <div className=" bg-secondary w-full p-4 md:p-8 mt-36 rounded-t-[100px] ">
                <div className="hero-content flex-col items-center w-full mx-auto px-4 pt-40 relative">
                    {/* Profile Image */}
                    <div className="w-full flex justify-center items-center absolute -top-36">
                        <img
                            src={profileImg}
                            alt="A professional portrait"
                            className="rounded-lg max-w-full shadow-xl border border-r-4 border-b-4 border-gray-700 h-52 md:h-60 bg-background"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-start items-center space-y-4 w-full">
                        <h1 className="text-4xl md:text-5xl font-robotoSlab font-semibold text-center text-gray-700">
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
                        <p className="font-medium md:text-lg text-gray-500 text-center w-11/12 md:w-9/12 mx auto">
                            A passionate Junior Developer who loves creating user-friendly interfaces and building responsive web applications for fast-growing startups.
                        </p>

                        <div className="flex justify-between items-end w-full pt-16">
                            {/* Resume Button */}
                            <a href="/Resume_of_Sourabh.pdf" target="_blank" rel="noopener noreferrer">
                                <button className="py-2 px-4 border border-primary border-b-2 border-r-2  text-gray-600 rounded-md hover:text-primary hover:scale-95 transition-transform duration-300 shadow font-robotoSlab font-bold">
                                    View Resume
                                </button>
                            </a>

                            {/* Social Links - Animated Triangle */}
                            <div className="relative w-28 h-24">
                                {socialIcons.map((item, i) => {
                                    const pos = positionStyles[(i + index) % 3]; // rotate positions
                                    return (
                                        <motion.a
                                            key={item.id}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute"
                                            animate={{
                                                top: pos.top,
                                                left: pos.left,
                                                x: pos.x,
                                                y: pos.y
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 25
                                            }}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <div className="p-2.5 text-xl border border-primary border-b-2 border-r-2 text-gray-600 rounded-md hover:text-primary transition-transform duration-300 shadow">
                                                {item.icon}
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
