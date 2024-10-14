"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import { TMenu } from "@apis/home";

interface IMenusProps {
  data: TMenu[]
}

const Menus = (props: IMenusProps ) => {
  const [activeMenu, setActiveMenu] = useState("/");
  const [hoverMenu, setHoverMenu] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActiveMenu(pathname);
  }, []);

  const checkActive = (href: string) => {
    if (href === "/") {
      return activeMenu === href;
    }
    return activeMenu.startsWith(href);
  };

  const handleMouseEnter = (menu: TMenu) => {
    setHoverMenu(menu.href);
  };

  return (
    <div className="flex space-x-8 ml-10 text-sm text-black">
      {props.data?.map((item) => (
        <div key={item.title} className="relative" onMouseEnter={() => handleMouseEnter(item)}>
          {item.children ? (
            <Dropdown item={item} activeItem={activeMenu} checkActive={checkActive} hoverMenu={hoverMenu} />
          ) : (
            <a
              className={`hover:text-blue-600 ${
                checkActive(item.href) ? "text-black font-bold" : "opacity-60"
              }`}
              href={item.href}
            >
              {item.title}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menus;
