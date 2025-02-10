import { FaUser, FaPaperPlane, FaLaptopCode, FaDownload } from "react-icons/fa";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";

const Sidebar = () => {
    const [active, setActive] = useState("BIO");

    const menuItems = [
        { name: "BIO", icon: <FaUser /> },
        { name: "EDUCATION", icon: <FaGraduationCap /> },
        { name: "PROJECTS", icon: <FaLaptopCode /> },
        { name: "CONTACT", icon: <FaPaperPlane /> },
        { name: "RESUME", icon: <FaDownload /> },
    ];

    const handleSideButton = (item) => {
        setActive(item);
    
        if (item === "BIO") {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (item === "EDUCATION") {
            document.getElementById("education")?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (item === "PROJECTS") {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (item === "CONTACT") {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (item === "RESUME") {
            window.open("/Resume_of_Sourabh.pdf", "_blank"); // Opens the resume in a new tab
        }
    };
    

        return (
            <div className="grid grid-cols-5 md:grid-cols-1 gap-2 items-center w-fit font-semibold bg-paper md:bg-transparent py-1">
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        className={` p-2 md:p-4 gap-1 items-center shadow rounded-lg md:w-20 
                        hover:text-primary bg-secondary cursor-pointer relative transition-all duration-300
                        ${active === item.name ? "text-primary" : "text-gray-700"}
                     hover:scale-95`}
                        onClick={() => handleSideButton(item.name)}
                    >
                        <div className="flex flex-col items-center gap-1">
                            <span className=" text-xl md:text-2xl">{item.icon}</span>
                            <p className="text-xs md:text-md">{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    export default Sidebar;
