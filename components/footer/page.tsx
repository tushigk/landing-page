import React from 'react';

export default function Footer() {
  return (
    <footer className="max-w-full w-full bg-white py-6 px-8 md:flex flex-col md:flex-row items-center justify-between gap-4 relative hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-[#293B8D] to-[#9BBEF5]"></div>
      <div className="max-w-[1160px] w-full mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-[16px] font-fira-sans">
          © {new Date().getFullYear()} БИШРЭЛТ ГРҮПП
        </div>
        <div className="flex gap-4">
          <img src="/footer/facebook.svg" alt="facebook" className="w-10 h-10" />
          <img src="/footer/youtube.svg" alt="instagram" className="w-10 h-10" />
          <img src="/footer/in.svg" alt="linkedin" className="w-10 h-10" />
          <img src="/footer/x.svg" alt="twitter" className="w-10 h-10" />
        </div>
      </div>
    </footer>
  );
}