import { FaBuilding, FaUserAlt } from "react-icons/fa";
import Title from "../../../Shared/Title/Title";

const Experience = () => {
    return (
        <div className="mb-8 bg-secondary p-4 md:p-8">
            <div className="">
                <Title firstLetter={'E'} title={'xperience'}></Title>
            </div>
            <section className="">
                <div className=" p-6 border border-gray-300 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4 mb-4">
                        <FaBuilding className="text-primary text-3xl" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">QuikMart, Newcastle, Australia</h3>
                            <p className="text-gray-500 text-sm">January 1, 2024 – June 30, 2024</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                        <FaUserAlt className="text-primary text-3xl" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800">Front of House (FOH)</h4>
                            <ul className="list-disc pl-6 text-gray-500 md:text-lg">
                                <li>Provided excellent customer service in a fast-paced supermarket environment.</li>
                                <li>Managed checkout processes and assisted customers with product inquiries.</li>
                                <li>Ensured store cleanliness, organized stock, and maintained product availability.</li>
                                <li>Collaborated with team members to enhance customer experience and store operations.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4 rounded-md">
                        <h5 className="text-lg font-semibold text-gray-800">Key Responsibilities:</h5>
                        <ul className="list-disc pl-6 text-gray-500 md:text-lg">
                            <li>Managed inventory and ensured stock levels were maintained.</li>
                            <li>Provided personalized support, helping customers with their shopping needs.</li>
                            <li>Ensured smooth operations at checkout while maintaining high service standards.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;