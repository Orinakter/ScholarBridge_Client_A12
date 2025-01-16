import { Outlet } from "react-router";
import Footer from "../Pages/shared/Footer";
import Navbar from "../Pages/shared/Navbar";


const MainLayout = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;