"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const brands = Array.from(
  { length: 25 },
  (_, i) => `/aboutus/brand${i + 1}.svg`
);

export default function BrandSection() {
  const firstRow = [...brands, ...brands];
  const secondRow = [...brands, ...brands];

  return (
    <div className="bg-white w-full md:py-10 md:mb-[149px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-semibold text-[20px] md:text-3xl text-[#344054] mb-4 md:block hidden">
          Бренд бүтээгдэхүүн
        </h2>
        <div className="md:hidden block ">
        <div className="w-full font-medium md:text-[20px] text-[14px] bg-[linear-gradient(90deg,#293B8D_10%,#9BBEF5_100%)] bg-clip-text text-transparent leading-[100%] tracking-[0%]">
          Бидний амжилт
        </div>
        <div className="w-full h-0.5 bg-linear-to-r from-[#293B8D] to-[#9BBEF5] rounded-lg mt-2"></div>
        </div>

        <div className="mt-3  text-[#667085]  text-[12px] md:text-[16px]  leading-[22px]  font-fira-sans  font-light  tracking-[2%]  text-justify  md:mb-12 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>

      <div className="block md:hidden">
        <div className="max-w-[360px] mx-auto grid grid-cols-7 gap-x-4 gap-y-6">
          {brands.slice(0, 28).map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={brand}
                alt={`brand-${index + 1}`}
                className="w-[56px] h-[56px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          slidesPerView={12}
        >
          {firstRow.map((brand, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={brand}
                alt={`brand-${index + 1}`}
                className="w-[80px] h-[80px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          className="mt-6"
          slidesPerView={12}
        >
          {secondRow.map((brand, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={brand}
                alt={`brand-${index + 1}`}
                className="w-[80px] h-[80px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
