import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion'

const PaintingCard = ({ painting }) => {

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className=' flex flex-col justify-between hover:shadow-2xl'>

            <img src={painting.image} alt="" className='w-full h-80 object-cover mx-auto' />
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />


            <p className='font-bold'>{painting.itemName}</p>


            <p className=' text-sm text-gray-600 mt-2 overflow-hidden'>{painting.shortDesc}</p>
        </motion.div>
    );
};

export default PaintingCard;