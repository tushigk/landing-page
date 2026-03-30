"use client";
import Arrow from "@/components/arrow/page";
import Footer from "@/components/footer/page";
import { Modal } from "antd";
import { useState } from "react";

export default function Management() {
  const cards = [
    {
      title: "Lorem Ipsum",
      img: "/management/lorem.jpg",
      text: "Lorem Ipsum is simply dummy text",
    },
    {
      title: "Lorem Ipsum",
      img: "/management/lorem.jpg",
      text: "Lorem Ipsum is simply dummy text",
    },
    {
      title: "Lorem Ipsum",
      img: "/management/lorem.jpg",
      text: "Lorem Ipsum is simply dummy text",
    },
    {
      title: "Lorem Ipsum",
      img: "/management/lorem.jpg",
      text: "Lorem Ipsum is simply dummy text",
    },
    {
      title: "Lorem Ipsum",
      img: "/management/lorem.jpg",
      text: "Lorem Ipsum is simply dummy text",
    },
  ];

  const branchDirectors = Array(20).fill({
    title: "Lorem Ipsum",
    img: "/management/lorem.jpg",
    text: "Lorem Ipsum is simply dummy text",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Hero */}
      <div className="relative w-full h-screen">
        <img
          src="/management/cover.jpg"
          alt="Management Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 transition-all duration-500" />
        <div className="absolute inset-0 flex items-end justify-center text-center text-white px-6 pb-16 max-w-[1200px] mx-auto z-20">
          <div className="mb-[80px] lg:mb-[120px]">
            <h1 className="text-[18px] sm:text-[32px] lg:text-[40px] font-bold drop-shadow-lg tracking-[2%]">
              УДИРДЛАГЫН БАГ
            </h1>
            <p className="mt-4 lg:mt-6 text-[12px] sm:text-[18px] lg:text-[20px]font-fira-sans font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <Arrow />
      </div>

      {/* Management & Branch Directors */}
      <div className="max-w-[1456px] mx-auto md:py-16 gap-40  sm:px-6">
        <div className="w-full h-auto gap-6 p-6 bg-white">
          {/* Board members */}
          <div className="w-full gap-6">
            <div className="w-full font-medium text-[20px] sm:text-[28px] lg:text-[32px] bg-[linear-gradient(90deg,#293B8D_10%,#9BBEF5_100%)] bg-clip-text text-transparent text-center">
              Төлөөлөн удирдах зөвлөлийн гишүүд
            </div>

            <div className="w-full lg:w-[1160px] h-0.5 bg-linear-to-r from-[#293B8D] to-[#9BBEF5] rounded-lg mt-2 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10 mb-20 justify-items-center">
            {cards.map((card, i) => (
              <div
                key={i}
                className="
                  relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer
                  w-full max-w-full h-[400px] sm:h-[400px]
                  lg:w-[272px] lg:h-[340px]
                "
                onClick={showModal}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-all duration-500 md:grayscale group-hover:grayscale-0"
                />

                <div className="
                  absolute bottom-0 left-0 right-0
                  h-[100px]
                  bg-gradient-to-r from-[#293B8D] to-[#9BBEF5]
                  md:opacity-50 group-hover:opacity-100
                  transition-all duration-500
                  flex flex-col justify-center px-4 gap-1
                  rounded-b-[8px]
                ">
                  <div className="font-fira-sans font-bold text-white text-[18px] sm:text-[20px] leading-tight">
                    {card.title}
                  </div>
                  <div className="font-fira-sans font-normal text-white text-[14px] sm:text-[16px] leading-snug">
                    {card.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Branch directors */}
          <div className="w-full gap-6">
            <div className="w-full font-medium text-[24px] sm:text-[28px] lg:text-[32px] bg-[linear-gradient(90deg,#293B8D_10%,#9BBEF5_100%)] bg-clip-text text-transparent text-center">
              Салбарын захирлууд
            </div>
            <div className="w-full lg:w-[1160px] h-0.5 bg-linear-to-r from-[#293B8D] to-[#9BBEF5] rounded-lg mt-2 mx-auto" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10 justify-items-center">
              {branchDirectors.map((card, i) => (
                <div
                  key={i}
                  className="
                    relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer
                    w-full max-w-full h-[400px] sm:h-[340px]
                    lg:w-[272px] lg:h-[340px]
                  "
                  onClick={showModal}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-all duration-500 md:grayscale group-hover:grayscale-0"
                  />

                  <div className="
                    absolute bottom-0 left-0 right-0
                    h-[100px]
                    bg-linear-to-r from-[#293B8D] to-[#9BBEF5]
                    md:opacity-50 group-hover:opacity-100
                    transition-all duration-500
                    flex flex-col justify-center px-4 gap-1
                    rounded-b-[8px]
                  ">
                    <div className="font-fira-sans font-bold text-white text-[18px] sm:text-[20px] leading-tight">
                      {card.title}
                    </div>
                    <div className="font-fira-sans font-normal text-white text-[14px] sm:text-[16px] leading-snug">
                      {card.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={1200}          // desktop unchanged
        style={{ height: 840 }} // desktop unchanged
        styles={{
          body: {
            maxHeight: "80vh",
            overflowY: "auto", // full modal scroll on smaller viewports
          },
        }}
      >
        <div className="w-full flex flex-col p-4 sm:p-6 lg:p-8 gap-6 lg:h-[760px]">
          <div>
            <div className="text-[#335BDD] font-bold text-[28px] sm:text-[32px] lg:text-[40px]">
              А. Чинбишрэлт
            </div>
            <div className="text-[#667085] text-[14px] sm:text-[16px] font-fira-sans font-medium">
              Бишрэлт Группийн Гүйцэтгэх Захирал
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 flex-1">
            <div className="w-full lg:w-[488px] h-[260px] sm:h-[320px] lg:h-[581px] flex-shrink-0">
              <img
                src="/greetings/ceo.jpg"
                alt="ceo-photo"
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>

            <div className="flex-1 text-black text-[14px] sm:text-[16px] leading-[22px] font-fira-sans overflow-visible">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
              sit amet., comes from a line in section 1.10.32. Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes
              of Good and Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
              amet.., comes from a line in section 1.10.32.
            </div>
          </div>
        </div>
      </Modal>

      <Footer />
    </div>
  );
}
