"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MenuPage from "../menu/page";

export default function ButtonGroup() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="relative z-50">
        <div className="flex items-center gap-4 bg-transparent p-4 relative">
          <button
            onClick={toggleMenu}
            className="flex items-center gap-2 border border-white text-white rounded-full px-5 py-3 text-[16px] backdrop-blur-sm hover:bg-white/10 transition cursor-pointer"
          >
            <span className="text-[16px] font-semibold">Цэс</span>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <button className="flex items-center gap-2 border border-white text-white rounded-full px-6 py-3 text-[16px] hover:bg-white/10 transition cursor-pointer">
            <span className="text-[16px] font-semibold">Нээлттэй ажлын байр</span>
            <ArrowUpRight size={28} className="bg-white text-black rounded-full p-0.5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-[#1B2350] z-40"
          >
            <MenuPage onClose={handleCloseMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
