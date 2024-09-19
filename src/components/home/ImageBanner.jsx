import React, { useContext, useEffect, useRef, useState } from 'react';
import rome1 from '../../assets/Rome1.jpg'
import rome2 from '../../assets/Rome2.jpeg'
import rome3 from '../../assets/Rome3.png'
import rome4 from '../../assets/Rome4.png'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { AuthContext } from '../../authentication/AuthProvider';

const ImageBanner = () => {
    const { deviceWidth } = useContext(AuthContext)

    const imageMotion1 = {
        hidden: {
            rotate: 0,
            opacity: 0,
            x: '30px',

        },
        display: {
            rotate: deviceWidth.width < 1000 ? 0 : [0, 0, 0, -12],
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: 50,
                dumping: 15
            }

        }


    }
    const imageMotion2 = {
        hidden: {
            rotate: 0,
            x: '-30px',

        },
        display: {
            rotate: deviceWidth.width < 1000 ? 0 : [0, 0, 0, 12],
            x: 0,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: 50,
                dumping: 15
            }

        }


    }
    const [isInView1, setView1] = useState(false)
    const [isInView2, setView2] = useState(false)
    const [isInView3, setView3] = useState(false)
    const [isInView4, setView4] = useState(false)






    return (

        <motion.div className='flex lg:flex-row flex-col items-center mx-auto container px-4 pt-7'>



            <motion.div
                onViewportEnter={() => setView1(true)}
                onViewportLeave={() => setView1(false)}
                className='w-full lg:w-1/4 overflow-hidden lg:overflow-visible'
            >
                <motion.img
                    variants={imageMotion1}
                    initial='hidden'
                    animate={isInView1 ? 'display' : 'hidden'}
                    className='w-full aspect-square  border-8 border-white'
                    src={rome1}
                    alt="" />
            </motion.div>

            <motion.div
                onViewportEnter={() => setView2(true)}
                onViewportLeave={() => setView2(false)}
                className='w-full lg:w-1/4 overflow-hidden lg:overflow-visible'
            >
                <motion.img

                    variants={imageMotion2}
                    initial='hidden'
                    animate={isInView2 ? 'display' : 'hidden'}
                    className='w-full aspect-square  border-8 border-white'
                    src={rome2}
                    alt="" />

            </motion.div>

            <motion.div
                onViewportEnter={() => setView3(true)}
                onViewportLeave={() => setView3(false)}
                className='w-full lg:w-1/4 overflow-hidden lg:overflow-visible'
            >
                <motion.img
                    variants={imageMotion1}
                    initial='hidden'
                    animate={isInView3 ? 'display' : 'hidden'}
                    className='w-full aspect-square  border-8 border-white'
                    src={rome3}
                    alt=""
                />

            </motion.div>
            <motion.div
                onViewportEnter={() => setView4(true)}
                onViewportLeave={() => setView4(false)}
                className='w-full lg:w-1/4 overflow-hidden lg:overflow-visible'
            >
                <motion.img

                    variants={imageMotion2}
                    initial='hidden'
                    animate={isInView4 ? 'display' : 'hidden'}
                    className='w-full aspect-square  border-8 border-white'
                    src={rome4}
                    alt="" />

            </motion.div>

        </motion.div>
    );
};

export default ImageBanner;