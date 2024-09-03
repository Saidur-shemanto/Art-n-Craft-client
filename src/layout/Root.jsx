import React from 'react';
import Navbar from '../components/shared/header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/footer/Footer';

const Root = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className='min-h-[75vh]'>
                    <Outlet></Outlet>

                </div>

            </div>


            <Footer></Footer>



        </div>
    );
};

export default Root;