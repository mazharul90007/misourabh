import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaCheck, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiFirebase, SiExpress, SiMongodb, SiDaisyui, SiFigma, SiAdobephotoshop } from "react-icons/si";
import { motion } from "framer-motion";
import Title from "../../../Shared/Title/Title";
import { BiLogoVisualStudio } from "react-icons/bi";

const Skill = () => {
    const techSkills = [
        { name: "HTML5", icon: <FaHtml5 className="text-4xl" />, color: "from-orange-500 to-orange-700" },
        { name: "CSS3", icon: <FaCss3Alt className="text-4xl" />, color: "from-blue-500 to-blue-700" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl" />, color: "from-cyan-400 to-blue-600" },
        { name: "Bootstrap", icon: <SiBootstrap className="text-4xl" />, color: "from-purple-500 to-purple-700" },
        { name: "DaisyUI", icon: <SiDaisyui className="text-4xl" />, color: "from-teal-400 to-emerald-600" },
        { name: "JavaScript", icon: <FaJs className="text-4xl" />, color: "from-yellow-400 to-yellow-600" },
        { name: "React", icon: <FaReact className="text-4xl" />, color: "from-cyan-400 to-blue-500" },
        { name: "Firebase", icon: <SiFirebase className="text-4xl" />, color: "from-amber-500 to-orange-500" },
        { name: "Node.js", icon: <FaNodeJs className="text-4xl" />, color: "from-green-500 to-green-700" },
        { name: "Express.js", icon: <SiExpress className="text-4xl" />, color: "from-gray-500 to-gray-700" },
        { name: "MongoDB", icon: <SiMongodb className="text-4xl" />, color: "from-green-600 to-green-800" },
        { name: "GitHub", icon: <FaGithub className="text-4xl" />, color: "from-gray-800 to-gray-900" },
        { name: "VSCode", icon: <BiLogoVisualStudio className="text-4xl" />, color: "from-blue-500 to-blue-700" },
        { name: "Figma", icon: <SiFigma className="text-4xl" />, color: "from-purple-400 to-pink-500" },
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-4xl" />, color: "from-blue-400 to-indigo-600" },
    ];

    const softSkills = [
        { skill: "Communication Skills" },
        { skill: "Problem Solving" },
        { skill: "Teamwork & Collaboration" },
        { skill: "Adaptability" },
        { skill: "Attention to Detail" },
    ];

    const card = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 10,
                duration: 0.5
            }
        },
        hover: {
            y: -5,
            scale: 1.03,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    const softSkillCard = {
        hidden: { opacity: 0, y: 20 },
        show: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.5
            }
        }),
        hover: {
            y: -3,
            scale: 1.02,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    const checkIcon = {
        hidden: { scale: 0 },
        show: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 8
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="my-8 p-4 md:p-8 bg-secondary"
        >
            {/* Tech Stack Section */}
            <div className="mb-12">
                <Title firstLetter={'T'} title={'ech Skills'} />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {techSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="group rounded-xl p-6 text-center backdrop-blur-sm bg-white/70 shadow-lg hover:shadow-xl border border-white/20 "
                            variants={card}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover="hover"
                        >
                            <motion.div
                                className={`w-16 h-16 mx-auto rounded-2xl mb-4 flex items-center justify-center bg-gradient-to-br ${skill.color} text-white`}
                            >
                                {skill.icon}
                            </motion.div>
                            <h3 className="font-bold text-gray-800  group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
                                {skill.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Soft Skills Section */}
            <div>
                <Title firstLetter={'S'} title={'oft Skills'} />
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {softSkills.map((softSkill, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-3 p-4 bg-white/80 rounded-lg shadow-md border border-white/30"
                            variants={softSkillCard}
                            custom={index}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover="hover"
                        >
                            <motion.span
                                className="text-primary"
                                variants={checkIcon}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <FaCheck />
                            </motion.span>
                            <p className="font-medium text-gray-700">{softSkill.skill}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Skill;
