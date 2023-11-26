import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./carousel.css"
import CardComponent from '../CardComponet';
const Carousel=({data,title})=>{
    return(
        <div className='carousel-container'>
                <Swiper
                    modules={[Virtual, Navigation, Pagination]}
                    // onSwiper={setSwiperRef}
                    slidesPerView={7}
                    // centeredSlides={true}
                    spaceBetween={40}
                    navigation= {{
                        nextEl: `.arrow-next-${title}`,
                        prevEl: `.arrow-prev-${title}`,
                    }}
                    virtual
                >
                    {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardComponent item={item}/>
                    </SwiperSlide>
                    ))}
                </Swiper>
                <div className={`arrow-prev-${title} arrow-prev arrow`}><img src='prev.png' alt='prev'/></div>
                <div className={`arrow-next-${title} arrow-next arrow`}><img src='next.png' alt='next'/></div>
        </div>
    )
}
export default Carousel;