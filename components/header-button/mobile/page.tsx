"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuPage from "@/components/menu/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MobileHeaderButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const updateScrollLock = () => {
      if (typeof window === "undefined") return;

      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop && isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    updateScrollLock();
    window.addEventListener("resize", updateScrollLock);

    return () => {
      window.removeEventListener("resize", updateScrollLock);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 w-full z-50 md:hidden transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        } z-40 `}
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between gap-4 p-4">
          <Image
            src={isScrolled ? "/nav/mobile/logo2.svg" : "/nav/mobile/logo.svg"}
            alt="logo"
            width={143}
            height={28}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
          <button
            onClick={toggleMenu}
            className={`flex items-center px-5 py-3 text-[16px] cursor-pointer
              ${isScrolled ? "" : ""}`}
          >
              <Image
                src={
                  isScrolled ? "/nav/mobile/menu2.svg" : "/nav/mobile/menu.svg"
                }
                alt="menu icon"
                width={28}
                height={28}
              />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-screen bg-black/40 z-50" 
            onClick={handleCloseMenu} 
          >
            <div
              className="ml-auto h-full"
              onClick={(e) => e.stopPropagation()} 
            >
              <MenuPage onClose={handleCloseMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
