"use client";

import { useState } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Modal, Spin } from "antd";
import Footer from "@/components/footer/page";
import { blogApi } from "@/apis";
import { BlogsResponse, FeaturedSlide, BlogListItem } from "@/apis/blog";
import { useTranslation } from "react-i18next";

const ITEMS_PER_PAGE = 4;

export default function News() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { t, i18n } = useTranslation("translation");

  const lang = (i18n.language === "en" ? "en" : "mn") as "mn" | "en";

  const {
    data: featuredSlides,
    isLoading: isFeaturedLoading,
    error: featuredError,
  } = useSWR<FeaturedSlide[]>(
    ["swr.blogs.featured", lang],
    () => blogApi.getFeaturedBlogs({ limit: 5, lang }),
    { revalidateOnFocus: false }
  );

  const {
    data: blogsData,
    isLoading: isNewsLoading,
    error: newsError,
  } = useSWR<BlogsResponse>(
    ["swr.blogs.list", currentPage, lang],
    () =>
      blogApi.getBlogs({
        page: currentPage,
        limit: ITEMS_PER_PAGE,
        lang,
      }),
    { revalidateOnFocus: false }
  );


  const totalPages = blogsData?.totalPages || 1;
  const currentNews: BlogListItem[] =
    (blogsData?.data || [])
      .slice()
      .sort(
        (a: BlogListItem, b: BlogListItem) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );



  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleNext = () => {
    if (!featuredSlides || featuredSlides.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % featuredSlides.length);
  };

  const handlePrev = () => {
    if (!featuredSlides || featuredSlides.length === 0) return;
    setActiveIndex((prev) =>
      prev === 0 ? featuredSlides.length - 1 : prev - 1
    );
  };

  const currentSlide =
    featuredSlides && featuredSlides.length > 0
      ? featuredSlides[activeIndex]
      : null;

  const image = currentSlide?.image || "/news/cover.jpg";

  return (
    <>
      <div className="relative w-full h-[70vh] sm:h-[550px] lg:h-screen overflow-hidden">
        {isFeaturedLoading && !currentSlide && (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <Spin size="large" />
          </div>
        )}

        {!isFeaturedLoading && featuredError && (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-red-500">
            Онцлох мэдээ ачаалахад алдаа гарлаа
          </div>
        )}

        {!isFeaturedLoading && (
          <>
            <motion.img
              key={image}
              src={image}
              alt="News Cover"
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />

            <div className="absolute inset-0 bg-black/50 transition-all duration-500" />

            <div className="absolute bottom-0 left-0 w-full text-white text-center px-4 sm:px-6 pb-10 lg:pb-[60px] z-30 flex flex-col items-center">
              <div className="max-w-[1160px]">
                <motion.h1
                  key={currentSlide?.id || "featured-title"}
                  className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold drop-shadow-lg leading-snug"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  dangerouslySetInnerHTML={{
                    __html: currentSlide?.title || "",
                  }}
                />

                <motion.p
                  key={`${currentSlide?.id || "featured-desc"}-desc`}
                  className="mt-4 sm:mt-6 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  dangerouslySetInnerHTML={{
                    __html: currentSlide?.description || "",
                  }}
                />
              </div>

              {currentSlide && (
                <div className="group flex flex-col items-start mt-6 sm:mt-8 lg:mt-10">
                  <button
                    className="relative text-[12px] sm:text-[18px] lg:text-[20px] font-medium md:font-semibold text-white font-fira-sans cursor-pointer"
                    onClick={showModal}
                  >
                    ДЭЛГЭРЭНГҮЙ
                  </button>
                  <div
                    className="w-[25px] h-1 rounded-lg bg-white mt-2 
                    transition-all duration-500 ease-out origin-left
                    group-hover:w-[125px]"
                  />
                </div>
              )}

              {featuredSlides && featuredSlides.length > 0 && (
                <div className="mt-8 lg:mt-12 md:flex hidden items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg font-semibold text-white">
                  <span className="text-[16px] sm:text-[18px] lg:text-[20px]">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="w-[140px] sm:w-[180px] lg:w-[200px] h-1 bg-white/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      animate={{
                        width: `${((activeIndex + 1) / (featuredSlides.length || 1)) *
                          100
                          }%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <span className="text-[16px] sm:text-[18px] lg:text-[20px]">
                    {String(featuredSlides.length).padStart(2, "0")}
                  </span>
                </div>
              )}
            </div>

            {/* NAV BUTTONS */}
            {featuredSlides && featuredSlides.length > 1 && (
              <div className="md:flex gap-3 sm:gap-6 absolute bottom-4 sm:bottom-6 lg:bottom-[60px] right-4 sm:right-10 lg:right-20 z-40 hidden">
                <button
                  onClick={handlePrev}
                  className="group border border-white rounded-full p-2 sm:p-3 lg:p-4 cursor-pointer backdrop-blur-sm 
                      bg-transparent hover:bg-white transition-colors duration-300 ease-in-out"
                >
                  <ArrowLeft
                    size={22}
                    className="text-white group-hover:text-black transition-colors duration-300 ease-in-out"
                  />
                </button>

                <button
                  onClick={handleNext}
                  className="group border border-white rounded-full p-2 sm:p-3 lg:p-4 cursor-pointer backdrop-blur-sm 
                      bg-transparent hover:bg-white transition-colors duration-300 ease-in-out"
                >
                  <ArrowRight
                    size={22}
                    className="text-white group-hover:text-black transition-colors duration-300 ease-in-out"
                  />
                </button>
              </div>
            )}

            {/* MODAL */}
            <Modal
              open={isModalOpen}
              onCancel={handleCancel}
              footer={null}
              width={1200}
            >
              {currentSlide && (
                <div className="w-full h-auto flex flex-col p-4 sm:p-6 md:p-8 gap-4 sm:gap-6">
                  {/* Modal title as HTML */}
                  <div
                    className="text-[#335BDD] font-bold text-[18px] sm:text-[20px] md:text-[24px]"
                    dangerouslySetInnerHTML={{
                      __html: currentSlide.title || "",
                    }}
                  />

                  <div className="w-full h-[220px] sm:h-[320px] md:h-[450px]">
                    <img
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      className="w-full h-full object-cover rounded-4"
                    />
                  </div>

                  <div className="flex gap-2 sm:gap-3 md:gap-4 mt-2 overflow-x-auto">
                    {(currentSlide.images || []).map((img, idx) => (
                      <div
                        key={idx}
                        className="w-[120px] h-[70px] sm:w-[160px] sm:h-[90px] md:w-[205px] md:h-[108px] rounded-xl overflow-hidden shrink-0"
                      >
                        <img
                          src={img}
                          alt={`Related ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Modal description as HTML */}
                  <div
                    className="flex-1 text-black text-[14px] sm:text-[15px] md:text-[16px] overflow-y-auto mt-2 sm:mt-4"
                    dangerouslySetInnerHTML={{
                      __html: currentSlide.description || "",
                    }}
                  />
                </div>
              )}
            </Modal>
          </>
        )}
      </div>

      {/* NEWS LIST – desktop/tablet */}
      <div className="max-w-[1200px] mx-auto py-10 sm:py-16 px-4 sm:px-6 md:flex flex-col gap-6 hidden">
        {isNewsLoading && (
          <div className="w-full flex justify-center mt-10">
            <Spin />
          </div>
        )}

        {newsError && (
          <div className="w-full text-center text-red-500">
            Мэдээ ачаалахад алдаа гарлаа
          </div>
        )}

        {!isNewsLoading &&
          !newsError &&
          currentNews.map((news) => (
            <div
              key={news.id}
              className="w-full rounded-[20px] p-3 sm:p-4 gap-4 sm:gap-6 bg-white flex flex-col md:flex-row shadow-lg h-auto md:h-[304px]"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-[200px] sm:h-[230px] md:w-[420px] md:h-full object-cover rounded-[16px]"
              />
              <div className="flex flex-col justify-between w-full h-full gap-4 mt-2 md:mt-0">
                <div className="mt-2 sm:mt-4 md:mt-11">
                  {/* Desktop list title as HTML */}
                  <div
                    className="w-full font-semibold text-[18px] sm:text-[20px] md:text-[24px] text-[#344054]"
                    dangerouslySetInnerHTML={{
                      __html: news.title || "",
                    }}
                  />
                  <div className="font-fira-sans text-[14px] sm:text-[15px] md:text-[16px] text-[#98A2B3] mt-1">
                    {news.date}
                  </div>
                  <div
                    className="w-full mt-2 font-fira-sans font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#344054]"
                    dangerouslySetInnerHTML={{
                      __html: news.description,
                    }}
                  />
                </div>

                <div className="flex justify-start md:justify-end mb-4 md:mb-10 mt-2 md:mt-0">
                  <button className="w-full sm:w-[190px] h-[44px] sm:h-[52px] rounded-[300px] bg-white flex items-center justify-center gap-2 px-4 cursor-pointer border border-[#D0D5DD]">
                    <div className="text-[14px] sm:text-[16px] text-[#344054]">
                      Дэлгэрэнгүй
                    </div>
                    <img
                      src="/detail/arrow2.svg"
                      alt="arrow"
                      className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}

        {/* PAGINATION */}
        {!isNewsLoading && !newsError && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-4 sm:mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 text-[12px] sm:text-[14px] font-medium cursor-pointer ${currentPage === page
                  ? "bg-[#335BDD] text-white"
                  : "bg-transparent text-[#344054] hover:bg-gray-100"
                  }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
            >
              &gt;
            </button>
          </div>
        )}
      </div>

      {/* NEWS LIST – mobile */}
      <div className="max-w-full mx-auto py-10 lg:py-16 px-6 sm:px-0 flex flex-col gap-6 md:hidden bg-white">
        {isNewsLoading && (
          <div className="w-full flex justify-center mt-6">
            <Spin />
          </div>
        )}

        {!isNewsLoading &&
          !newsError &&
          currentNews.map((news) => (
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

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 flex flex-col gap-4">
                {/* Mobile list title as HTML */}
                <div
                  className="text-white font-semibold text-[18px] sm:text-[20px] lg:text-[24px]"
                  dangerouslySetInnerHTML={{
                    __html: news.title || "",
                  }}
                />

                <div className="flex justify-start">
                  <button className="w-[180px] sm:w-[190px] h-[44px] sm:h-[52px] rounded-[300px]  text-white flex items-center justify-center gap-2 px-4 cursor-pointer border border-white hover:bg-linear-to-r hover:from-[#293B8D] hover:to-[#9BBEF5] hover:text-white group text-[14px] sm:text-[16px]">
                    Дэлгэрэнгүй
                    <img
                      src="/news/arrow.svg"
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

      <Footer />
    </>
  );
}
