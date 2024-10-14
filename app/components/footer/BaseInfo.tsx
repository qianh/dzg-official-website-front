"use client";
import Image from "next/image";
import { useLayoutContext } from "@components/LayoutContext";
import { TBaseInfo } from "@apis/home";

interface FooterBaseInfoProps {}

const BASE_INFO_TYPE = Object.freeze({
  TEL: "tel",
  ADDRESS: "address",
  COOPERATION_EMAIL: "cooperationEmail",
});

const BASE_INFO_SORT = [
  BASE_INFO_TYPE.TEL,
  BASE_INFO_TYPE.ADDRESS,
  BASE_INFO_TYPE.COOPERATION_EMAIL,
];

const FooterBaseInfo: React.FC<FooterBaseInfoProps> = (
  props: FooterBaseInfoProps
) => {
  const baseInfo = useLayoutContext("baseInfo");

  const baseInfoMap: { [key: string]: TBaseInfo } = (
    baseInfo as TBaseInfo[]
  ).reduce((acc: { [key: string]: TBaseInfo }, item) => {
    acc[item.code] = item;
    return acc;
  }, {});

  return (
    <div className="flex flex-col space-y-2 text-sm pt-4 font-normal opacity-80">
      {BASE_INFO_SORT.map((code) => (
        <div key={code}>
          <span>{baseInfoMap[code]?.name}：</span>
          <span>{baseInfoMap[code]?.value}</span>
        </div>
      ))}
      <div className="pt-9">
        <Image
          src={
            baseInfo.find((item: TBaseInfo) => item.code === "weChatQr")
              ?.value || ""
          }
          alt="weChatQr"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
};

export default FooterBaseInfo;
