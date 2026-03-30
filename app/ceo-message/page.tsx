"use client";

import { useState } from "react";
import { Modal } from "antd";

export default function CEOGreetingsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/greetings/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div
        className="
          absolute z-10
          left-1/2 -translate-x-1/2 bottom-10
          w-[90%] max-w-md
          rounded-2xl p-6 bg-black/40 flex flex-col gap-4
          lg:left-[380px] lg:top-[702px] lg:bottom-auto lg:translate-x-0
          lg:w-[446px] lg:h-[257px] lg:p-10  mb-20
        "
      >
        <div className="flex flex-col gap-2">
          <div className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-white">
            А.Чинбишрэлт
          </div>
          <div className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-white font-fira-sans">
            Бишрэлт Группийн Гүйцэтгэх Захирал
          </div>
        </div>

        <button
          onClick={showModal}
          className="
            h-[48px] sm:h-[52px]
            cursor-pointer flex items-center justify-center gap-2
            w-full max-w-[220px] lg:w-[220px]
            rounded-full border border-white px-4 py-2
            text-white font-fira-sans font-medium text-[14px] sm:text-[16px]
            hover:bg-[linear-gradient(to_right,#3B68B2_1%,#2C3E50_100%)]
            hover:border-transparent
          "
        >
          Дэлгэрэнгүй унших
          <img
            src="/detail/arrow.svg"
            alt="arrow"
            className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
          />
        </button>
      </div>

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={1200}
        height={400}
        styles={{
          body: {
            padding: 0,
            maxHeight: "80vh",
            overflowY: "auto",
          },
        }}
      >
        <div
          className="
      w-full
      flex flex-col
      p-4 sm:p-6 lg:p-8
      gap-6
    "
        >
          <div>
            <div className="text-[#335BDD] font-bold text-[28px] sm:text-[32px] lg:text-[40px]">
              А. Чинбишрэлт
            </div>
            <div className="text-[#667085] text-[14px] sm:text-[16px] font-fira-sans font-medium">
              Бишрэлт Группийн Гүйцэтгэх Захирал
            </div>
          </div>

          <div
            className="
        flex flex-col lg:flex-row 
        gap-4 sm:gap-6
      "
          >
            <div className="w-full lg:w-[488px] h-[260px] sm:h-[320px] lg:h-[581px]">
              <img
                src="/greetings/ceo.jpg"
                alt="ceo-photo"
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>

            <div
              className="
          text-black text-[12px] sm:text-[16px]
          leading-[22px] tracking-[2%] 
          font-fira-sans font-light
        "
            >
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
              sit amet.., comes from a line in section 1.10.32. Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
              amet.., comes from a line in section 1.10.32.
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
