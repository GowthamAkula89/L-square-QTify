import { useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./carousel.css";
import CardComponent from '../CardComponet';

const Carousel = ({ data, title }) => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateNavigationButtons = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className='carousel-container'>
            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                slidesPerView={7}
                spaceBetween={40}
                navigation={{
                    nextEl: `.arrow-next-${title}`,
                    prevEl: `.arrow-prev-${title}`,
                }}
                virtual
                onSlideChange={updateNavigationButtons}
                onInit={(swiper) => updateNavigationButtons(swiper)}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardComponent item={item} title={title} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {!isBeginning && (
                <div className={`arrow-prev-${title} arrow-prev arrow`}>
                    <img src='prev.png' alt='prev' />
                </div>
            )}
            {!isEnd && (
                <div className={`arrow-next-${title} arrow-next arrow`}>
                    <img src='next.png' alt='next' />
                </div>
            )}
        </div>
    );
};

export default Carousel;
