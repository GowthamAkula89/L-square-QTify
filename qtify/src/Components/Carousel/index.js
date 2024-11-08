import { useState, useRef, useEffect } from 'react';
import './carousel.css';
import CardComponent from '../CardComponent';

const Carousel = ({ data, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const itemsPerView = 7;
  const totalItems = data.length;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, totalItems - itemsPerView)
    );
  };

  useEffect(() => {
    if (carouselRef.current && data.length > 0) {
      const itemWidth = carouselRef.current.children[0]?.offsetWidth + 41 || 0;
      carouselRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }, [currentIndex, data.length]);
  

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        <div className='carousel' ref={carouselRef}>
          {data.map((item) => (
            <div key={item.id} className='carousel-slide'>
              <CardComponent item={item} title={title} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className={`arrow-prev-${title} arrow-prev arrow`}
        style={{}}
      >
        <img src='prev.png' alt='prev' />
      </button>
      <button
        onClick={nextSlide}
        className={`arrow-next-${title} arrow-next arrow`}
        style={{
          
        }}
      >
        <img src='next.png' alt='next' />
      </button>
    </div>
  );
};

export default Carousel;
