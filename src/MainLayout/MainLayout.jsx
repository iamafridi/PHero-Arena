import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";


const MainLayout = () => {
    return (
        <div className="font-cormorant m-4">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;