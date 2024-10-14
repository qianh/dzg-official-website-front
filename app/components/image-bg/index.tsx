"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface IImageProps {
  url: string | string[];
  pd: number;
  children?: React.ReactNode;
  alt?: string;
  defaultToggleWith?: number;
}

export default function ImageBg({ defaultToggleWith = 300, ...props }: IImageProps) {
  const [urls, setUrls] = useState<string[]>();
  const [displayIndex, setDisplayIndex] = useState<number>(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (props.url) {
      if (Array.isArray(props.url)) {
        setUrls(props.url);
      } else {
        setUrls([props.url]);
      }
    }
  }, [props.url]);

  useEffect(() => {
    startTimer();
  }, [urls]);

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplayIndex((prevIndex) => (prevIndex + 1) % (urls?.length || 1));
    }, 5000);
  };

  const renderBannerTool = () => {
    const width = defaultToggleWith / (urls?.length || 2);
    return (
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center space-x-4">
        {urls?.map((url, index) => (
          <div
            className={`h-1 hover:cursor-pointer ${
              displayIndex === index ? "bg-white" : "bg-gray-300"
            }`}
            style={{ width }}
            onClick={() => {
              setDisplayIndex(index);
              startTimer();
            }}
            key={index}
          ></div>
        ))}
      </div>
    );
  };

  return (
    urls?.length && (
      <div
        className={`banner-container relative`}
        style={{ paddingBottom: `${props.pd}%` }}
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={() => startTimer()}
      >
        <Image src={urls[displayIndex]} alt={props.alt || "banner"} fill />
        {urls?.length > 1 && renderBannerTool()}
        {props.children ?? null}
      </div>
    )
  );
}
