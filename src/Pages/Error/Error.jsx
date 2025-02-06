import Lottie from "lottie-react";
import error from "../../../public/404.json";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="bg-paper min-h-screen flex flex-col items-center justify-center">
            {/* Lottie Animation */}
            <div className="w-10/12 md:w-6/12 h-auto">
                <Lottie animationData={error} aria-label="404 error animation" />
            </div>

            {/* Back to Home Button */}
            <div className="mt-8">
                <Link to="/" aria-label="Back to Home">
                    <button className="py-2 my-4 px-4 border border-black border-r-2 border-b-2 rounded-md hover:scale-95 transition-transform duration-300 transform font-bold">
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Error;
