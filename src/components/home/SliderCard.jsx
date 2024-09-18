import React, { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { delay, motion } from 'framer-motion'


const SliderCard = ({ painting }) => {

    const cardAnimation = {
        initial: {
            scale: 1,
        },
        hover: {
            scale: 1.1,
            Transition: {
                duration: 5
            }

        },
    };

    // const textAnimation = {
    //     initial: {
    //         padding: '0px 0px',
    //     },
    //     hover: {
    //         padding: '0px 30px',
    //     },
    // };
    return (
        <div

            className='group flex flex-col justify-between cursor-pointer'>
            <div className='overflow-hidden'>



                <motion.img
                    variants={cardAnimation}
                    initial="initial"
                    whileHover="hover"
                    src={painting.image} alt="" className='w-full h-80 object-cover mx-auto' />
            </div>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-400 group-hover:dark:bg-gray-700' />


            <div
                className='flex items-center justify-between mt-2'>
                <p className="font-bold">{painting.itemName}</p>
                <p className=''><FaArrowRight className=' -rotate-45 text-xl group-hover:text-2xl transition group-hover:rotate-0 group-hover:bg-orange-500 group-hover:rounded-full group-hover:text-white ' /></p>
            </div>
            <p


                className='text-sm text-gray-600 mt-2 overflow-hidden'>{painting.shortDesc}
            </p>
        </div>

    );
};

export default SliderCard;