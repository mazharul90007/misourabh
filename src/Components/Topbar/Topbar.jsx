// import cv from '../../assets/cv3.png';

import { Link } from "react-router-dom";

const Topbar = () => {

    const scrollToTop = ()=>{
        window.scrollTo({top:0, behavior: 'smooth'})
    }

    return (
        <div className='w-full bg-background lg:bg-transparent py-1'>
            <Link to={'/'} onClick={scrollToTop}>
                <div className='flex justify-start w-[98%] md:w-[96%] mx-auto '>
                    <h2 className='font-fuggles text-4xl lg:text-5xl font-bold text-gray-800 z-10'>miSourabh</h2>
                </div>
            </Link>
        </div>
    );
};

export default Topbar;