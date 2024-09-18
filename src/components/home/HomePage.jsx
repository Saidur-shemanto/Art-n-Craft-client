import React from 'react';
import Banner from './Banner';
import ImageBanner from './ImageBanner';
import TextSection from './TextSection';
import bgImage from '../../assets/New Project.png'
import PaintingSlider from './PaintingSlider';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
    const paintings = useLoaderData()
    return (
        <div className='overflow-x-hidden'>
            <div style={{ backgroundImage: `url(${bgImage})` }}
                className='bg-no-repeat bg-cover bg-center w-full' >
                <Banner></Banner>
                <ImageBanner></ImageBanner>

            </div>

            <TextSection></TextSection>
            <PaintingSlider paintings={paintings}></PaintingSlider>

        </div>
    );
};

export default HomePage;