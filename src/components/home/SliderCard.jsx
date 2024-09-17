import React, { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


const SliderCard = ({ painting }) => {

    const cardAnimation = {
        initial: {
            scale: 1,
        },
        hover: {
            scale: 1.1,
        },
    };

    const textAnimation = {
        initial: {
            padding: '0px 0px',
        },
        hover: {
            padding: '0px 30px',
        },
    };
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            variants={cardAnimation}
            className='group flex flex-col justify-between cursor-pointer'>

            <img src={painting.image} alt="" className='w-full h-80 object-cover mx-auto' />
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-400 group-hover:dark:bg-gray-700' />

            <motion.div
                variants={textAnimation}

                className='flex items-center justify-between mt-2'>
                <p className="font-bold">{painting.itemName}</p>
                <p className=''><FaArrowRight className=' -rotate-45 text-xl group-hover:text-2xl transition group-hover:rotate-0 group-hover:bg-orange-500 group-hover:rounded-full group-hover:text-white ' /></p>
            </motion.div>
            <motion.p


                className='text-sm text-gray-600 mt-2 overflow-hidden'>{painting.shortDesc}
            </motion.p>
        </motion.div>

    );
};

export default SliderCard;