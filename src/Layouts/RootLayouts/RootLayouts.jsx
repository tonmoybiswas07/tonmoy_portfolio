import React from 'react';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Pages/Shared/Footer/Footer';

const RootLayouts = () => {
    return (
        <div className='bg-gradient-to-b from-[#020617] to-[#020617]/90 text-white min-w-screen min-h-screen'>
            <div className='max-w-7xl mx-auto '>
                <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default RootLayouts;