import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SliderCard = ({ painting }) => {
    return (
        <div className='group flex flex-col justify-between cursor-pointer'>

            <img src={painting.image} alt="" className='w-full h-80 object-cover mx-auto' />
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-400 group-hover:dark:bg-gray-700' />

            <div className='flex items-center justify-between mt-2'>
                <p className='font-bold'>{painting.itemName}</p>
                <p className=''><FaArrowRight className=' -rotate-45 text-xl group-hover:text-2xl transition group-hover:rotate-0 group-hover:bg-orange-500 group-hover:rounded-full group-hover:text-white ' /></p>
            </div>
            <p className='text-sm text-gray-600 mt-2 overflow-hidden'>{painting.shortDesc}</p>
        </div>

    );
};

export default SliderCard;