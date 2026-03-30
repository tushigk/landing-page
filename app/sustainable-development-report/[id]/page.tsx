import Arrow from "@/components/arrow/page";
import Footer from "@/components/footer/page";
import { notFound } from "next/navigation";

const cardData = [
  {
    id: 1,
    title: "НИЙГЭМ",
    img: "/development/card1.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    data: [
      {
        title: "Хандивын үйл ажиллагаа",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        img: "/development/item.jpg",
      },
      {
        title: "Хүүхэд, ахмадуудад...",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        img: "/development/item2.jpg",
      },
      {
        title: "Сайн үйлсийн аян",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        img: "/development/item3.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "БОЛОВСРОЛ",
    img: "/development/card2.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    data: [
      {
        title: "Багш нарт зориулсан сургалт",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        img: "/development/item4.jpg",
      },
      {
        title: "Сургалтын орчны шинэчлэл",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        img: "/development/item5.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "СОЁЛ УРЛАГ, СПОРТ",
    img: "/development/card3.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    data: [
      {
        title: "Соёл урлагийн наадам",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        img: "/development/item6.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "БАЙГАЛЬ ОРЧИН",
    img: "/development/card4.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    data: [
      {
        title: "Мод тарих өдөрлөг",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        img: "/development/item7.jpg",
      },
      {
        title: "Хог ангилан ялгах хөтөлбөр",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        img: "/development/item8.jpg",
      },
    ],
  },
];

export default function DevelopmentDetail({
  params,
}: {
  params: { id: string };
}) {
  const card = cardData.find((c) => c.id === Number(params.id));
  if (!card) return notFound();

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-[100vh] sm:h-screen">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white px-4 sm:px-6 max-w-[1300px] mx-auto z-20 mb-[80px] sm:mb-[165px]">
          <h1 className="text-[18px] sm:text-[32px] lg:text-[40px] font-semibold tracking-[2%] leading-[100%] drop-shadow-lg">
            {card.title}
          </h1>
          <p className="mt-4 sm:mt-6 text-[12px] sm:text-[18px] lg:text-[20px] font-light w-full font-fira-sans">
            {card.text}
          </p>
          <button
            className="mt-6 sm:mt-8 h-[48px] sm:h-[52px] cursor-pointer flex items-center justify-center gap-2 w-full sm:w-[340px] rounded-full border border-white px-4 py-2 text-white font-fira-sans font-medium text-[14px] sm:text-[16px]
                   hover:bg-[linear-gradient(to_right,#3B68B2_1%,#2C3E50_100%)] hover:border-transparent"
          >
            Тогтвортой хөгжлийн тайлан татах
            <img
              src="/detail/arrow.svg"
              alt="arrow"
              className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
            />
          </button>
        </div>

        <Arrow />
      </div>

      {/* CONTENT BLOCKS */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-10 sm:mt-20 flex flex-col gap-12 sm:gap-20 mb-[80px] sm:mb-[180px]">
        {card.data?.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse lg:flex-row gap-6 justify-center items-center ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full lg:w-[568px] h-[240px] sm:h-[300px] lg:h-[500px] object-cover rounded-[16px]"
            />
            <div className="flex flex-col w-full lg:w-[568px] gap-4 sm:gap-6">
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="font-semibold text-[14px] sm:text-[28px] lg:text-[32px] md:text-[#344054] bg-[linear-gradient(90deg,#293B8D_10%,#9BBEF5_100%)] bg-clip-text text-transparent md:bg-linear-0">
                  {item.title}
                </div>
                <div className="w-full h-0.5 bg-linear-to-r from-[#293B8D] to-[#9BBEF5] rounded-lg md:hidden block"></div>
                <div className="text-[12px] sm:text-[16px] text-[#667085] leading-[22px] sm:leading-[26px] font-fira-sans font-light">
                  {item.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
