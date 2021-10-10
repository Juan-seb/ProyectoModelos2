import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './styles/reserveStyles.css'
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const ReserveDate = () => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                /* pagination={{
                    clickable: false
                }} */
                /* navigation={true} */
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide>
                    <div style={{width: '100%', height:"5vh"}}>
                        Hola a todo el mundo mundial
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

        </div >
    )
}

export default ReserveDate
