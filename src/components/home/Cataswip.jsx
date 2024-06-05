import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import bag1 from '../../assets/bag1.png'
import bag2 from '../../assets/bag2.png'
import bag3 from '../../assets/bag3.png'
import bag4 from '../../assets/bag4.png'
import bag5 from '../../assets/bag5.png'
import bag6 from '../../assets/bag6.png'

const Cataswip = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={bag1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bag2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bag3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bag4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bag5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bag6} alt="" /></SwiperSlide>
        {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    );
};

export default Cataswip;