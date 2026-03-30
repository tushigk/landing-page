"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface MenuPageProps {
  onClose: () => void;
}

export default function MenuPage({ onClose }: MenuPageProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [lastMenu, setLastMenu] = useState<string | null>(null);
  const router = useRouter();
  const { i18n } = useTranslation("translation");

  const toggleLanguage = () => {
    const newLang = i18n.language === "mn" ? "en" : "mn";
    i18n.changeLanguage(newLang);
  };

  const aboutUsSub = [
    { title: "Грүппийн танилцуулга", link: "/aboutus" },
    { title: "Түүхэн замнал", link: "/history" },
    { title: "Ерөнхийлөгчийн мэндчилгээ", link: "/ceo-message" },
    { title: "Удирдлагын баг", link: "/management" },
  ];

  const activitySub = [
    { title: "Борлуулалт үйлчилгээ", link: "/sales" },
    { title: "Импорт, Экспорт", link: "/import-export" },
    { title: "Санхүү даатгал", link: "/finance" },
    { title: "Барилга, үл хөдлөх", link: "/construction" },
    { title: "Технологи", link: "/technology" },
  ];

  const mainMenus = [
    { title: "Бидний тухай", sub: aboutUsSub },
    { title: "Үйл ажиллагаа", sub: activitySub },
    {
      title: "Тогтвортой хөгжлийн тайлан",
      link: "/sustainable-development-report",
    },
    { title: "Нийлүүлэгч" },
    { title: "Мэдээ, мэдээлэл", link: "/news" },
  ];

  const socialMenus = [
    { url: "/social/facebook.svg", alt: "Facebook" },
    { url: "/social/youtube.svg", alt: "YouTube" },
    { url: "/social/x.svg", alt: "X" },
    { url: "/social/in.svg", alt: "LinkedIn" },
  ];

  const getAnimationDirection = (current: string) => {
    if (!lastMenu) return { initialY: -100 };
    const currentIndex = mainMenus.findIndex((m) => m.title === current);
    const lastIndex = mainMenus.findIndex((m) => m.title === lastMenu);
    if (currentIndex > lastIndex) return { initialY: 100 };
    return { initialY: -100 };
  };

  const hasSubmenu = !!mainMenus.find(
    (menu) => menu.title === openMenu && menu.sub
  );

  return (
    <div className="h-screen w-60 bg-[#1B2350] max-w-xs ml-auto flex flex-col px-6 py-8 lg:w-full lg:max-w-none lg:ml-0 lg:flex-row lg:items-center lg:px-[250px] lg:py-0 relative rounded-tl-2xl rounded-bl-2xl">
      <div className="flex flex-row justify-between md:hidden">
      <Image
        src={i18n.language === "mn" ? "/nav/en.svg" : "/nav/mn.svg"}
        alt="language"
        width={30}
        height={30}
        className="cursor-pointer hover:opacity-80 transition mr-12"
        onClick={toggleLanguage}
      />
      <Image
        src="/nav/mobile/close.svg"
        alt="close menu"
        width={28}
        height={28}
        className="mr-2"   
        onClick={onClose}     
      />
      </div>
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        {mainMenus.map((menu) => (
          <div key={menu.title} className="translate-y-20">
            <div
              onClick={() => {
                if (menu.link) {
                  router.push(menu.link);
                  onClose();
                } else {
                  setLastMenu(openMenu);
                  setOpenMenu(openMenu === menu.title ? null : menu.title);
                }
              }}
              className="
                font-fira-sans font-black text-white cursor-pointer lg:uppercase
                hover:text-[#00BFFF] transition-colors
                text-[16px] lg:text-[40px]
              "
            >
              {menu.title}
            </div>

            <AnimatePresence>
              {menu.sub && openMenu === menu.title && (
                <motion.div
                  key={menu.title + "-mobile-submenu"}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 10 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mt-2 flex flex-col gap-3 lg:hidden"
                >
                  <div className="h-px w-full bg-white mb-2 mr-20" />
                  {menu.sub.map((item) => (
                    <div
                      key={item.title}
                      onClick={() => {
                        router.push(item.link);
                        onClose();
                      }}
                      className="md:font-fira-sans md:text-[16px] text-[14px] md:font-normal font-medium text-white cursor-pointer hover:text-[#00BFFF] transition-colors pl-2 mb-2"
                    >
                      {item.title}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="h-px w-full bg-white mt-[110px] lg:hidden" />
      <div className="font-medium text-[16px] text-white lg:hidden mt-4">
        Online Shop-д зочлох
      </div>
      <div className="font-medium text-[16px] text-white lg:hidden mt-4">
        Нээлттэй ажлын байр
      </div>
      <div className="absolute bottom-[60px]">
        <div className="font-medium text-[16px] text-white lg:hidden mt-4">
          Биднийг дагаарай
        </div>
        <div className="flex flex-row gap-4 mt-4 lg:hidden">
          {socialMenus.map((social) => (
            <div key={social.url}>
              <Image
                src={social.url}
                alt={social.alt}
                width={20}
                height={20}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {hasSubmenu && (
          <motion.div
            key="divider"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 700 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="hidden lg:block w-0.5 bg-white mx-8"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {mainMenus
          .filter((menu) => menu.title === openMenu && menu.sub)
          .map((menu) => {
            const { initialY } = getAnimationDirection(menu.title);
            return (
              <motion.div
                key={menu.title}
                initial={{ x: 200, y: initialY, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: 200, y: initialY, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="hidden lg:flex flex-col gap-6 w-1/2 px-20"
              >
                {menu.sub?.map((item) => (
                  <div
                    key={item.title}
                    onClick={() => {
                      router.push(item.link);
                      onClose();
                    }}
                    className="font-fira-sans text-[32px] font-black text-white cursor-pointer hover:text-[#00BFFF] transition-colors"
                  >
                    {item.title}
                  </div>
                ))}
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
}
