'use client'
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Arrow() {
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolledToBottom(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed bottom-10 right-10 z-50 hidden md:block">
      <button
        onClick={() => {
          if (scrolledToBottom) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            window.scrollTo({ top: 1000, behavior: "smooth" });
          }
        }}
        className="group border border-white rounded-full p-4 cursor-pointer backdrop-blur-sm bg-transparent hover:bg-white transition-colors duration-300 ease-in-out"
      >
        {scrolledToBottom ? (
          <ArrowUpIcon
            size={28}
            className="text-white group-hover:text-black transition-colors duration-300 ease-in-out"
          />
        ) : (
          <ArrowDownIcon
            size={28}
            className="text-white group-hover:text-black transition-colors duration-300 ease-in-out"
          />
        )}
      </button>
    </div>
  );
}
