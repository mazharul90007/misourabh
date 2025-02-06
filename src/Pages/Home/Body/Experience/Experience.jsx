import { FaBuilding, FaUserAlt } from "react-icons/fa";

const Experience = () => {
    return (
        <div className="mb-8 bg-secondary p-8">
            <div className="">
                <h2 className="text-2xl font-robotoSlab mb-5 font-semibold border-b-2 py-3">
                    <span className="text-primary">E</span>xperience
                </h2>
            </div>
            <section className="">
                <div className=" p-6 border  rounded-lg shadow-md">
                    <div className="flex items-center space-x-4 mb-4">
                        <FaBuilding className="text-primary text-3xl" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">QuikMart, Newcastle, Australia</h3>
                            <p className="text-gray-600 text-sm">January 1, 2023 – June 30, 2023</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                        <FaUserAlt className="text-primary text-3xl" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800">Front of House (FOH)</h4>
                            <ul className="list-disc pl-6 text-gray-700">
                                <li>Provided excellent customer service in a fast-paced supermarket environment.</li>
                                <li>Managed checkout processes and assisted customers with product inquiries.</li>
                                <li>Ensured store cleanliness, organized stock, and maintained product availability.</li>
                                <li>Collaborated with team members to enhance customer experience and store operations.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4 rounded-md">
                        <h5 className="text-lg font-semibold text-gray-800">Key Responsibilities:</h5>
                        <ul className="list-disc pl-6 text-gray-700">
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