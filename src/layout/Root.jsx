import React from 'react';
import Navbar from '../components/shared/header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/footer/Footer';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-[75vh]'>
                <Outlet></Outlet>

            </div>

            <Footer></Footer>



        </>
    );
};

export default Root;