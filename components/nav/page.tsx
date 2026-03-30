"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Follow from "../follow/page";
import { useRouter } from "next/navigation";

export default function Nav() {
  const { t, i18n } = useTranslation("translation");
  const [isFollow, setIsFollow] = useState(false);
  const [soundLevel, setSoundLevel] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const router = useRouter();

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleFollow = () => setIsFollow((prev) => !prev);

  const toggleLanguage = () => {
    const newLang = i18n.language === "mn" ? "en" : "mn";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    if (isFollow) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFollow]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isMuted) {
      interval = setInterval(() => {
        setSoundLevel((prev) => (prev >= 4 ? 1 : prev + 1));
      }, 500);
    } else {
      setSoundLevel(5);
    }
    return () => clearInterval(interval);
  }, [isMuted]);

  useEffect(() => {
    const video = document.querySelector("video");
    if (!video) return;
    videoRef.current = video;

    const updateMuteState = () => setIsMuted(video.muted);
    video.addEventListener("volumechange", updateMuteState);

    setIsMuted(video.muted);

    return () => video.removeEventListener("volumechange", updateMuteState);
  }, []);

  return (
    <>
      <div className="absolute left-0 top-0 h-screen flex justify-center items-center bg-transparent z-[100]">
        <div className="w-[152px] h-screen border-r border-white flex flex-col justify-between py-10 relative">
          <button onClick={() => router.push("/")} className="cursor-pointer">
            <Image
              src="/nav/Brandmark.png"
              alt="Logo"
              width={60}
              height={60}
              className="mx-auto mb-6"
            />
          </button>

          <button
            className="-rotate-90 text-white tracking-widest font-semibold text-[20px] flex items-center justify-center whitespace-nowrap cursor-pointer"
            onClick={toggleFollow}
          >
            {t("follow_us")}
          </button>

          <div className="flex flex-col items-center gap-6">
            <Image
              src={i18n.language === "mn" ? "/nav/en.svg" : "/nav/mn.svg"}
              alt="language"
              width={64}
              height={64}
              className="cursor-pointer hover:opacity-80 transition border-2 border-white rounded-full p-3"
              onClick={toggleLanguage}
            />
            <Image src="/nav/message.svg" alt="message" width={64} height={64} className="cursor-pointer hover:opacity-80 transition border-2 border-white rounded-full p-3" />

            <Image
              src={isMuted ? "/nav/mutesound.svg" : "/nav/sound.svg"} 
              alt={isMuted ? "muted" : "sound"}                         
              width={64}
              height={64}
              className="cursor-pointer hover:opacity-80 transition border-2 border-white rounded-full p-3"
              onClick={() => {
                const video = videoRef.current;
                if (video) {
                  video.muted = !video.muted;
                  setIsMuted(video.muted);
                } else {
                  setIsMuted((prev) => !prev);
                }
              }}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isFollow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-[#1B2350] z-40"
          >
            <Follow />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
