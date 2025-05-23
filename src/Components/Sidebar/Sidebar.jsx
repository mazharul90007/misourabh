import { FaUser, FaPaperPlane, FaLaptopCode, FaDownload } from "react-icons/fa";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css"; // Import styles
import "../../customButton.css"; // ✅ Correctly import custom styles

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
        <div className="grid grid-cols-5 lg:grid-cols-1 gap-2 items-center w-fit font-semibold bg-paper lg:bg-transparent py-1 mx-auto">
            {menuItems.map((item) => (
                <AwesomeButton 
                    key={item.name} 
                    type={`${active === item.name? 'secondary' : 'primary'}`}
                    className="aws-btn"
                    onPress={() => handleSideButton(item.name)}
                >
                    <div className="flex flex-col items-center gap-1 text-white">
                        <span className="text-xl md:text-2xl text-white">{item.icon}</span>
                        <p className="text-xs md:text-md">{item.name}</p>
                    </div>
                </AwesomeButton>
            ))}
        </div>
    );
};

export default Sidebar;
