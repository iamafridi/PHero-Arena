import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";
import Footer from "../pages/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="font-cormorant ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;