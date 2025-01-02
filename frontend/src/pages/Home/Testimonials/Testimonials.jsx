import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mb-10">
      <SectionTitle
        heading="testimonials"
        subHeading="What our clients says"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center mt-10 mx-20 space-y-5 ">
              {/* rating */}
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <div className="text-5xl">
                <FaQuoteLeft />
              </div>
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
