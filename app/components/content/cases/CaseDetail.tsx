import Image from "next/image";
import React from "react";
import { TContent } from "@/app/apis/home";
import MoreCase from "./MoreCase";

interface CaseDetailProps {
  name: string;
  data: TContent[];
}

const CaseDetail: React.FC<CaseDetailProps> = ({ data, name }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <div className="w-[1000px] flex flex-col pt-24">
        <div className="text-3xl font-black">{data[0].title}</div>
        <div className="pt-4 case-content" dangerouslySetInnerHTML={{ __html: data[0].content || "" }}></div>
        <div className="h-[1px] w-[100%] bg-slate-200 mt-[60px]"></div>
      </div>
    </div>
  );
};

export default CaseDetail;
