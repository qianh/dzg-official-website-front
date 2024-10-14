"use client";

import { useLayoutContext } from "./LayoutContext";
import Image from "next/image";
import { TBaseInfo } from "@apis/home";

const BASE_INFO_TYPE = Object.freeze({
  TEL: "tel",
  ADDRESS: "address",
  HOTLINE: "hotline",
  COOPERATION_EMAIL: "cooperationEmail",
  WE_CHAT_QR: "wechatQr",
});

const BASE_INFO_SORT = [
  BASE_INFO_TYPE.HOTLINE,
  BASE_INFO_TYPE.COOPERATION_EMAIL,
  BASE_INFO_TYPE.ADDRESS,
];

interface ITechSupportProps {
  name: string;
}

const TechSupport: React.FC<ITechSupportProps> = (props: ITechSupportProps) => {
  const baseInfo = useLayoutContext("baseInfo");

  const baseInfoMap: { [key: string]: TBaseInfo } = (baseInfo as TBaseInfo[]).reduce(
    (acc: { [key: string]: TBaseInfo }, item) => {
      acc[item.code] = item;
      return acc;
    },
    {}
  );

  return (
    <div className="flex flex-col items-center justify-center py-24 bg-[#F3F4FF]">
      <div className="text-5xl font-black">{props.name}</div>
      <div className="container pt-6 flex justify-between">
        <div>
          <div>
            <div className="text-lg font-bold pb-2">
              {baseInfoMap[BASE_INFO_TYPE.TEL]?.name}
            </div>
            <div className="text-sm font-bold opacity-60">
              {baseInfoMap[BASE_INFO_TYPE.TEL]?.value}
            </div>
          </div>
          <div className="pt-6">
            <div className="text-lg font-bold pb-2">全国客服中心</div>
            {BASE_INFO_SORT.map((code) => (
              <div key={code} className="text-sm font-bold opacity-60 pb-2">
                <span>{baseInfoMap[code]?.name}：</span>
                <span>{baseInfoMap[code]?.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div>{baseInfoMap[BASE_INFO_TYPE.WE_CHAT_QR]?.name}</div>
          <Image
            src={baseInfoMap[BASE_INFO_TYPE.WE_CHAT_QR]?.value}
            alt="logo"
            width={168}
            height={168}
          />
        </div>
      </div>
    </div>
  );
};

export default TechSupport;
