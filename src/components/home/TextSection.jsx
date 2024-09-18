import React from 'react';
import Button from '../reused/Button';

const TextSection = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center mt-40 gap-2 p-4 lg:p-0 container mx-auto'>
            <div className='text-5xl lg:text-7xl font-extrabold'>Explore Together About Arts</div>
            <div className='space-y-4'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio rem sapiente corporis mollitia? Quae recusandae quis quisquam laudantium tempora.</p>
                <div className='w-48'><Button text='Explore Paintings'></Button></div>
            </div>

        </div>
    );
};

export default TextSection;