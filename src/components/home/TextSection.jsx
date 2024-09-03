import React from 'react';
import Button from '../reused/Button';

const TextSection = () => {
    return (
        <div className='flex justify-center items-center mt-20'>
            <div className='text-7xl font-extrabold'>Explore Together About Arts</div>
            <div className='space-y-4'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio rem sapiente corporis mollitia? Quae recusandae quis quisquam laudantium tempora.</p>
                <div className='w-48'><Button text='Explore Paintings'></Button></div>
            </div>

        </div>
    );
};

export default TextSection;