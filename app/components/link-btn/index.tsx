"use client";

import { ReactNode, useEffect, useState } from "react";
import { TContent } from "@apis/home";

interface ILinkBtnProps extends TContent {
  paddingBottom: number;
  className?: string;
  newTag?: boolean;
  icon?: ReactNode;
}

export default function LinkBtn({
  url = "/about/free-trial",
  ...props
}: ILinkBtnProps) {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const calculateBottom = (): number => {
    return (windowWidth / 1920) * props.paddingBottom;
  };

  const calculateLeft = (): number => {
    return (windowWidth / 1920) * 680;
  };

  return (
    windowWidth !== 0 && (
      <div
        className={`flex justify-center absolute z-10 left-1/2`}
        style={{
          bottom: `${calculateBottom()}px`,
          marginLeft: `-${calculateLeft()}px`,
        }}
      >
        <div
          className={`flex items-center justify-center pl-10 pr-10 h-12 rounded-full font-bold hover:cursor-pointer ${
            props.className || "bg-orange-500 text-white"
          }`}
        >
          {props.icon && <span className="pr-2">{props.icon}</span>}
          <a href={url} target={`${props.newTag ? "_blank" : ""}`}>
            {props.title}
          </a>
        </div>
      </div>
    )
  );
}
