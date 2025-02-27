import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "../Components/Topbar/Topbar";

const MainLayout = () => {
    return (
        <div className="bg-paper  font-roboto">
            <div className="max-w-7xl mx-auto">
                <div className="sticky top-0 z-50">
                    <Topbar></Topbar>
                </div>
                {/* Sidebar & Content */}
                <div className="grid md:grid-cols-12 gap-1 w-[98%]  md:w-[96%] mx-auto">
                    {/* Sticky Sidebar */}
                    <div className="md:col-span-2 mx-auto md:h-[calc(100vh-130px)] sticky top-12 md:top-16 lg:top-32 overflow-y-auto z-30">
                        <Sidebar />
                    </div>

                    {/* Scrollable Content */}
                    <div className="md:col-span-10 min-h-[calc(100vh-288px)] overflow-y-auto">
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
