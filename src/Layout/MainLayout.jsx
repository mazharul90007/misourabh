import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "../Components/Topbar/Topbar";

const MainLayout = () => {
    return (
        <div className="bg-background  font-roboto">
            <div className="">
                <div className="sticky top-0 z-50">
                    <Topbar></Topbar>  
                </div>
                {/* Sidebar & Content */}
                <div className="flex flex-col lg:flex-row lg:gap-4 w-[98%]  md:w-[96%] mx-auto">
                    {/* Sticky Sidebar */}
                    <div className="w-[100%] lg:w-[10%] mx-auto lg:h-[calc(100vh-130px)] sticky top-12 md:top-12 lg:top-32 overflow-y-auto z-30">
                        <Sidebar />
                    </div>

                    {/* Scrollable Content */}
                    <div className="w-[100%] lg:w-[90%] min-h-[calc(100vh-288px)] overflow-y-auto">
                        <Outlet />
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
