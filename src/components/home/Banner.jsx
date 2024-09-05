import React from 'react';
import Button from '../reused/Button';

const Banner = () => {
    return (
        <div className='text-center  mx-auto container pt-6'>
            <p className='text-4xl lg:text-9xl font-extrabold mb-4 text-white'>The New Modern Painting showcasing</p>
            <p className='mb-4 text-base lg:text-xl font-medium w-1/2 mx-auto text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui quae sunt hic natus eveniet soluta iusto dignissimos autem reiciendis.</p>
            <div className='w-48 mx-auto'><Button text='Explore Paintings'></Button></div>

        </div>
    );
};

export default Banner;