import { useEffect, useState } from 'react';

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
                <h2 className="text-2xl font-robotoSlab mb-5 font-semibold border-b-2 py-3">
                    <span className="text-primary">P</span>rojects
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
                {projects.map((project, index) => (
                    <div key={index} className='grid md:grid-cols-12 gap-4 p-2 border border-amber-200 rounded shadow-md'>
                        {/* image */}
                        <div className='md:col-span-7'>
                            <img src={project.image} alt="project img" className='h-80 rounded w-full' />
                        </div>
                        {/* deacription */}
                        <div className='md:col-span-5 flex flex-col flex-grow'>
                            <h3 className='text-xl font-semibold text-primary font-robotoSlab'>{project.name}</h3>
                            <p className='text-gray-500 font-semibold mb-3'>{project.type}</p>

                            <p className='text-gray-400 flex-grow'>{project.description}</p>
                            <div className='mt-auto flex gap-2'>
                                <button className='py-1 px-3 border bg-white shadow rounded-md hover:text-primary font-medium text-gray-500 hover:scale-95 transition-transform transform'>Live</button>

                                <button className='py-1 px-3 border bg-white shadow rounded-md hover:text-primary font-medium text-gray-500 hover:scale-95 transition-transform transform'>Client Code</button>

                                <button className='py-1 px-3 border bg-white shadow rounded-md hover:text-primary font-medium text-gray-500 hover:scale-95 transition-transform transform'>Server Code</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
