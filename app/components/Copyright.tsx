"use client";

import { useLayoutContext } from "@components/LayoutContext";
import { TBaseInfo } from "@apis/home";

interface CopyrightProps {}

const Copyright: React.FC<CopyrightProps> = (props: CopyrightProps) => {
  const baseInfo = useLayoutContext("baseInfo");

  const copyright = baseInfo.find(
    (item: TBaseInfo) => item.code === "copyright"
  );

  return (
    <div className="flex justify-center text-white opacity-30 text-sm absolute bottom-6 w-full">
      {copyright.value}
    </div>
  );
};

export default Copyright;
