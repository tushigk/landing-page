"use client";
import Arrow from "@/components/arrow/page";
import Footer from "@/components/footer/page";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechnologoyItemProps {
  title: string;
  description: string;
  onSelect: () => void;
  isOpen: boolean;
}

const TechnologyItem = ({
  title,
  description,
  onSelect,
  isOpen,
}: TechnologoyItemProps) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 cursor-pointer">
      <div className="flex items-center gap-[5px]" onClick={onSelect}>
        <motion.div
          className="text-[18px] sm:text-[20px] lg:text-[24px] font-fira-sans font-semibold"
          animate={{ color: isOpen ? "#335BDD" : "#05071A" }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.div>
        <motion.img
          src="sales/arrow.svg"
          alt="arrow"
          className="w-4 h-4 sm:w-5 sm:h-5"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="text-[14px] sm:text-[16px] text-[#667085] font-normal font-fira-sans">
              {description}
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 mt-4">
              <button className="w-full sm:w-[190px] h-10 rounded-[300px] bg-[linear-gradient(to_right,#293B8D_1%,#9BBEF5_100%)] text-white flex items-center justify-center gap-2 px-4 cursor-pointer">
                <div className="text-[14px] sm:text-[16px] font-semibold">
                  Дэлгэрэнгүй
                </div>
                <img
                  src="/detail/arrow.svg"
                  alt="arrow"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                />
              </button>

              <div className="w-full sm:w-auto p-px rounded-[300px] bg-[linear-gradient(to_right,#293B8D_1%,#9BBEF5_100%)]">
                <button className="w-full sm:w-[190px] h-10 rounded-[300px] bg-white flex items-center justify-center gap-2 px-4 cursor-pointer">
                  <div className="text-[14px] sm:text-[16px] text-[#344054]">
                    Сайтаар зочлох
                  </div>
                  <img
                    src="/detail/arrow2.svg"
                    alt="arrow"
                    className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Sales() {
  const TechnologyItems = [
    {
      title: "Wellmart Supermarket",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imageSrc: "/sales/wellmart.jpg",
    },
    {
      title: "FreshMart",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imageSrc: "/sales/cover.jpg",
    },
    {
      title: "ShopEase",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imageSrc: "/sales/wellmart.jpg",
    },
    {
      title: "MarketPro",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imageSrc: "/sales/cover.jpg",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const handleSelect = (idx: number) => {
    setSelectedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <div className="w-full h-screen relative">
        <Image
          src="/sales/cover.jpg"
          alt="cover"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/50 transition-all duration-500" />
        <div className="absolute inset-0 flex items-end justify-center text-center text-white px-4 sm:px-6 pb-16 max-w-[1200px] mx-auto z-20">
          <div className="mb-[80px] lg:mb-[120px]">
            <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold drop-shadow-lg">
              ҮЙЛ АЖИЛЛАГАА
            </h1>
            <p className="mt-4 lg:mt-6 text-[16px] sm:text-[18px] lg:text-[20px] font-medium font-fira-sans">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <Arrow />
      </div>

      <div className="w-full md:px-0 px-4">
      {/* Block 1 */}
      <div className="max-w-[1160px] h-auto mx-auto border border-[#D0D5DD] shadow-lg rounded-[20px] p-6 sm:p-8 lg:p-10 mt-[60px] lg:mt-[120px] bg-white mb-[60px] lg:mb-[100px] flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-[660px]">
          <div className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#05071A]">
            Борлуулалт үйлчилгээ
          </div>

          {TechnologyItems.map((item, idx) => (
            <TechnologyItem
              key={idx}
              title={item.title}
              description={item.description}
              onSelect={() => handleSelect(idx)}
              isOpen={selectedIndex === idx}
            />
          ))}
        </div>

        <div className="w-full lg:w-[380px] h-[260px] sm:h-[320px] lg:h-[473px] relative shrink-0 rounded-[20px] overflow-hidden">
          {selectedIndex !== null && (
            <>
              <img
                src={TechnologyItems[selectedIndex].imageSrc}
                alt={TechnologyItems[selectedIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </>
          )}
        </div>
      </div>

      {/* Block 2 */}
      <div className="max-w-[1160px] h-auto mx-auto border border-[#D0D5DD] shadow-lg rounded-[20px] p-6 sm:p-8 lg:p-10 mt-[60px] lg:mt-[120px] bg-white mb-[80px] lg:mb-[100px] flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div className="w-full lg:w-[380px] h-[260px] sm:h-[320px] lg:h-[473px] relative shrink-0 rounded-[20px] overflow-hidden">
          {selectedIndex !== null && (
            <>
              <img
                src={TechnologyItems[selectedIndex].imageSrc}
                alt={TechnologyItems[selectedIndex].title}
                className="w-full h-full object-cover rounded-[20px]"
              />
              <div className="absolute inset-0 bg-black/50" />
            </>
          )}
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-[660px]">
          <div className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#05071A]">
            Борлуулалт үйлчилгээ
          </div>

          {TechnologyItems.map((item, idx) => (
            <TechnologyItem
              key={idx}
              title={item.title}
              description={item.description}
              onSelect={() => handleSelect(idx)}
              isOpen={selectedIndex === idx}
            />
          ))}
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
}
