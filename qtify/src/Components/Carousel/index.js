import { useState, useRef, useEffect } from 'react';
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

    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current?.navigation) {
            swiperRef.current.navigation.update();
        }
    }, [isBeginning, isEnd]);

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
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                    swiper.params.navigation.prevEl = prevButtonRef.current;
                    swiper.params.navigation.nextEl = nextButtonRef.current;
                }}
                onSlideChange={updateNavigationButtons}
                onInit={(swiper) => {
                    swiper.navigation.init();
                    setTimeout(() => {
                        if (swiper.navigation) {
                            swiper.navigation.update();
                            updateNavigationButtons(swiper);
                        }
                    }, 50); 
                }}
                virtual
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardComponent item={item} title={title} />
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {!isBeginning && (
                <div 
                    ref={prevButtonRef} 
                    className={`arrow-prev-${title} arrow-prev arrow`}
                >
                    <img src='prev.png' alt='prev' />
                </div>
            )}
            {!isEnd && (
                <div 
                    ref={nextButtonRef} 
                    className={`arrow-next-${title} arrow-next arrow`}
                >
                    <img src='next.png' alt='next' />
                </div>
            )}
        </div>
    );
};

export default Carousel;
