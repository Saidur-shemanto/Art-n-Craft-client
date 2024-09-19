import React from 'react';
import romeStatue1 from '../../assets/romeStatue1.jpeg'
import romeStatue2 from '../../assets/romeStatue2.jpeg'

const TextImageSection = () => {
    return (
        <div className='flex justify-between items-center container mx-auto relative'>
            <div className='space-y-2 lg:space-y-4 p-4 lg:p-0'>
                <h1 className='text-4xl lg:text-7xl font-bold'>UPCOMING EXHIBITION</h1>
                <p className='w-full lg:w-5/6 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nobis minus? Consequuntur rem labore ullam, fuga minus animi dolores quaerat.</p>

            </div>

            <img src={romeStatue1} className='w-14 lg:w-40 rotate-12 border-4 right-16 lg:right-44 z-10 -bottom-[57px] lg:top-8 [clip-path:polygon(0%_0%,100%_0%,100%_57%,0%_73%)] border-white absolute' alt="" />
            <img src={romeStatue2} className=' w-14 lg:w-48 rotate-12 border-4 right-4 lg:right-0 -bottom-[49px] lg:-top-2  border-white [clip-path:polygon(0%_0%,100%_0%,100%_66%,0%_83%)] absolute ' alt="" />










        </div>
    );
};

export default TextImageSection;