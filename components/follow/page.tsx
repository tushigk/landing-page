"use client";
import Image from "next/image";

export default function Follow() {
  const mainMenus = [
    { title: "БИДНИЙ СОШИАЛ ХУУДСУУД" },
  ];

  const socialMenus = [
    { url: "/social/facebook.svg", alt: "Facebook" },
    { url: "/social/youtube.svg", alt: "YouTube" },
    { url: "/social/x.svg", alt: "X" },
    { url: "/social/in.svg", alt: "LinkedIn" },
  ];

  return (
    <div className="w-full h-screen bg-[#1B2350] flex items-center justify-center px-[250px] relative z-10">
      <div className="flex flex-col">
        {mainMenus.map((menu) => (
          <div
            key={menu.title}
            className="font-fira-sans text-[40px] font-black text-white"
          >
            {menu.title}
            <div className="flex flex-row mt-16 gap-20 justify-center">
              {socialMenus.map((social) => (
                <div key={social.url}>
                  <Image
                    src={social.url}
                    alt={social.alt}
                    width={80} 
                    height={80}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}