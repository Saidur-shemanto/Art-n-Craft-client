import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay } from 'swiper/modules';
import SliderCard from './SliderCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Link } from 'react-router-dom';

const PaintingSlider = ({ paintings }) => {
    return (
        <div className='py-10 container mx-auto mb-16'>
            <Swiper
                modules={[Scrollbar, A11y, Autoplay]}

                spaceBetween='100'
                breakpoints={{
                    370: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}


                autoplay={{
                    disableOnInteraction: false,
                    delay: 1000,
                    pauseOnMouseEnter: true,

                }}

            >
                {paintings.map(painting => <SwiperSlide key={painting._id}><Link to={`art-and-crafts/${painting._id}`}><SliderCard painting={painting}></SliderCard></Link></SwiperSlide>)}



            </Swiper>


        </div>
    );
};

export default PaintingSlider;