import { Link, NavLink } from "react-router-dom";
import cv from '../../../assets/cv3.png';
import navbg from '../../../assets/navbg.png';

const Navbar = () => {
    const navList = <>
        <NavLink 
            to={'/'}
            className={({ isActive }) => isActive ? "text-amber-700 font-bold" : "text-black"}
        >
            <li>Home</li>
        </NavLink>
        {/* <NavLink 
            to={'/resume'}
            className={({ isActive }) => isActive ? "text-amber-700 font-bold" : "text-black"}
        >
            <li>Resume</li>
        </NavLink> */}
        <NavLink 
            to={'/contact'}
            className={({ isActive }) => isActive ? "text-amber-700 font-bold" : "text-black"}
        >
            <li>Contact</li>
        </NavLink>
    </>;

    return (
        <div className="navbar px-4" style={{ backgroundImage: `url(${navbg})`, backgroundRepeat: 'repeat' }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navList}
                    </ul>
                </div>
                <Link to={'/'}>
                    <h2 className="text-6xl font-fuggles cursor-pointer">miSourabh</h2>
                </Link>
            </div>
            <div className="navbar-center">
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal gap-5 hidden lg:flex text-lg font-semibold font-cinzel mr-2">
                    {navList}
                </ul>
                <a href="/Resume_of_Sourabh.pdf" target="_blank" rel="noopener noreferrer">
                    <img className="w-12 h-12" src={cv} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
