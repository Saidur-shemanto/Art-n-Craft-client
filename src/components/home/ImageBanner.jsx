import React from 'react';
import rome1 from '../../assets/Rome1.jpg'
import rome2 from '../../assets/Rome2.jpeg'
import rome3 from '../../assets/Rome3.png'
import rome4 from '../../assets/Rome4.png'

const ImageBanner = () => {
    return (
        <div className='flex lg:flex-row flex-col items-center mx-auto container pt-7'>
            <img className='w-full lg:w-1/4 aspect-square lg:-rotate-12 border-8 border-white' src={rome1} alt="" />
            <img className='w-full lg:w-1/4 aspect-square lg:rotate-12 border-8 border-white' src={rome2} alt="" />
            <img className='w-full lg:w-1/4 aspect-square lg:-rotate-12 border-8 border-white' src={rome3} alt="" />
            <img className='w-full lg:w-1/4 aspect-square lg:rotate-12 border-8 border-white' src={rome4} alt="" />

        </div>
    );
};

export default ImageBanner;