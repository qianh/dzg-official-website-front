'use client';

import { useState, useEffect } from "react";
import { TContent } from "@/app/apis/home";
import Image from "next/image";
import {
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';

interface ISolutionsProps {
  data: TContent[] | undefined;
}

export default function Solutions(props: ISolutionsProps) {
  const [solutions, setSolutions] = useState<TContent[]>(props.data || []);

  useEffect(() => {
    setSolutions(props.data || []);
  }, [props.data]);

  const renderImg = (item: TContent) => {
    return (
      <div className="w-[820px]">
        <Image src={item.url!} width={820} height={660} alt={item.title} />
      </div>
    );
  };

  const renderContent = (item: TContent) => {
    return (
      <div className="w-[540px] bg-white relative">
        <div className="pt-24 ml-24 text-sky-400">{item.tag}</div>
        <div className="pt-4 ml-24 text-3xl font-black">{item.title}</div>
        <div className="pt-16 ml-24 w-96">{item.introduction}</div>
        <div className="absolute flex items-center bottom-24 ml-24 pl-6 pr-6 text-lg font-medium h-12 border border-black rounded-full hover:cursor-pointer space-x-2">
          <span>获取同款解决方案</span>
          <ArrowLongRightIcon className="h-4 w-4"/>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center flex-col justify-center solution-bg space-y-16 pt-24 pb-24">
      <div className="text-5xl font-black">解决方案</div>
      {solutions.map((solution: TContent, index: number) => {
        return (
          <div
            key={index}
            className={`flex w-[1360px] z-10 border-radius-20 overflow-hidden border-2 border-slate-100 ${
              index % 2 === 1 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {renderContent(solution)}
            {renderImg(solution)}
          </div>
        );
      })}
    </div>
  );
}
