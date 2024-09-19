import React from 'react';
import Banner from './Banner';
import ImageBanner from './ImageBanner';
import TextSection from './TextSection';
import bgImage from '../../assets/New Project.png'
import PaintingSlider from './PaintingSlider';
import { useLoaderData } from 'react-router-dom';
import ExhibitionSection from './ExhibitionSection';
import TextImageSection from './TextImageSection';
import GreekGodSection from './GreekGodSection';

const HomePage = () => {
    const paintings = useLoaderData()
    return (
        <div className=''>
            <div style={{ backgroundImage: `url(${bgImage})` }}
                className='bg-no-repeat bg-cover bg-center w-full' >
                <Banner></Banner>
                <ImageBanner></ImageBanner>

            </div>

            <TextSection></TextSection>
            <PaintingSlider paintings={paintings}></PaintingSlider>
            <GreekGodSection></GreekGodSection>
            <TextImageSection></TextImageSection>
            <hr className="h-px my-8 bg-gray-200 border-0 container mx-auto dark:bg-gray-700" />
            <ExhibitionSection></ExhibitionSection>


        </div>
    );
};

export default HomePage;