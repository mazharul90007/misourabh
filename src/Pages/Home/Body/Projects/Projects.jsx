import { useEffect, useState } from 'react';
import Title from '../../../Shared/Title/Title';

const Projects = () => {
    const [projects, setProjects] = useState([]);


    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div className='mb-8 bg-secondary p-8'>
            <div className="">
                <Title firstLetter={'P'} title={'rojects'}></Title>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className='grid md:grid-cols-12 gap-4 p-3 border rounded shadow-md'>
                        {/* image */}
                        <div className='md:col-span-7'>
                            <img src={project.image} alt="project img" className='h-80 rounded w-full' />
                        </div>
                        {/* deacription */}
                        <div className='md:col-span-5 flex flex-col flex-grow'>
                            <h3 className='text-xl font-semibold text-primary font-robotoSlab'>{project.name}</h3>
                            <p className='text-gray-500 font-semibold mb-3'>{project.type}</p>

                            <p className='text-gray-400 flex-grow'>{project.description}</p>
                            <div className='mt-auto flex gap-2 text-sm'>
                                <button className='py-1 px-2 border border-primary border-b-2 border-r-2  text-gray-500 rounded-md hover:text-primary hover:scale-95 transition-transform duration-300 font-robotoSlab font-medium'>Live</button>

                                <button className='py-1 px-2 border border-primary border-b-2 border-r-2  text-gray-500 rounded-md hover:text-primary hover:scale-95 transition-transform duration-300 font-robotoSlab font-medium'>Client Code</button>

                                <button className='py-1 px-2 border border-primary border-b-2 border-r-2  text-gray-500 rounded-md hover:text-primary hover:scale-95 transition-transform duration-300 font-robotoSlab font-medium'>Server Code</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
