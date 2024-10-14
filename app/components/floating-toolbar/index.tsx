"use client";
import Image from "next/image";
import CustomerService from "../icon/customer-service";
import Phone from "../icon/phone";
import WeChat from "../icon/wechat";
import ArrowTip from "../icon/arrow-top";
import Tooltip from "../tooltip";
import { useLayoutContext } from "@components/LayoutContext";
import { getBaseInfoByCode } from "@/utils/common";

interface IFloatingToolbarProps {}

const ICON_CSS =
  "flex items-center justify-center h-[58px] w-[100%] hover:cursor-pointer";

export default function FloatingToolbar(props: IFloatingToolbarProps) {
  const baseInfo = useLayoutContext("baseInfo");

  const renderDzgWeChatQr = () => {
    return (
      <Image
        src={getBaseInfoByCode(baseInfo, "dzgWeChatQr")?.value || ""}
        alt="dzgWeChatQr"
        width={180}
        height={180}
      />
    );
  };

  return (
    <div className="fixed bottom-24 right-12 w-[58px] bg-black rounded-lg">
      <div
        className={ICON_CSS}
        onClick={() =>
          window.open(
            "https://gm1.sobot.com/chat/pc/v6/index.html?sysnum=566817082dc0443a834d8308e574338e&channelid=14"
          )
        }
      >
        <CustomerService />
      </div>
      <div className={ICON_CSS + "relative"}>
        <Tooltip text="400-882-8871">
          <Phone />
        </Tooltip>
      </div>
      <div className={ICON_CSS}>
        <Tooltip text={renderDzgWeChatQr()}>
          <WeChat />
        </Tooltip>
      </div>
      <div
        className={ICON_CSS}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowTip />
      </div>
    </div>
  );
}
