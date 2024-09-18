import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion'

const PaintingCard = ({ painting }) => {

    return (
        <div

            className=' flex flex-col justify-between '>

            <div className='overflow-hidden'>


                <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={painting.image} alt="" className='w-full h-80 object-cover mx-auto' />
            </div>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />


            <p className='font-bold'>{painting.itemName}</p>


            <p className=' text-sm text-gray-600 mt-2 overflow-hidden'>{painting.shortDesc}</p>
        </div>
    );
};

export default PaintingCard;