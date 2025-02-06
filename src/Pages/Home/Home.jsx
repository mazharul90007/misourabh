// import Sidebar from "../../Components/Sidebar/Sidebar";
// import AboutMe from "./AboutMe/AboutMe";
// import Banner from "./Body/Banner/Banner";
// import Contact from "./Contact/Contact";
// import Education from "./Education/Education";
// import Experience from "./Body/Experience/Experience";
// import Progress from "./Progress/Progress";
// import Projects from "./Body/Projects/Projects";
// import Skill from "./Body/Skill/Skill";
import { Outlet } from "react-router-dom";



const Home = () => {
    return (
        <div className="">
            <Outlet></Outlet>
        </div>
    );
};

export default Home;