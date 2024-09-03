import React from 'react';
import Banner from './Banner';
import ImageBanner from './ImageBanner';
import TextSection from './TextSection';
import bgImage from '../../assets/New Project.png'

const HomePage = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bgImage})` }}
                className='bg-no-repeat bg-cover bg-center w-full' >
                <Banner></Banner>
                <ImageBanner></ImageBanner>

            </div>

            <TextSection></TextSection>

        </div>
    );
};

export default HomePage;