"use client";

import { useState, useEffect, useMemo } from "react";
import { TCases, TCaseType, TContent } from "@/app/apis/home";
import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import DynamicIconRender from "@/app/components/dynamic-render/Icon";
import { urlParamEncode } from "@/utils/common";

interface ICasesProps {
  data: TCases | undefined;
  defaultCode?: TCaseType;
  page?: string;
  name?: string;
}

const DEFAULT_SHOW_COUNT = 4;

export default function Cases({
  defaultCode = "supply",
  ...props
}: ICasesProps) {
  const [showList, setShowList] = useState<TContent[]>([]);
  const [displayCaseIndex, setDisplayCaseIndex] = useState<number>(0);
  const [activeCode, setActiveCode] = useState<string>(defaultCode);

  useEffect(() => {
    handleDisplayCaseIndex(displayCaseIndex);
  }, [props.data]);

  useEffect(() => {
    handleDisplayCaseIndex();
  }, [activeCode]);

  const handleDisplayCaseIndex = (displayCaseIndex = 0) => {
    const caseTagInfo = props.data?.filter((item) => item.code === activeCode);
    const caseList = caseTagInfo?.[0].list || [];
    if (props.page !== "cases") {
      setDisplayCaseIndex(1);
    } else {
      const step =
        displayCaseIndex + DEFAULT_SHOW_COUNT < caseList.length
          ? DEFAULT_SHOW_COUNT
          : caseList.length;
      setDisplayCaseIndex(displayCaseIndex + step);
    }
    setShowList(caseList);
  };

  return (
    <div className="flex items-center justify-center flex-col pt-24 pb-24">
      {props.name && <div className="pb-12 text-5xl font-black">{props.name}</div>}
      <div className="flex items-center space-x-8 justify-center w-[1360px]">
        {props.data?.map((item, index) => {
          const opacity = activeCode === item.code ? 1 : 0.3;
          const fill = activeCode === item.code ? "#ffffff" : "#000000";
          return (
            <div
              className={`${
                activeCode === item.code ? "bg-black " : ""
              } h-12 flex items-center space-x-2 justify-center pl-8 pr-8 rounded-full`}
              onClick={() => setActiveCode(item.code)}
              key={index}
            >
              <div className="w-[18px] h-[18px]">
                <DynamicIconRender
                  code={item.code}
                  width={18}
                  height={18}
                  opacity={opacity}
                  fill={fill}
                />
              </div>
              <div
                className={`${
                  activeCode === item.code ? "text-white" : "opacity-30"
                }  cursor-pointer font-black text-lg w-max`}
              >
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col space-y-10 pt-12">
        {showList?.slice(0, displayCaseIndex)?.map((item, index) => (
          <div
            key={index}
            className="w-[1360px] h-[468px] border rounded-3xl shadow-xl relative"
          >
            <div className="pt-16 ml-16 text-lg font-black text-sky-400">
              {item.tag}
            </div>
            <div className="pt-6 ml-16 text-3xl font-black w-[480px]">
              {item.title}
            </div>
            <div className="pt-6 ml-16 w-[480px]">{item.introduction}</div>
            <a
              className="absolute bottom-16 ml-16 flex items-center space-x-2 hover:cursor-pointer"
              href={`/cases/${item.module}/${urlParamEncode(item.id + '')}`}
              target={"_blank"}
            >
              <span>客户详情</span>
              <ArrowLongRightIcon className="h-4 w-4" />
            </a>
            <div className="absolute top-36 right-24">
              <Image
                src={item.imageUrl || "/home/case-demo.png"}
                alt="logo"
                width={492}
                height={188}
              />
            </div>
          </div>
        ))}
      </div>
      {props.page === "cases" && (showList?.length || 0) > displayCaseIndex && (
        <div
          className="bg-black text-white font-bold pl-12 pr-12 pt-2 pb-2 rounded-full mt-16 hover:cursor-pointer"
          onClick={() => handleDisplayCaseIndex(displayCaseIndex)}
        >
          加载更多
        </div>
      )}
    </div>
  );
}
