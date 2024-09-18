import React, { useContext, useEffect, useState } from 'react';
import Button from '../reused/Button';
import { motion } from "framer-motion"
import { AuthContext } from '../../authentication/AuthProvider';
import { Navigate } from 'react-router-dom';


const Banner = () => {
    const { deviceWidth } = useContext(AuthContext)
    const textMotion = {
        initial: {
            opacity: 0,



        },
        animate: {
            opacity: 1,
            transition: {
                duration: 2
            }

        }


    }

    console.log('device size' + deviceWidth.width)
    return (
        <div className='text-center  mx-auto container pt-6 lg:px-0 px-2'>
            <motion.p
                className=' font-extrabold text-3xl lg:text-9xl mb-4 text-white'
                initial='initial'
                animate='animate'
                variants={textMotion}


            >The New Modern</motion.p>
            <motion.p
                className=' font-extrabold text-3xl lg:text-9xl mb-4 text-white'
                initial='initial'
                animate='animate'
                variants={textMotion}

            >Painting showcasing</motion.p>
            <p className='mb-4 text-base lg:text-xl font-medium w-1/2 mx-auto text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui quae sunt hic natus eveniet soluta iusto dignissimos autem reiciendis.</p>
            <div onClick={() => window.location.href = '/art-and-crafts'} className='w-48 mx-auto '><Button text='Explore Paintings' ></Button></div>

        </div >
    );
};

export default Banner;