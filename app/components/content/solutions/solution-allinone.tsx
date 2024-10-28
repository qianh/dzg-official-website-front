"use client";
import { useState, useEffect } from "react";
import ImageBg from "@components/image-bg";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { getAllInOneSolutionData } from "@apis/solution";
import { ItemType } from "@apis/solution/data";
import { urlParamEncode } from "@/utils/common";

interface ISolutionAllInOneProps {}


export const MoreSolutionCard = (card: ItemType) => {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <ImageBg
          url={card.imageUrl || ""}
          pd={47}
        />
      </div>
      <div className="text-lg font-bold">{card.label}</div>
      <div className="h-[48px]">{card.introduction}</div>
      <div className="text-blue-500">
        <a
          href={`/solutions/allinone/${urlParamEncode(card.code + '')}`}
          className="flex items-center space-x-2"
          target="_blank"
        >
          <span>更多信息</span> <ArrowLongRightIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export const AdvantageCard = (card: ItemType) => {
  return (
    <div className="flex flex-col space-y-4">
      <div></div>
      <div className="text-lg font-bold">{card.label}</div>
      <div>{card.introduction}</div>
    </div>
  );
};

export const TopBanner = (item: ItemType) => {
  return (
    <div className="container h-[326px] bg-[#f5f5f5] relative shadow-lg">
      <div className="pt-24 w-[524px]">
        <div className="text-4xl font-bold pb-8">
          {item?.label}
        </div>
        <div className="text-lg">
          {item?.introduction}
        </div>
      </div>
      <div className="absolute top-24 right-6 w-[625px] rounded-lg overflow-hidden shadow-md">
        <ImageBg
          url={item?.imageUrl || ""}
          pd={56}
        />
      </div>
    </div>
  );
};

const SolutionAllInOne: React.FC<ISolutionAllInOneProps> = (
  props: ISolutionAllInOneProps
) => {

  const [data, setData] = useState<any>({});

  useEffect(() => {
    getAllInOneSolutionData("").then((res) => {
      setData(res);
    });
    window?.addEventListener("scroll", () => {
      handleLinksBarCls();
    });
    return () => {
      window?.removeEventListener("scroll", () => {
        handleLinksBarCls();
      });
    }
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

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="w-full h-[448px]">
        {TopBanner(data?.topBanner)}
      </div>
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
        <div id="more" className="bg-[#f5f5f5]">
          <div className="container py-12">
            <div className="text-3xl font-bold pb-12">
              详细了解  GM1-国际物流数智化集成平台
            </div>
            <div className="grid grid-cols-2 gap-10">
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

export default SolutionAllInOne;
