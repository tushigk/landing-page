import Arrow from "@/components/arrow/page";
import Footer from "@/components/footer/page";
import Link from "next/link";

export default function SustainableDevelopmentReport() {
  const cards = [
    {
      id: 1,
      title: "НИЙГЭМ",
      img: "/development/card1.jpg",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
    {
      id: 2,
      title: "БОЛОВСРОЛ",
      img: "/development/card2.jpg",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 3,
      title: "СОЁЛ УРЛАГ,СПОРТ",
      img: "/development/card3.jpg",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 4,
      title: "БАЙГАЛЬ ОРЧИН",
      img: "/development/card4.jpg",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  const newsData = [
    {
      id: 1,
      title: "Lorem Ipsum is simply dummy text of the printing",
      date: "2025-10-07",
      description:
        "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/news/item.jpg",
    },
    {
      id: 2,
      title: "Another news title goes here",
      date: "2025-10-08",
      description:
        "This is another news description for demonstration purposes.",
      image: "/news/item.jpg",
    },
    {
      id: 3,
      title: "Third news title example",
      date: "2025-10-09",
      description: "More text for the third news item.",
      image: "/news/item.jpg",
    },
    {
      id: 4,
      title: "Fourth news title example",
      date: "2025-10-10",
      description: "Description for the fourth news item here.",
      image: "/news/item.jpg",
    },
  ];

  return (
    <>
      {/* HERO */}
      <div className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/development/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white px-4 sm:px-6 max-w-[1300px] mx-auto z-20 mb-[100px] lg:mb-[165px]">
          <h1 className="text-[18px] sm:text-[32px] lg:text-[40px] font-bold drop-shadow-lg">
            ТОГТВОРТОЙ ХӨГЖИЛ
          </h1>
          <p className="mt-4 lg:mt-6 text-[12px] sm:text-[18px] lg:text-[20px] w-full font-fira-sans font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button
            className="
              mt-6 lg:mt-8
              h-[48px] lg:h-[52px]
              cursor-pointer flex items-center justify-center gap-2
              w-full max-w-[340px]
              rounded-full border border-white px-4 py-2
              text-white font-fira-sans font-medium text-[14px] lg:text-[16px]
              hover:bg-[linear-gradient(to_right,#3B68B2_1%,#2C3E50_100%)]
              hover:border-transparent
            "
          >
            Тогтвортой хөгжлийн тайлан татах
            <img
              src="/detail/arrow.svg"
              alt="arrow"
              className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px]"
            />
          </button>
        </div>
        <Arrow />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1300px] mx-auto py-12 lg:py-16 gap-20 px-4 sm:px-6 bg-white">
        <div className="w-full h-auto gap-6">
          <div className="w-full gap-6">
            <div className="w-full font-medium text-[18px] sm:text-[20px] bg-linear-to-r from-[#293B8D] to-[#9BBEF5] bg-clip-text text-transparent">
              Нийгмийн хариуцлага
            </div>

            <div className="w-full h-0.5 bg-linear-to-r from-[#293B8D] to-[#9BBEF5] rounded-lg mt-2" />

            {/* Intro block */}
            <div className="w-full gap-6 grid grid-cols-1 lg:grid-cols-2 items-center mt-6 lg:h-[568px]">
              <div className="w-full max-w-xl space-y-4">
                <div className="font-semibold text-[24px] sm:text-[28px] lg:text-[32px] text-[#344054] md:block hidden">
                  Нийгмийн хариулага
                </div>
                <div className="font-fira-sans  text-[12px] sm:text-[16px] text-[#667085] leading-[22px]  font-light  tracking-[2%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
              <img
                src="/development/item.png"
                alt="image"
                className="w-full h-full sm:h-[320px] lg:h-[568px] rounded-[16px] object-cover"
              />
            </div>

            {/* Strategy cards */}
            <div className="w-full font-normal text-[18px] sm:text-[20px] bg-linear-to-r from-[#293B8D] to-[#9BBEF5] bg-clip-text text-transparent mt-12 lg:mt-20">
              Нийгмийн хариуцлагын хөгжлийн стратеги
            </div>

            <div className="w-full h-0.5 bg-linear-to-r from-[#293B8D] to-[#9BBEF5] rounded-lg mt-2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 justify-center">
              {cards.map((card, i) => (
                <Link
                  key={i}
                  href={`/sustainable-development-report/${card.id}`}
                >
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer w-full h-[208px] sm:h-[360px] lg:h-[380px] flex flex-col">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/30 z-10 transition-all duration-500 group-hover:bg-black/30"></div>

                    <div className="absolute inset-0 bg-linear-to-br from-[#293B8D] to-[#9BBEF5] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-700 ease-in-out z-20">
                      <img
                        src="/aboutus/brandmark.svg"
                        alt="Brandmark"
                        className="absolute bottom-0 right-0 w-[140px] h-[140px] sm:w-[183px] sm:h-[183px]"
                      />
                    </div>

                    <div className="absolute bottom-36 md:bottom-16 lg:bottom-20 left-0 w-full text-start z-30 px-4">
                      <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-white drop-shadow-lg transform transition-transform duration-800 ease-out sm:group-hover:-translate-y-45">
                        {card.title}
                      </h3>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 z-40 px-4 md:text-center text-start transition-opacity duration-700">
                      <p className="text-white text-[14px] sm:text-[16px]">
                        {card.text}
                      </p>
                    </div>

                    <button className="absolute bottom-4 md:left-1/2 left-[105px] transform -translate-x-1/2 opacity-100 
                    sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 w-[180px] sm:w-[190px]
                     h-[44px] sm:h-[52px] rounded-[300px] bg-transparent flex items-center justify-center gap-2 px-4 
                     cursor-pointer border-2 border-[#D0D5DD] z-50 hover:bg-white text-white md:text-black">
                      Дэлгэрэнгүй
                      <img
                        src="/development/arrow.svg"
                        alt="arrow"
                        className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                      />
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {/* News */}
            <div className="w-full font-normal text-[18px] sm:text-[20px] bg-linear-to-r from-[#293B8D] to-[#9BBEF5] bg-clip-text text-transparent mt-12 lg:mt-20">
              Нийгмийн хариуцлагатай холбоотой мэдээ
            </div>

            <div className="w-full h-0.5 bg-linear-to-r from-[#293B8D] to-[#9BBEF5] rounded-lg mt-2" />

            <div className="max-w-full mx-auto py-10 lg:py-16 px-0 sm:px-0 md:flex flex-col gap-6 hidden">
              {newsData.map((news) => (
                <div
                  key={news.id}
                  className="
                    w-full rounded-[20px] p-3 gap-6 bg-white flex flex-col lg:flex-row shadow-lg
                    h-auto lg:h-[304px]
                  "
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="
                      w-full lg:w-[420px]
                      h-full sm:h-[230px] lg:h-full
                      object-cover rounded-[16px]
                    "
                  />
                  <div className="flex flex-col justify-between w-full h-full gap-4">
                    <div className="mt-4 lg:mt-11">
                      <div className="font-semibold text-[18px] sm:text-[20px] lg:text-[24px] text-[#344054]">
                        {news.title}
                      </div>
                      <div className="font-fira-sans text-[14px] sm:text-[16px] text-[#98A2B3] mt-1 md:block hidden">
                        {news.date}
                      </div>
                      <div className="w-full mt-2 font-fira-sans font-normal text-[14px] sm:text-[16px] text-[#344054] md:block hidden">
                        {news.description}
                      </div>
                    </div>

                    <div className="flex justify-start lg:justify-end mt-2 lg:mt-0 mb-4 lg:mb-10">
                      <button className="w-[180px] sm:w-[190px] h-[44px] sm:h-[52px] rounded-[300px] bg-white flex items-center justify-center gap-2 px-4 cursor-pointer border border-[#D0D5DD] hover:bg-linear-to-r hover:from-[#293B8D] hover:to-[#9BBEF5] hover:text-white group text-[14px] sm:text-[16px]">
                        Дэлгэрэнгүй
                        <img
                          src="/detail/arrow2.svg"
                          alt="arrow"
                          className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] group-hover:hidden"
                        />
                        <img
                          src="/development/hoverarrow.svg"
                          alt="hover arrow"
                          className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] hidden group-hover:block"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-full mx-auto py-10 lg:py-16 px-0 sm:px-0 flex flex-col gap-6 md:hidden">
              {newsData.map((news) => (
                <div
                  key={news.id}
                  className="
        relative w-full h-[400px] lg:h-[380px]
        rounded-2xl overflow-hidden
      "
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="
          absolute inset-0 w-full h-full object-cover
        "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 flex flex-col gap-4">
                    <div className="text-white font-semibold text-[18px] sm:text-[20px] lg:text-[24px]">
                      {news.title}
                    </div>

                    <div className="flex justify-start">
                      <button className="w-[180px] sm:w-[190px] h-[44px] sm:h-[52px] rounded-[300px]  text-white flex items-center justify-center gap-2 px-4 cursor-pointer border border-white hover:bg-linear-to-r hover:from-[#293B8D] hover:to-[#9BBEF5] hover:text-white group text-[14px] sm:text-[16px]">
                        Дэлгэрэнгүй
                        <img
                          src="/detail/arrow2.svg"
                          alt="arrow"
                          className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] group-hover:hidden"
                        />
                        <img
                          src="/development/hoverarrow.svg"
                          alt="hover arrow"
                          className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] hidden group-hover:block"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
