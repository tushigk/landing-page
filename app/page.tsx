"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const slides = [
    {
      title: "БОРЛУУЛАЛТ ҮЙЛЧИЛГЭЭ",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      video: "/home/product.mp4",
    },
    {
      title: "ИМПОРТ, ЭКСПОРТ",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      video: "/home/video.mp4",
    },
    {
      title: "АГУУЛАХ, ТЭЭВЭРЛЭЛТ",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      video: "/home/product.mp4",
    },
    {
      title: "ЗОЧИД БУУДАЛ, РЕСТОРАН",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      video: "/home/video.mp4",
    },
    {
      title: "БАРИЛГА, ЗАМ ТЭЭВЭР",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      video: "/home/product.mp4",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const getCircularIndex = (index: number) =>
    (index + slides.length) % slides.length;

  const getPositionStyle = (index: number) => {
    const left2 = getCircularIndex(activeIndex - 2);
    const left1 = getCircularIndex(activeIndex - 1);
    const right1 = getCircularIndex(activeIndex + 1);
    const right2 = getCircularIndex(activeIndex + 2);

    // Mobile: only show active. Others are hidden (we use md: for desktop layout).
    if (index === activeIndex)
      return `
        z-40 scale-105 opacity-100 translate-x-0 rotate-y-0
        md:scale-110
      `;
    if (index === left1)
      return `
        hidden md:block
        md:z-30 md:scale-95 md:opacity-90
        md:-translate-x-[750px] md:translate-y-[10px] md:-rotate-y-[15deg]
      `;
    if (index === right1)
      return `
        hidden md:block
        md:z-30 md:scale-95 md:opacity-90
        md:translate-x-[750px] md:translate-y-[10px] md:rotate-y-[15deg]
      `;
    if (index === left2)
      return `
        hidden md:block
        md:z-20 md:scale-90 md:opacity-60
        md:-translate-x-[1200px] md:translate-y-[20px] md:-rotate-y-[25deg]
      `;
    if (index === right2)
      return `
        hidden md:block
        md:z-20 md:scale-90 md:opacity-60
        md:translate-x-[1200px] md:translate-y-[20px] md:rotate-y-[25deg]
      `;
    return "hidden md:block";
  };

  const progress = ((activeIndex + 1) / slides.length) * 100;

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <motion.video
          key={slides[activeIndex].video}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <source src={slides[activeIndex].video} type="video/mp4" />
        </motion.video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center z-20 w-full px-4 md:mt-0 mt-60">
        {/* Title carousel */}
        <div className="relative flex justify-center items-center w-full max-w-full perspective-distant mt-32 md:mt-[650px]">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out transform-gpu ${getPositionStyle(
                index
              )}`}
              animate={{
                opacity: activeIndex === index ? 1 : 0.6,
                scale: activeIndex === index ? 1.05 : 0.9,
              }}
            >
              <h1
                className={`font-bold text-center whitespace-nowrap transition-all duration-500 ${
                  index === activeIndex
                    ? "text-white text-[18px] sm:text-4xl md:text-6xl drop-shadow-lg blur-0"
                    : "text-gray-400 text-2xl md:text-[40px] blur-sm md:blur-[2px]"
                }`}
              >
                {slide.title}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Text + button */}
        <div className="flex flex-col justify-center items-center text-white px-4 max-w-xl md:max-w-3xl mt-2 md:mt-0">
          <div className="group md:flex flex-col items-start hidden">
            <button
              className="relative text-base md:text-[20px] font-semibold mt-10 md:mt-20 w-[150px] h-6 text-[#FFFFFF] font-fire-sans cursor-pointer"
              onClick={() => router.push(`/detail/${activeIndex}`)}
            >
              ДЭЛГЭРЭНГҮЙ
            </button>
            <div className="w-[25px] h-1 rounded-lg bg-white mt-2 transition-all duration-500 ease-out group-hover:w-full origin-left"></div>
          </div>

          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[12px] sm:text-base md:text-lg opacity-90 text-center leading-relaxed mt-6 md:mt-10 font-fira-sans md:font-medium font-light"
          >
            {slides[activeIndex].text}
          </motion.p>
          <div className="group flex flex-col items-start md:hidden">
            <button
              className="relative text-base md:text-[12px] font-medium mt-3 w-[150px] h-6 text-[#FFFFFF] font-fire-sans cursor-pointer"
              onClick={() => router.push(`/detail/${activeIndex}`)}
            >
              ДЭЛГЭРЭНГҮЙ
            </button>
            <div className="w-[25px] h-1 rounded-lg bg-white mt-2 transition-all duration-500 ease-out group-hover:w-full origin-left ml-7"></div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-24 sm:-bottom-20 left-1/2 -translate-x-1/2 md:flex hidden items-center justify-center gap-3 sm:gap-4 text-sm sm:text-lg font-semibold text-white z-40">
          <span className="text-[16px] sm:text-[20px]">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <div className="w-[150px] sm:w-[200px] h-1 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <span className="text-[16px] sm:text-[20px]">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
      <div className="absolute bottom-12 sm:bottom-0 left-32 -translate-x-1/2 flex md:hidden items-center justify-center gap-3 sm:gap-4 text-sm sm:text-lg font-semibold text-white z-40">
        <span className="text-[16px] sm:text-[20px]">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <div className="w-[156px] sm:w-[200px] h-1 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6 }}
          />
        </div>
        <span className="text-[16px] sm:text-[20px]">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
      {/* Arrows */}
      <div className="flex gap-4 sm:gap-6 absolute bottom-10 sm:bottom-12 md:bottom-20 -right-6 -translate-x-1/2 md:left-auto md:right-20 md:translate-x-0 z-40">
        {[
          { onClick: handlePrev, Icon: ArrowLeftIcon },
          { onClick: handleNext, Icon: ArrowRightIcon },
        ].map(({ onClick, Icon }, idx) => (
          <button
            key={idx}
            onClick={onClick}
            className="group border border-white rounded-full 
             w-9 h-9                      
             sm:w-auto sm:h-auto         
             p-1.5 sm:p-4                 
             cursor-pointer backdrop-blur-sm 
             bg-transparent hover:bg-white 
             transition-colors duration-300 ease-in-out"
          >
            <Icon
              size={20}
              className="text-white group-hover:text-black transition-colors duration-300 ease-in-out"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
