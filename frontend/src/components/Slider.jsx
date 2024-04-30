"use client";
import { SLIDERS } from "@/constants";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import prev from "../app/img/prev.png";
import map from "../app/img/slider/9716714.jpg";
export default function Slider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <div className="hidden xl:flex content  items-start justify-between gap-5">
        <div className="flex-1">
          <div className="relative carousel max-w-[988px] max-h-[240px] group">
            <Swiper
              className="max-w-[988px]"
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
                Keyboard,
              ]}
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
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onSlideChange={(swiper) => {
                if (swiper.scrollbar && swiper.scrollbar.el) {
                  swiper.scrollbar.el.style.display = "none";
                }
              }}
            >
              {SLIDERS.map((slider) => {
                return (
                  <SwiperSlide key={slider.id}>
                    <Image
                      src={slider.src}
                      alt="slider"
                      className="w-[988px] h-[260px] rounded-xl object-cover"
                    />
                  </SwiperSlide>
                );
              })}
              <div
                className="z-10 group-hover:block cursor-pointer absolute top-[45%] left-[10px] opacity-100 transition-all hidden"
                ref={navigationPrevRef}
              >
                <Image className="w-[32px] h-[32px]" src={prev} />
              </div>
              <div
                className="z-10 group-hover:block cursor-pointer absolute top-[45%] right-[10px] opacity-100 transition-all hidden"
                ref={navigationNextRef}
              >
                <Image className="w-[32px] rotate-180" src={prev} />
              </div>
            </Swiper>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Image
            src={map}
            alt="map"
            className="w-[260px] h-[128px] rounded-xl object-cover"
          />
          <Image
            src={map}
            alt="map"
            className="w-[260px] h-[128px] rounded-xl object-cover"
          />
        </div>
      </div>
    </>
  );
}
