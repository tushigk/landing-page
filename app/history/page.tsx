"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const history = [
  {
    year: "1994",
    items: [
      {
        title: "Lorem Ipsum is simply",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
    image: "/history/cover.jpg",
  },
  {
    year: "1995",
    items: [
      { title: "Title 1 of 1995", description: "Description 1 of 1995" },
      { title: "Title 2 of 1995", description: "Description 2 of 1995" },
    ],
    image: "/history/cover2.jpg",
  },
  {
    year: "1996",
    items: [
      {
        title: "Lorem Ipsum is simply",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
    image: "/history/cover.jpg",
  },
  {
    year: "1997",
    items: [
      {
        title: "Lorem Ipsum is simply",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
    image: "/history/cover2.jpg",
  },
  {
    year: "1998",
    items: [
      {
        title: "Lorem Ipsum is simply",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
    image: "/history/cover.jpg",
  },
  {
    year: "1999",
    items: [
      {
        title: "Lorem Ipsum is simply",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
    image: "/history/cover2.jpg",
  },
  {
    year: "2000",
    items: [
      {
        title: "Lorem Ipsum is simply",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
    image: "/history/cover.jpg",
  },
  {
    year: "2001",
    items: [
      {
        title: "Lorem Ipsum is simply",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
    image: "/history/cover2.jpg",
  },
  {
    year: "2002",
    items: [
      {
        title: "Lorem Ipsum is simply",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Lorem Ipsum is simply 3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
    image: "/history/cover.jpg",
  },
];

export default function History() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const activeYear = history[activeIndex];
  const activeItem = activeYear.items[activeItemIndex];

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const itemHeight = 108;
    scrollRef.current.scrollTo({ top: index * itemHeight, behavior: "smooth" });
    setActiveIndex(index);
    setActiveItemIndex(0);
    setProgress(0);
  };

  const intervalRef = useRef<number | null>(null);
  const progressRef = useRef<number | null>(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);

    intervalRef.current = window.setInterval(() => {
      setActiveItemIndex((prev) =>
        prev + 1 < activeYear.items.length ? prev + 1 : 0
      );
      setProgress(0);
    }, 10000);

    progressRef.current = window.setInterval(() => {
      setProgress((prev) => Math.min(prev + 100 / (10000 / 100), 100));
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [activeYear]);

  return (
    <div className="relative w-full h-screen">
      <AnimatePresence>
        <motion.img
          key={activeYear.year}
          src={activeYear.image}
          alt={activeYear.year}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50 transition-all duration-500 z-10"></div>

      {/* DESKTOP: Years / navigation with list */}
      <div
        className="
          absolute z-20
          top-[120px] left-60
          flex flex-col items-center gap-3
          hidden lg:flex
        "
      >
        <button
          onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
          className="p-2"
        >
          <ChevronUp className="w-10 h-10 cursor-pointer text-white" />
        </button>

        <div
          ref={scrollRef}
          className="
            relative flex flex-col items-center
            max-h-[800px]
            overflow-hidden gap-12
          "
        >
          {history.map((item, i) => (
            <div key={item.year} className="relative">
              <div
                onClick={() => scrollToIndex(i)}
                className={`
                  flex items-center justify-center
                  w-[60px] h-[60px] text-[24px]
                  font-semibold transition-all duration-300 cursor-pointer
                  ${
                    i === activeIndex
                      ? "bg-linear-to-r from-[#001A4D] to-[#5C87C5] bg-clip-text text-transparent scale-110"
                      : "text-white"
                  }
                `}
              >
                {item.year}
              </div>

              {i !== history.length - 1 && i < activeIndex + 7 && (
                <div className="absolute -bottom-12 left-1/2 w-0.5 h-12 bg-white/30 -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() =>
            scrollToIndex(Math.min(activeIndex + 1, history.length - 1))
          }
          className="p-2"
        >
          <ChevronDown className="w-10 h-10 cursor-pointer text-white" />
        </button>
      </div>

      {/* MOBILE: arrows + content card stacked together */}
      <div
        className="
          relative z-20
          h-full
          flex flex-col items-center justify-center gap-4
          px-4
          lg:hidden translate-y-20
        "
      >
        <button
          className="p-2"
          onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
        >
          <ChevronUp className="w-8 h-8 cursor-pointer text-white" />
        </button>

        <div
          className="
            w-[90%] max-w-[600px]
            p-6 sm:p-8
            flex flex-col gap-2.5
            rounded-[20px]
            transition-all duration-500
            hover:bg-black/50 bg-black/30
          "
        >
          <div className="flex flex-wrap items-end gap-4">
            <svg
              className="h-14 w-auto sm:h-16"
              viewBox="0 -6 160 80"
              preserveAspectRatio="xMinYMin meet"
            >
              <defs>
                <linearGradient id="grad-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#293B8D" />
                  <stop offset="100%" stopColor="#9BBEF5" />
                </linearGradient>
              </defs>
              <text
                x="0"
                y="60"
                fontSize="50"
                fontWeight="600"
                fill="none"
                stroke="url(#grad-mobile)"
                strokeWidth="4"
              >
                {activeYear.year}
              </text>
            </svg>

            <div className="w-px h-[24px] bottom-2.5 relative bg-linear-to-b from-[#293B8D] to-[#9BBEF5]" />

            <div className="text-white font-medium text-[18px] sm:text-[20px]">
              {activeItem.title}
            </div>
          </div>

          <div className="mt-4 text-[#F9FAFB] text-[14px] sm:text-[16px] font-fira-sans">
            {activeItem.description}
          </div>
        </div>

        <button
          className="p-2"
          onClick={() =>
            scrollToIndex(Math.min(activeIndex + 1, history.length - 1))
          }
        >
          <ChevronDown className="w-8 h-8 cursor-pointer text-white" />
        </button>
      </div>

      {/* DESKTOP content card */}
      <div className="hidden lg:block">
        <div
          className="
            absolute z-20
            left-[399px] top-[370px]
            w-[600px]
            p-10
            flex flex-col gap-2.5
            transition-all duration-500 cursor-pointer hover:bg-black/50
            rounded-[20px]
          "
        >
          <div className="flex flex-wrap items-end gap-4">
            <svg
              className="h-20 w-auto"
              viewBox="0 -6 160 80"
              preserveAspectRatio="xMinYMin meet"
            >
              <defs>
                <linearGradient id="grad-desktop" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#293B8D" />
                  <stop offset="100%" stopColor="#9BBEF5" />
                </linearGradient>
              </defs>
              <text
                x="0"
                y="60"
                fontSize="70"
                fontWeight="600"
                fill="none"
                stroke="url(#grad-desktop)"
                strokeWidth="4"
              >
                {activeYear.year}
              </text>
            </svg>

            <div className="w-px h-[30px] bottom-2.5 relative bg-linear-to-b from-[#293B8D] to-[#9BBEF5]" />

            <div className="text-white font-medium text-[24px]">
              {activeItem.title}
            </div>
          </div>

          <div className="mt-6 text-[#F9FAFB] text-[18px] font-fira-sans">
            {activeItem.description}
          </div>
        </div>
      </div>

      {/* Progress / items indicator */}
      <div
        className="
          fixed z-20
          bottom-6 lg:bottom-20
          left-1/2 transform -translate-x-1/2
          flex flex-col gap-2 px-4
        "
      >
        <div className="text-white text-[14px] sm:text-[16px] lg:text-[18px] font-fira-sans font-semibold text-center">
          {activeItemIndex + 1}/{activeYear.items.length}
        </div>

        <div className="flex gap-2 sm:gap-4 lg:gap-6 overflow-x-auto">
          {activeYear.items.map((_, idx) => (
            <div
              key={idx}
              className="
                w-16 sm:w-24 md:w-32 lg:w-[437px]
                h-1.5 rounded-full bg-white overflow-hidden cursor-pointer
                flex-shrink-0
              "
              onClick={() => {
                setActiveItemIndex(idx);
                setProgress(0);

                if (intervalRef.current) clearInterval(intervalRef.current);
                if (progressRef.current) clearInterval(progressRef.current);

                intervalRef.current = window.setInterval(() => {
                  setActiveItemIndex((prev) =>
                    prev + 1 < activeYear.items.length ? prev + 1 : 0
                  );
                  setProgress(0);
                }, 10000);

                progressRef.current = window.setInterval(() => {
                  setProgress((prev) =>
                    Math.min(prev + 100 / (10000 / 100), 100)
                  );
                }, 100);
              }}
            >
              <div
                className="h-2 bg-linear-to-r from-[#293B8D] to-[#9BBEF5]"
                style={{
                  width:
                    idx === activeItemIndex
                      ? `${progress}%`
                      : idx < activeItemIndex
                      ? "100%"
                      : "0%",
                  transition: "width 0.1s linear",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
