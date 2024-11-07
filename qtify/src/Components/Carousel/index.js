import { useState, useRef, useEffect } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousel.css';
import CardComponent from '../CardComponet';

const Carousel = ({ data, title }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const updateNavigationButtons = () => {
      if (swiperRef.current) {
        const swiper = swiperRef.current;
        swiper.navigation.update();
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }
    };

    setTimeout(() => {
      updateNavigationButtons();
    }, 100);
  }, [data.length]);

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
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onInit={(swiper) => {
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        virtual
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <CardComponent item={item} title={title} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        ref={prevButtonRef}
        className={`arrow-prev-${title} arrow-prev arrow`}
        style={{ visibility: isBeginning ? 'hidden' : 'visible' }}
      >
        <img src='prev.png' alt='prev' />
      </div>
      <div
        ref={nextButtonRef}
        className={`arrow-next-${title} arrow-next arrow`}
        style={{ visibility: isEnd ? 'hidden' : 'visible' }}
      >
        <img src='next.png' alt='next' />
      </div>
    </div>
  );
};

export default Carousel;
