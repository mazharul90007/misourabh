import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
        document.getElementById('project_modal').showModal();
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.getElementById('project_modal').close();
    };

    return (
        <div className='my-16'>
            <h2 className="text-center text-4xl font-rye mb-5">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {projects.map((project, index) => (
                    <div key={index} className="group relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-lg">
                        {/* Zooming Background */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            style={{ backgroundImage: `url(${project.image})` }}
                        ></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 ease-in-out"></div>

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 text-white transition duration-300 ease-in-out">
                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            <button
                                onClick={() => openModal(project)}
                                className="text-sm py-2 px-4 bg-gray-400 border border-black border-r-2 border-b-2 rounded-md hover:scale-95 transition-transform duration-300 font-bold font-cinzel"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <dialog id="project_modal" className="modal modal-bottom sm:modal-middle">
                {selectedProject && (
                    <div className="modal-box">
                        <div>
                            <div className="text-center">
                                <h2 className="text-xl font-semibold">{selectedProject.name}</h2>
                                <p className="text-sm italic text-gray-500">{selectedProject.type}</p>
                            </div>
                            <img src={selectedProject.image} alt={selectedProject.name} className="w-full my-4 rounded-lg" />
                            <p>{selectedProject.description}</p>
                            <div className='flex items-center gap-2 my-6 justify-center'>
                                <Link>
                                    <button className="py-2 px-4 border border-black border-r-2 border-b-2 rounded-md hover:scale-95 transition-transform duration-300 font-bold font-cinzel">
                                        VISIT SITE
                                    </button>
                                </Link>
                                <p>or</p>
                                <button className="py-2 px-4 border border-black border-r-2 border-b-2 rounded-md hover:scale-95 transition-transform duration-300 font-bold font-cinzel">
                                    VISIT SOURCE
                                </button>
                            </div>
                        </div>
                        <div className="modal-action">
                            <button onClick={closeModal} className="btn">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </dialog>
        </div>
    );
};

export default Projects;
