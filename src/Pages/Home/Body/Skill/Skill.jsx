import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaCheck } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiFirebase, SiExpress, SiMongodb, SiDaisyui } from "react-icons/si";
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-2xl" />, progress: 95, color: "#EA580B" },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-2xl" />, progress: 90, color: "#2663EB" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500 text-2xl" />, progress: 90, color: "#0DA5E9" },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-2xl" />, progress: 85, color: "#9333EA" },
        { name: "DaisyUI", icon: <SiDaisyui className="text-teal-500 text-2xl" />, progress: 95, color: "#13B8A6" },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-2xl" />, progress: 90, color: "#EAB307" },
        { name: "React", icon: <FaReact className="text-cyan-500 text-2xl" />, progress: 95, color: "#05B6D4" },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500 text-2xl" />, progress: 80, color: "#F97317" },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" />, progress: 70, color: "#21C55E" },
        { name: "Express.js", icon: <SiExpress className="text-gray-700 text-2xl" />, progress: 75, color: "#374131" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" />, progress: 70, color: "#16A34A" },
    ];

    const softSkills = [
        {skill: 'Comunication Skills'},
        {skill: 'Problem Solving'},
        {skill: 'Teamwork & Collaboration'},
        {skill: 'Adaptability & Continuous Learning'},
        {skill: 'Attention to Detail'},
    ]

    return (
        <div className="my-8 p-8 bg-secondary">
            <section className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-robotoSlab mb-3 font-semibold border-b-2 py-3">
                        <span className="text-primary">T</span>ech Skills
                    </h2>
                    <div className="grid md:grid-cols-2  gap-2 mb-16">
                        {skills.map((skill, index) => (
                            <div key={index} className="text-center p-4 shadow rounded-md bg-[#fcd2c3] w-full">
                                <div className="flex items-center justify-center mb-2">
                                    {skill.icon}
                                    <p className="text-gray-500 font-medium ml-2">{skill.name}</p>
                                </div>
                                <div className="w-full">
                                    <ProgressBar
                                        completed={skill.progress}
                                        bgColor={skill.color}
                                        width="100%"
                                        height={8}
                                        isLabelVisible={false} // Hides percentage text
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Technical Skills */}

                {/* Soft Skills */}
                <div className="md:col-span-1 pl-5 md:border-l">
                    <h2 className="text-2xl font-robotoSlab mb-3 font-semibold border-b-2 py-3">
                        <span className="text-primary">S</span>oft Skills
                    </h2>
                    <div className="space-y-3">
                        {
                            softSkills.map((softSkill,index) =>
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-primary"><FaCheck /></span>
                                    <p className="font-semibold text-gray-500">{softSkill.skill}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skill;
