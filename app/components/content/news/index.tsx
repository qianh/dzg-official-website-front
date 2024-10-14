"use client";

import { useState, useEffect } from "react";
import { TContent, TTagData } from "@apis/home";
import NewsCard from "./NewsCard";

interface INewsProps {
  data: TTagData[];
}

const DEFAULT_SHOW_COUNT = 5;

const News: React.FC<INewsProps> = (props: INewsProps) => {
  const [activeCode, setActiveCode] = useState<string>();
  const [newsList, setNewsList] = useState<TTagData[]>([]);
  const [showList, setShowList] = useState<TContent[]>([]);
  const [displayCaseIndex, setDisplayCaseIndex] = useState<number>(DEFAULT_SHOW_COUNT);

  useEffect(() => {
    reFreshData()
  }, [props.data]);

  const reFreshData = () => {
    const news = props.data;
    let allList: TContent[] = [];
    props.data.forEach((item) => {
      allList = allList.concat(item.list || []);
    });
    news.unshift({
      name: "全部",
      code: "all",
      list: allList,
    });
    setNewsList(news);
    setActiveCode("all");
  };

  useEffect(() => {
    const currentNewsList = newsList.filter((item) => item.code === activeCode)[0]?.list || [];
    setDisplayCaseIndex(DEFAULT_SHOW_COUNT);
    setShowList(currentNewsList);
  }, [activeCode]);

  const handleDisplayCaseIndex = () => {
    const step =
      displayCaseIndex + DEFAULT_SHOW_COUNT < showList.length
        ? DEFAULT_SHOW_COUNT
        : showList.length;
    setDisplayCaseIndex(displayCaseIndex + step);
  };

  return (
    <div className="container flex py-24">
      <div className="w-[1072px] flex flex-col items-center">
        <div className="flex flex-col space-y-16 border-r">
          {showList.slice(0, displayCaseIndex).map((item, index) => (
            <NewsCard key={index} data={item} />
          ))}
        </div>
        {(showList?.length || 0) > displayCaseIndex && <div
          className="bg-black text-white font-bold pl-12 pr-12 pt-2 pb-2 rounded-full mt-16 hover:cursor-pointer"
          onClick={() => handleDisplayCaseIndex()}
        >
          加载更多
        </div>}
      </div>
      <div className="flex flex-col flex-1 space-y-6 pl-10">
        {newsList.map((item, index) => (
          <div
            key={index}
            className={`${
              activeCode === item.code ? "text-orange-500" : ""
            } hover:cursor-pointer`}
            onClick={() => setActiveCode(item.code)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
