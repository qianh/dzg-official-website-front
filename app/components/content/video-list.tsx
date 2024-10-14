"use client";
import { useState } from "react";
import {
  ArrowRightCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";
import CardLink from "@/app/components/content/card-link";
import { TContent } from "@/app/apis/home";
import { urlParamEncode } from "@/utils/common";

interface VideoListProps {
  name: string;
  data: TContent[];
}

const DEFAULT_SHOW_COUNT = 4;

const VideoList: React.FC<VideoListProps> = ({
  name,
  data,
}: VideoListProps) => {
  const [showMore, setShowMore] = useState(true);

  const IconComponent = showMore ? ArrowRightCircleIcon : ArrowUpCircleIcon;

  return (
    <div className="">
      <div className="flex justify-between items-center pb-10">
        <div className="text-2xl font-black">{name}</div>
        {data.length > DEFAULT_SHOW_COUNT && (
          <div
            className="flex items-center space-x-1 text-sm hover:cursor-pointer"
            onClick={() => setShowMore(!showMore)}
          >
            <span>{showMore ? "更多" : "收起"}</span>
            <IconComponent className="h-4 w-4 text-slate-500" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-4 gap-10 w-[100%]">
        {data
          .slice(0, showMore ? DEFAULT_SHOW_COUNT : data.length)
          .map((item, index) => (
            <CardLink key={index} item={item} linkLabel="立刻学习" href={`/community/${urlParamEncode(item.id + '')}`} />
          ))}
      </div>
    </div>
  );
};

export default VideoList;
