import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper";
import FeedbackCard from "./FeedbackCard";

SwiperCore.use([Autoplay]);

export default function FeedbackSlider() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <div className="lg:w-[1290px] m-auto flex justify-center items-center">
      <Swiper
        className="swiper-container"
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        // spaceBetween={10}
        centeredSlides={screenSize.dynamicWidth < 768 ? true : false}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: true,
        // }}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Autoplay, Keyboard]}
      >
        {[1, 1, 2, 2, 2, 1].map((item: any, index: any) => {
          return (
            <SwiperSlide key={"slider" + index}>
              <FeedbackCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
