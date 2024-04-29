"use client";
import Header from "@/components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SLIDERS } from "@/constants";
import Image from "next/image";
import { useRef } from "react";
import prev from "../app/img/prev.png";
import map from "../app/img/slider/459499-PFNV8C-367.jpg";
export default function Home() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <main>
      <Header />
      <div className="main mt-[26px] ">
        <div className="title h-10 bg-widget rounded-md mb-4">
          <h4 className="text-center leading-10">
            Sell your Laptop for Instant Cash
          </h4>
        </div>
        <div className="main_container flex">
          <div className="sidebar w-[200px] rounded">SideBar</div>
          <div className="content flex-1">
            <div className="flex justify-between gap-5">
              <div className="relative carousel max-w-[765px] max-h-[240px] group">
                <Swiper
                  className="max-w-[765px]"
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
                          className="w-[765px] h-[260px] rounded-xl object-cover"
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
              <div>
                <Image
                  src={map}
                  alt="map"
                  className="w-[260px] h-[260px] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
