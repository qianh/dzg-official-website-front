import React from "react";
import { TContent } from "@/app/apis/home";
import CardLink from "@/app/components/content/card-link";
import { urlParamEncode } from "@/utils/common";

interface CaseDetailProps {
  data: TContent[];
  name: string;
  needBorderTopLine?: boolean;
}

const DEFAULT_SHOW_COUNT = 4;

const MoreCase: React.FC<CaseDetailProps> = ({ data, name }) => {
  return (
    <div className="more-case">
      <div className="container pb-24">
        {data?.length && (
          <div className={`flex flex-col items-center`}>
            <div className="pt-24 text-5xl font-black">{name}</div>
            <div className="flex pt-10 w-[100%] space-x-[20px]">
              {data?.slice(0, DEFAULT_SHOW_COUNT).map((item, index) => (
                <CardLink key={index} item={item} href={item.tag === 'solution' ? item.url! : `/cases/${item.module}/${urlParamEncode(item.id + '')}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreCase;
