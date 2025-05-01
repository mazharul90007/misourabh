import Title from "../../../Shared/Title/Title";

const AboutMe = () => {
    return (
        <div className="my-10 bg-secondary p-4 md:p-8" id="about">
            <Title firstLetter={"A"} title={"bout Me"}></Title>
            <div className="">

                <div className="my-4">

                    <p className="text-gray-500">I am <span className="text-gray-700 font-semibold">Mazharul Islam Sourabh</span>, a passionate Junior Web Developer with a strong focus on <span className="text-gray-700 font-semibold">MERN</span> stack development. My programming journey began in January 2023, and since then, I have been dedicated to honing my skills and staying up-to-date with the latest technologies. <br /><br />

                        What excites me most about web development is the ability to create interactive, user-friendly websites and applications that solve real-world problems. As I continue to grow as a developer, I am eager to work on more challenging projects, collaborate with other developers, and contribute to the ever-evolving tech landscape.</p>
                </div>


                <div className="space-y-2 my-8">
                    {/* Age */}
                    <div className="flex justify-between items-center border-b border-gray-400 pb-1">
                        <p className="py-1 px-3 bg-primary text-secondary rounded">Age</p>
                        <p className="text-gray-500 text-lg">28</p>
                    </div>
                    {/* Residence */}
                    <div className="flex justify-between items-center border-b border-gray-400 pb-1">
                        <p className="py-1 px-3 bg-primary text-secondary rounded">Residence</p>
                        <p className="text-gray-500 text-lg">Bangladesh</p>
                    </div>
                    {/* Email */}
                    <div className="flex justify-between items-center border-b border-gray-400 pb-1">
                        <p className="py-1 px-3 bg-primary text-secondary rounded">Email</p>
                        <p className="text-gray-500 text-lg">mazharul90007@gmail.com</p>
                    </div>
                    {/* Address */}
                    <div className="flex justify-between items-center border-b border-gray-400 pb-1">
                        <p className="py-1 px-3 bg-primary text-secondary rounded">Address</p>
                        <p className="text-gray-500 text-lg">Dhaka, Bangladesh</p>
                    </div>
                    {/* Phone */}
                    <div className="flex justify-between items-center border-b border-gray-400 pb-1">
                        <p className="py-1 px-3 bg-primary text-secondary rounded">Phone</p>
                        <p className="text-gray-500 text-lg">+880 1939562168</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;