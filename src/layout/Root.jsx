import React from 'react';
import Navbar from '../components/shared/header/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>



        </>
    );
};

export default Root;