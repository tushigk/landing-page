"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Footer from "@/components/footer/page";
import Arrow from "@/components/arrow/page";

interface SlideDetail {
  title: string;
  text: string;
  video: string;
}

interface DetailCardProps {
  title: string;
  text: string;
  imgSrc: string;
  reverse?: boolean;
}

const DetailCard = ({ title, text, imgSrc, reverse }: DetailCardProps) => {
  const directionClass = reverse ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div
      className={`flex flex-col ${directionClass} flex-wrap gap-6 md:gap-[24px] justify-center items-center mt-10 md:mt-16`}
    >
      <img
        src={imgSrc}
        alt={title}
        className="w-full md:w-[568px] h-[220px] md:h-[500px] object-cover rounded-[16px]"
      />
      <div className="flex flex-col w-full md:w-[568px] gap-4 md:gap-6 mt-6 md:mt-0">
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="font-semibold text-[16px] md:text-[32px] text-[#344054] md:h-[47px]">
            {title}
          </div>
          <div className="text-[12px]  font-fira-sans font-light md:text-[16px] text-[#667085] md:h-24">
            {text}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-4">
          <button className="w-[50%] md:w-[190px] h-[48px] md:h-[52px] rounded-[300px] bg-[linear-gradient(to_right,#293B8D_1%,#9BBEF5_100%)] flex items-center justify-center gap-2 px-4 cursor-pointer">
            <div className="text-[14px] md:text-[16px] text-white">
              Дэлгэрэнгүй
            </div>
            <img
              src="/detail/arrow.svg"
              alt="arrow"
              className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
            />
          </button>
          <div className="p-px">
            <div className="p-[2px] rounded-[300px] bg-gradient-to-r from-[#293B8D] to-[#9BBEF5] w-[50%] md:w-[190px] h-[48px] md:h-[52px]">
              <button className="w-full h-full rounded-[300px] bg-white flex items-center justify-center gap-2 px-4 cursor-pointer">
                <div className="text-[14px] md:text-[16px] text-[#344054]">
                  Сайтаар зочлох
                </div>
                <img
                  src="/detail/arrow2.svg"
                  alt="arrow"
                  className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DetailPage() {
  const params = useParams();
  const slideId = Number(params.id);

  const slides: SlideDetail[] = [
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

  const slide = slides[slideId] || slides[0];

  const detailsData = [
    {
      title: "Wellmart Supermarket",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "/detail/icon.jpg",
    },
    {
      title: "Bishrelt Beauty",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "/detail/bishrelt.jpg",
    },
    {
      title: "Wellmart Supermarket",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "/detail/icon.jpg",
    },
    {
      title: "Bishrelt Beauty",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "/detail/bishrelt.jpg",
    },
  ];

  return (
    <>
      <div className="w-full overflow-x-hidden">
        <div className="relative w-full h-screen md:h-screen overflow-hidden">
          <motion.video
            key={slide.video}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <source src={slide.video} type="video/mp4" />
          </motion.video>

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-20 text-center text-white px-4 md:px-6 pb-10 md:pb-16 max-w-[1160px] mx-auto top-[80%] md:top-[1000px] -translate-y-1/2">
            <h1 className="text-[18px] md:text-[40px] font-bold drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="mt-4 md:mt-6 text-[12px] md:text-[20px] font-fira-sans font-light">
              {slide.text}
            </p>
          </div>

          <Arrow />
        </div>

        <div className="max-w-[1160px] mx-auto py-6 md:py-16 px-6 md:px-0 gap-20">
          {detailsData.map((item, idx) => (
            <DetailCard
              key={idx}
              title={item.title}
              text={item.text}
              imgSrc={item.img}
              reverse={idx % 2 !== 0}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
