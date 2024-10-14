"use client";

import { useLayoutContext } from "@components/LayoutContext";
import { TBaseInfo } from "@apis/home";

interface ContractBaseInfoProps {}

const BASE_INFO_TYPE = Object.freeze({
  TEL: "tel",
  ADDRESS: "address",
  HOTLINE: "hotline",
  COOPERATION_EMAIL: "cooperationEmail",
});

const BASE_INFO_SORT = [
  BASE_INFO_TYPE.HOTLINE,
  BASE_INFO_TYPE.COOPERATION_EMAIL,
  BASE_INFO_TYPE.ADDRESS,
];

const ContractBaseInfo: React.FC<ContractBaseInfoProps> = (
  props: ContractBaseInfoProps
) => {
  const baseInfo = useLayoutContext("baseInfo");

  const baseInfoMap: { [key: string]: TBaseInfo } = (
    baseInfo as TBaseInfo[]
  ).reduce((acc: { [key: string]: TBaseInfo }, item) => {
    acc[item.code] = item;
    return acc;
  }, {});

  return (
    <div className="">
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
  );
};

export default ContractBaseInfo;
