import { useState, useEffect } from "react";
import Image from "next/image";
import { TMenu } from "@apis/home";

interface IMenuForSelectProps {
  item: TMenu;
  checkActive: (href: string) => boolean;
  hoverMenu: string;
  activeItem: string;
}

const MenuForSelect = (props: IMenuForSelectProps) => {
  const [showSelect, setShowSelect] = useState(false);

  const { item, checkActive } = props;

  useEffect(() => {
    setShowSelect(props.hoverMenu === item.href);
  }, [props.hoverMenu]);

  const handleMouseEnter = () => {
    if (props.hoverMenu === item.href && !showSelect) {
      setShowSelect(true)
    }
  }

  return (
    <>
      <a
        className={`hover:text-blue-600 flex items-center ${
          checkActive(item.href) ? "text-black font-bold" : "opacity-60"
        }`}
        href={item.href}
        onMouseEnter={() => handleMouseEnter()}
      >
        {item.title}
        <Image
          className="pl-1"
          src={"/home/down.png"}
          alt="phone"
          width={16}
          height={16}
        />
      </a>
      {showSelect && (
        <div
          className={`absolute top-10 left-1/2 translate-x-[-50%] z-10 rounded-lg bg-white w-max shadow-md border px-1 pt-2 pb-2 min-w-[100px]`}
          onMouseLeave={() => setShowSelect(false)}
        >
          {item.children?.map((option) => (
            <div
              key={option.title}
              className={`flex items-center px-2 h-12 hover:bg-slate-100 rounded-lg ${props.activeItem === option.href ? "bg-sky-100" : ""}`}
            >
              <a
                href={option.href}
                className="text-base opacity-60 font-normal"
              >
                {option.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MenuForSelect;
