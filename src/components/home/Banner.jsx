import React from 'react';
import Button from '../reused/Button';

const Banner = () => {
    return (
        <div className='text-center'>
            <p className='text-9xl font-extrabold mb-4'>The New Modern Painting showcasing</p>
            <p className='mb-4 text-xl font-medium w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui quae sunt hic natus eveniet soluta iusto dignissimos autem reiciendis.</p>
            <div className='w-48 mx-auto'><Button text='Explore Paintings'></Button></div>

        </div>
    );
};

export default Banner;