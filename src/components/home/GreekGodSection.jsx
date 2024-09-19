import React, { useState } from 'react';
import { motion } from 'framer-motion'


const GreekGodSection = () => {
    const textAnimation = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.4

            }
        }
    }
    const [view, setView] = useState(false)
    return (
        <div className="bg-[url('../../../src/assets/greekGod.jpg')] bg-no-repeat  bg-center bg-cover bg-fixed h-[100vh] w-full flex flex-col lg:flex-row text-white  justify-around lg:justify-between mb-16 items-center px-4 lg:px-16 ">

            <motion.p
                onViewportEnter={() => setView(true)}
                onViewportLeave={() => setView(false)}

                variants={textAnimation}
                initial='initial'
                animate={view ? 'animate' : 'initial'}
                className='text-4xl lg:text-6xl font-bold max-w-[20ch] lg:max-w-[10ch] leading-relaxed lg:text-left text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, deserunt.</motion.p>
            <motion.p
                onViewportEnter={() => setView(true)}
                onViewportLeave={() => setView(false)}

                variants={textAnimation}
                initial='initial'
                animate={view ? 'animate' : 'initial'}
                className='text-4xl lg:text-6xl font-bold max-w-[20ch] lg:max-w-[10ch] leading-relaxed lg:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nostrum?</motion.p>



        </div>
    );
};

export default GreekGodSection;