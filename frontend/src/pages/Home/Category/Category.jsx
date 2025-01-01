import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={1}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper mb-5"
    >
      <SwiperSlide>
        <img src={img1} alt="" />
        <h3 className="uppercase font-light text-2xl text-center -mt-16 text-white -ml-32">
          salads
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
        <h3 className="uppercase font-light text-2xl text-center -mt-16 text-white -ml-32">
          soups
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
        <h3 className="uppercase font-light text-2xl text-center -mt-16 text-white -ml-32">
          pizzas
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" />
        <h3 className="uppercase font-light text-2xl text-center -mt-16 text-white -ml-32">
          deserts
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="" />
        <h3 className="uppercase font-light text-2xl text-center -mt-16 text-white -ml-32">
          salads
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
