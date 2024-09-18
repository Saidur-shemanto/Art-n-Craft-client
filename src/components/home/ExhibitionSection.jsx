import React from 'react';
import landscape from '../../assets/landscape1.jpg'
import { MdOutlineMuseum } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import Button from '../reused/Button';

const ExhibitionSection = () => {
    return (
        <div className='bg-black  flex lg:flex-row flex-col items-center p-10 container mx-auto  gap-4'>
            <div className='border-4 w-full lg:w-3/5 border-white'>
                <img src={landscape} alt="" />

            </div>
            <div className='space-y-6 w-full lg:w-2/5 text-center lg:text-left'>
                <div className='text-orange-500 w-min mx-auto lg:mx-0 flex items-center gap-2'><MdOutlineMuseum /> <p>Exhibition</p></div>
                <p className='text-4xl lg:text-6xl font-bold text-white'>Hieroglyphs unlocking ancient Egypt</p>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem quod accusantium commodi obcaecati magni ipsa sed possimus adipisci blanditiis!</p>
                <div className='text-white flex items-center gap-2'><SlCalender /> <p>20 October 2024 - 28 October 2024</p></div>
                <div className=''><Button text='Book now'></Button></div>

            </div>

        </div>
    );
};

export default ExhibitionSection;