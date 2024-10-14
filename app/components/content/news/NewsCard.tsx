import { TContent } from "@apis/home";
import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { urlParamEncode } from "@/utils/common";

interface INewsCardProps {
  data: TContent
}

const NewsCard: React.FC<INewsCardProps> = (props: INewsCardProps) => {
  return (
    <div className="flex justify-between">
      <div className="w-[468px]"><Image src={props.data.imageUrl! || "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240914134044/c1008419-97aa-40eb-9b3b-f0ef319db6c8/news1.jpeg"} alt={'news'} width={468} height={220} /></div>
      <div className="flex flex-col flex-1 pl-10 pr-16 py-1 relative h-[100%] justify-center">
        <div className="text-sm font-normal opacity-60 pb-2">{props.data.createTime}</div>
        <div className="text-lg font-bold">{props.data.title}</div>
        <div className="text-sm font-normal opacity-60 pt-2">{props.data.introduction}</div>
        <div className="flex pt-12 items-center space-x-2 text-sm hover:cursor-pointer"><a href={`/news/${urlParamEncode(props.data.id + "")}`} target={"_blank"}>立即查看</a><ArrowLongRightIcon className="h-4 w-4" /></div>
      </div>
    </div>
  );
};

export default NewsCard;
