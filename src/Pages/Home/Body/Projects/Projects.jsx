import Title from '../../../Shared/Title/Title';
import { FiExternalLink, FiGithub } from "react-icons/fi";
import nestTree from "../../../../assets/nestree.webp";
import recommendo from "../../../../assets/recommendo.webp";
import equiSports from "../../../../assets/equiSports.webp";

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: nestTree,
            name: "NestTree",
            type: "Real Estate Marketplace",
            description: "Nesttree is a dynamic marketplace where users can browse, list, and manage properties. The platform provides an intuitive experience for users looking to buy properties, and for agents and admins to manage listings.",
            liveLink: "https://nesttree-d03bc.web.app/",
            githubClient: "https://github.com/mazharul90007/nesttree-client",
            githubServer: "https://github.com/mazharul90007/nesttree-server",
            tags: ["React", "Firebase", "Node.js", "MongoDB"]
        },
        {
            id: 2,
            image: recommendo,
            name: "Recommendo",
            type: "Product Recommendation Platform",
            description: "Recommendo is a recommendation platform where users can submit their queries for product recommendations and provide suggestions to others.",
            liveLink: "https://recommendo-b1c90.web.app/",
            githubClient: "https://github.com/mazharul90007/recommendo",
            githubServer: "https://github.com/mazharul90007/recommendo-server",
            tags: ["React", "Firebase", "Express.js"]
        },
        {
            id: 3,
            image: equiSports,
            name: "EquiSports",
            type: "Sports Equipment E-commerce",
            description: "The Sports Equipment Online Store is a responsive e-commerce website designed to provide users with a platform to browse, purchase, and review various sports accessories, ranging from gear to apparel, catering to different sports disciplines. This project focuses on creating a dynamic, user-friendly shopping experience with full authentication and product management features.",
            liveLink: "https://equisports-d7611.web.app/",
            githubClient: "https://github.com/mazharul90007/equiSports",
            githubServer: "https://github.com/mazharul90007/equiSports-Server",
            tags: ["React", "Node.js", "MongoDB", "Stripe"]
        }
    ];

    return (
        <section id="projects" className=" my-8 p-4 md:p-8 bg-secondary">
            <div className="">
                <div className="">
                    <Title firstLetter="P" title="rojects" />
                </div>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div 
                            key={project.id}
                            className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
                        >
                            <div className="flex flex-col lg:flex-row h-[650px] lg:h-[450px]">
                                {/* Scrollable Image */}
                                <div className={`w-full lg:w-7/12 overflow-y-auto hide-scrollbar ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content */}
                                <div className={`w-full lg:w-5/12 p-6 flex flex-col ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                                    <p className="text-primary font-medium mt-2">{project.type}</p>
                                    <p className="text-gray-600 my-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded-full text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-base"
                                        >
                                            <FiExternalLink /> Live Demo
                                        </a>
                                        <a
                                            href={project.githubClient}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-base"
                                        >
                                            <FiGithub /> Client Code
                                        </a>
                                        {project.githubServer && (
                                            <a
                                                href={project.githubServer}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-color text-base"
                                            >
                                                <FiGithub /> Server Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
};

export default Projects;