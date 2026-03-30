"use client";

interface DetailCardProps {
  title: string;
  text: string;
  imgSrc: string;
  reverse?: boolean;
}

const DetailCard = ({ title, text, imgSrc, reverse }: DetailCardProps) => (
  <div
    className={`flex flex-col md:flex-row gap-6 justify-center items-center md:mt-16 md:px-0 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className="flex flex-col w-full md:w-[568px] gap-6 order-1 md:order-2">
      <div className="flex flex-col md:gap-3">
        <div className="font-semibold text-[20px] md:text-[32px] text-[#344054] md:h-[47px] mt-2">
          {title}
        </div>
        <div className="text-[#667085]  text-[12px] md:text-[16px]  leading-[22px]  font-fira-sans  font-light  tracking-[2%]  text-justify">
          {text}
        </div>
      </div>
    </div>
    <img
      src={imgSrc}
      alt={title}
      className="w-full md:w-[568px] h-[220px] md:h-[300px] object-cover rounded-[16px] order-2 md:order-1 mb-2"
    />
  </div>
);

export default DetailCard;
