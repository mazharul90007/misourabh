import { FaUser, FaList, FaNewspaper, FaPaperPlane, FaLaptopCode } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
    const [active, setActive] = useState("BIO");

    const menuItems = [
        { name: "BIO", icon: <FaUser /> },
        { name: "RESUME", icon: <FaList /> },
        { name: "PROJECTS", icon: <FaLaptopCode /> },
        { name: "BLOG", icon: <FaNewspaper /> },
        { name: "CONTACT", icon: <FaPaperPlane /> },
    ];

    const handleSideButton =(item)=>{
        setActive(item)
    }

    return (
        <div className="grid grid-cols-5 md:grid-cols-1 gap-2 items-center w-fit text-sm font-cinzel font-semibold">
            {menuItems.map((item) => (
                <div
                    key={item.name}
                    className={`p-4 gap-1 items-center shadow rounded-lg md:w-20 
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
