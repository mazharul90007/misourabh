
import emailjs from "emailjs-com";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailAnimation from '../../../../../public/email.json'
import Lottie from "lottie-react";
import Title from "../../../Shared/Title/Title";
// import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email via EmailJS
        emailjs
            .sendForm("service_qhxicgg", "template_sixmgpf", e.target, "-W2u0QQ0zK7n5JowH")
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Your message has been sent successfully!");
                    // Reset the form
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.log(error.text);
                    alert("Something went wrong, please try again.");
                }
            );
    };

    return (
        <div className="bg-secondary p-4 md:p-8 mb-8" id="contact">
            <div className="">
                <Title firstLetter={'C'} title={'ontact Me'}></Title>
            </div>
            <div className="">
                <div className="flex flex-col md:flex-row  border  rounded-lg shadow-lg">

                    {/* Description Section */}
                    <div className=" md:w-1/2 flex flex-col items-center p-6 shadow-md">
                        {/* Image */}
                        <div className="w-60 h-60">
                            <Lottie animationData={emailAnimation}></Lottie>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-4 text-center">
                            <h2 className="text-xl font-semibold text-gray-800">Mazharul Islam Sourabh</h2>
                            <p className="text-gray-600">Junior Web Developer</p>

                            {/* Details */}
                            <div className="mt-4 space-y-3">
                                <div className="flex items-center text-gray-700">
                                    <FaPhoneAlt className="mr-2 text-blue-500" />
                                    <span>+880-1939562168</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <FaEnvelope className="mr-2 text-blue-500" />
                                    <span>mazharul90007@gmail.com</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                                    <span>Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <p className="mt-6 text-center text-gray-600 text-sm">
                            If you have any queries at all, please feel free to reach out, and I will
                            gladly answer them. Thanks for visiting.

                        </p>
                    </div>


                    {/* Form Section */}
                    <div className="md:w-1/2 p-6 bg-[#F0F0F0]">
                        <h2 className=" text-center text-3xl font-semibold font-robotoSlab mb-5">Lets Connect</h2>

                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols gap-6">
                                    {/* Name Input */}
                                    <div>
                                        <label className="block text-lg font-medium text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label className="block text-lg font-medium text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="mt-6">
                                    <label className="block text-lg font-medium text-gray-700">Your Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="6"
                                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="mt-6 text-center">
                                    <button className="py-2 px-4 border border-black border-r-2 border-b-2 rounded-md hover:scale-95 transition-transform duration-300 font-bold">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Contact;