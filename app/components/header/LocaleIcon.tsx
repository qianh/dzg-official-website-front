"use client";

import { useState } from "react";
import Image from "next/image";

const LocaleData = [
  { name: "简体中文", code: "cn" },
  { name: "English", code: "en" },
];

const LocaleIcon = () => {
  const [showLocale, setShowLocale] = useState(false);

  const handleMouseEnter = () => {
    setShowLocale(true);
  };

  const handleMouseLeave = () => {
    setShowLocale(false);
  };

  return (
    <div className={`cursor-pointer relative`} onMouseEnter={handleMouseEnter}>
      <Image src={"/home/locale.png"} alt="phone" width={16} height={16} />
      {showLocale && (
        <div
          className={`absolute bg-white text-base z-10 top-10 w-36 rounded-lg pl-1 pr-1 -ml-6 shadow-md border`}
          onMouseLeave={handleMouseLeave}
        >
          {LocaleData.map((item) => (
            <div
              key={item.code}
              className="flex items-center text-black opacity-60 h-12 pl-5 pr-5 font-normal hover:bg-slate-100"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocaleIcon;
