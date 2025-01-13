import React from 'react';
import Navbar from './Components/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from './Components/Shared/Footer';

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayOut;