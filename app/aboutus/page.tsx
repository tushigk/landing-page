"use client";

import Arrow from "@/components/arrow/page";
import Footer from "@/components/footer/page";
import BrandSection from "@/components/aboutus/brand/page";
import DetailCard from "@/components/aboutus/detail-card/page";

export default function AboutUs() {
  const cards = [
    {
      title: "Lorem Ipsum",
      img: "/aboutus/item.jpg",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Lorem Ipsum",
      img: "/aboutus/item2.jpg",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Lorem Ipsum",
      img: "/aboutus/item3.jpg",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Lorem Ipsum",
      img: "/aboutus/item4.jpg",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Lorem Ipsum",
      img: "/aboutus/item5.jpg",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  const visionData = [
    {
      title: "Алсын хараа",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "/aboutus/cover.jpg",
    },
    {
      title: "Эрхэм зорилго",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "/aboutus/cover.jpg",
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
          <img
            src="/aboutus/cover.jpg"
            alt="About Us Cover"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-20 text-center text-white px-6 pb-16 max-w-[1200px] mx-auto top-[500px] md:top-[1000px] -translate-y-1/2">
            <h1 className="md:text-[40px] text-[18px] font-semibold drop-shadow-lg">
              Бидний тухай
            </h1>
            <p className="md:mt-6 mt-2 md:text-[20px] font-light font-fira-sans text-[12px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <Arrow />
        </div>

      <div className="bg-white md:bg-transparent max-w-[1160px] mx-auto py-16 gap-20 px-6">

          <div className="w-full h-auto gap-6">
            <div className="w-full gap-6">
              <div className="w-full font-medium md:text-[20px] text-[14px] bg-[linear-gradient(90deg,#293B8D_10%,#9BBEF5_100%)] bg-clip-text text-transparent">
                Бид бол БИШРЭЛТ-чүүд
              </div>

              <div className="w-full h-0.5 bg-linear-to-r from-[#293B8D] to-[#9BBEF5] rounded-lg mt-2"></div>

              <div className="mt-3  text-[#667085]  text-[12px] md:text-[16px]  leading-[22px]  font-fira-sans  font-light  tracking-[2%]  text-justify  mb-12">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer 
                 w-full sm:w-[212px] h-[200px] sm:h-[348px]"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                <div
                  className="absolute inset-0 z-10 transition-all duration-500
                   bg-black/50 sm:bg-black/50 sm:group-hover:bg-black/30"
                ></div>

                <div
                  className="absolute inset-0 bg-linear-to-br from-[#293B8D] to-[#9BBEF5]
                   opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                   transition-opacity duration-700 ease-in-out z-20"
                >
                  <img
                    src="/aboutus/brandmark.svg"
                    alt="Brandmark"
                    className="absolute bottom-0 right-0 w-[183px] h-[183px]"
                  />
                </div>

                <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
                  <img
                    src={`/aboutus/count${i + 1}.svg`}
                    alt={`count ${i + 1}`}
                    className="w-[40px] h-[40px]"
                  />
                </div>

                <div className="absolute md:bottom-4 bottom-[150px] left-0 w-full md:text-center md:ml-0 ml-12 z-30 px-4">
                  <h3
                    className="text-[20px] sm:text-[24px] font-semibold text-white drop-shadow-lg
                     transform transition-transform duration-300 ease-out
                     sm:group-hover:-translate-y-57"
                  >
                    {card.title}
                  </h3>
                </div>

                <div
                  className="absolute inset-0 flex items-center justify-center md:ml-0 ml-[39px] mb-10 md:mb-0
                   opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                   z-40 px-6 md:text-center transition-opacity duration-700"
                >
                  <p className="text-white text-[14px] sm:text-[16px]">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-auto gap-6 mt-[100px]">
            <div className="w-full gap-6">
              <div className="w-full font-medium md:text-[20px] text-[14px] bg-[linear-gradient(90deg,#293B8D_10%,#9BBEF5_100%)] bg-clip-text text-transparent leading-[100%] tracking-[0%]">
                Бидний амжилт
              </div>

              <div className="w-full h-0.5 bg-linear-to-r from-[#293B8D] to-[#9BBEF5] rounded-lg mt-2"></div>

              <div className="mt-3  text-[#667085]  text-[12px] md:text-[16px]  leading-[22px]  font-fira-sans  font-light  tracking-[2%]  text-justify  md:mb-12 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-2">
              {[
                { number: "31", label: "Жилийн түүх" },
                { number: "1500+", label: "Ажилчид" },
                { number: "260+", label: "Импортийн бараа" },
                { number: "4.5%", label: "Импортын зах зээл" },
                { number: "5%", label: "ДНБ" },
                { number: "2сая", label: "Үйлчлүүлэгч /сард/" },
              ].map((card, i) => (
                <div
                  key={i}
                  className="md:w-[370px] w-full md:h-[180px] h-[100px] rounded-2xl bg-linear-to-r from-[#293B8D] to-[#9BBEF5] shadow-lg flex flex-col items-start justify-center text-white font-semibold md:text-center md:px-10 px-4"
                >
                  <div className="md:text-[36px] text-[24px] font-bold">{card.number}</div>
                  <div className="md:text-[16px] text-[14px] mt-2">{card.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-auto gap-6 md:mt-[100px] mt-10">
            <div className="w-full gap-6">
              <div className="w-full font-medium md:text-[20px] text-[14px] bg-[linear-gradient(90deg,#293B8D_10%,#9BBEF5_100%)] bg-clip-text text-transparent leading-[100%] tracking-[0%]">
                Алсын хараа, Эрхэм зорилго
              </div>

              <div className="w-full h-0.5 bg-linear-to-r from-[#293B8D] to-[#9BBEF5] rounded-lg mt-2" />
              <div className="max-w-[1160px] mx-auto md:py-16 gap-20">
                {visionData.map((item, idx) => (
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
          </div>
        </div>
        <BrandSection />
      </div>
      <Footer />
    </>
  );
}
