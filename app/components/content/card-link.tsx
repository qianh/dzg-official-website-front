import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { TContent } from "@/app/apis/home";
interface CardLinkProps {
  item: TContent;
  linkLabel?: string;
  href: string;
  needLink?: boolean;
}

const CardLink: React.FC<CardLinkProps> = ({
  item,
  href,
  linkLabel = "客户详情",
  needLink = true,
}: CardLinkProps) => {
  return (
    <div className={`w-[324px] ${needLink ? 'h-[358px]' : 'h-[294px]'} shadow-xl rounded-xl overflow-hidden bg-white`}>
      <div className="w-[324px] h-[220px] relative overflow-hidden">
        <Image
          src={item.imageUrl! || "https://img.js.design/assets/img/66b4907cbed65308b2ddf9fa.png#3f81b04ff856f2bce2264c2bc30cb401"}
          alt="logo"
          fill
        />
      </div>
      <div
        className="pt-6 px-6 pb-6 overflow-ellipsis overflow-hidden whitespace-nowrap"
        title={item.title}
      >
        {item.title}
      </div>
      {needLink && (
        <>
          <div className="h-[1px] w-[100%] bg-gray-200"></div>
          <div>
            <a
              className="flex pl-6 pt-6 items-center space-x-2 hover:cursor-pointer"
              href={href}
              target={"_blank"}
            >
              <span className="text-sm">{linkLabel}</span>
              <ArrowLongRightIcon className="h-4 w-4" />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default CardLink;
