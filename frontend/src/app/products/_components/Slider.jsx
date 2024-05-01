"use client";
import { SLIDERS_v2 } from "@/constants";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import prev from "../../img/icons/prev.png";
export default function Slider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="hidden xl:block slider mb-[6.5rem]">
      <div className="w-[585px] h-[300px]">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          scrollbar={{ draggable: true, hide: true }}
          className="relative w-[585px] h-[300px]"
        >
          {SLIDERS_v2.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Image
                  alt="slide"
                  className="w-[585px] h-[300px] rounded-sm"
                  src={item.src}
                />
              </SwiperSlide>
            );
          })}
          <div
            className=" border-min border-solid border-[#ced4da] z-10 group-hover:block cursor-pointer absolute top-[45%] left-[10px] opacity-100 transition-all rounded-full"
            ref={navigationPrevRef}
          >
            <Image alt="prev" className="w-[32px] h-[32px]" src={prev} />
          </div>
          <div
            className="z-10 group-hover:block cursor-pointer absolute border-min border-solid border-[#ced4da] top-[45%] right-[10px] rounded-full opacity-100 transition-all"
            ref={navigationNextRef}
          >
            <Image alt="next" className="w-[32px] rotate-180" src={prev} />
          </div>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-auto mt-2"
        >
          {SLIDERS_v2.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Image
                  className="max-w-[108px] h-auto rounded"
                  alt="slide"
                  src={item.src}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
