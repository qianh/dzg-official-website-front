"use client";
import React, { useState, useEffect } from "react";
import ImageBg from "@components/image-bg";
import {
  AdvantageCard,
  MoreSolutionCard,
  TopBanner,
} from "@components/content/solutions/solution-allinone";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { ItemType } from "@apis/solution/data";
import { getAllInOneSolutionDetail } from "@apis/solution";
import { urlParamDecode, parseUrlParams } from "@/utils/common";
import Player from "@components/Player";


const SolutionAllInOneDetail: React.FC<any> = ({ params }: any) => {
  const [activeId, setActiveId] = useState(0);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    getAllInOneSolutionDetail(urlParamDecode(params.detail)).then((res) => {
      setData(res);
    });
    window?.addEventListener("scroll", () => {
      handleLinksBarCls();
    });
    return () => {
      window?.removeEventListener("scroll", () => {
        handleLinksBarCls();
      });
    };
  }, []);
  const jumpTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window?.scrollTo({ top: element.offsetTop - 120, behavior: "smooth" });
    }
  };

  const handleLinksBarCls = () => {
    const linksBar = document.getElementById("links-bar");
    if (window?.scrollY > 364) {
      linksBar?.classList.add("fixed", "top-16", "sticky");
    } else {
      linksBar?.classList.remove("fixed", "top-16", "sticky");
    }
  };

  const renderImageOrVideo = () => {
    if (data?.featureList) {
      const { videoUrl, imageUrl, ...more } = data?.featureList[activeId];
      if (videoUrl) {
        const urlParams = parseUrlParams(videoUrl || "");
        const warp = `dzg-player-${activeId}`;
        console.log(warp);
        return <div key={activeId} className={`${warp} overflow-hidden w-[660px] h-[368px]`}><Player vid={urlParams.get('vid')} wrap={`.${warp}`} /></div>
      }
      return <ImageBg url={imageUrl!} pd={56.2} />;
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="w-full h-[448px]">{TopBanner(data?.topBanner)}</div>
      <div id="links-bar" className="w-full bg-white z-10">
        <div className="container flex space-x-10 h-24 pt-12 font-bold ">
          <div
            className="hover:text-cyan-500 cursor-pointer"
            onClick={() => jumpTo("advantage")}
          >
            优势
          </div>
          <div
            className="hover:text-cyan-500 cursor-pointer"
            onClick={() => jumpTo("feature")}
          >
            功能
          </div>
          <div
            className="hover:text-cyan-500 cursor-pointer"
            onClick={() => jumpTo("more")}
          >
            更多
          </div>
        </div>
        <div className="h-[2px] w-full bg-gray-200"></div>
      </div>
      <div className="main-content w-full">
        <div id="advantage">
          <div className="container py-12 grid grid-cols-3 gap-10">
            {data?.advantageCardList?.map((card: ItemType) => (
              <AdvantageCard key={card.label} {...card} />
            ))}
          </div>
        </div>
        <div id="feature" className="bg-[#f5f5f5]">
          <div className="container py-12 grid grid-cols-2 gap-10">
            <div>
              {renderImageOrVideo()}
            </div>
            <div className="pl-10">
              <div className="text-3xl font-bold pb-6 border-b border-gray-700">
                功能
              </div>
              <div className="space-y-1">
                {data?.featureList?.map((item: ItemType, index: number) => (
                  <div key={index} className="border-b border-gray-700 py-2">
                    <div
                      className="flex items-center justify-between text-xl font-bold pb-2 hover:cursor-pointer"
                      onClick={() => setActiveId(index)}
                    >
                      <span>{item.label}</span>
                      {activeId === index ? (
                        <ArrowUpIcon className="h-4 w-4" />
                      ) : (
                        <ArrowDownIcon className="h-4 w-4" />
                      )}
                    </div>
                    {activeId === index && <div>{item.introduction}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="more">
          <div className="container py-12">
            <div className="text-3xl font-bold pb-12">
              详细了解 GM1-国际物流数智化集成平台
            </div>
            <div className="grid grid-cols-3 gap-10">
              {data?.solutionCardList?.map((card: ItemType) => (
                <MoreSolutionCard key={card.code} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionAllInOneDetail;
