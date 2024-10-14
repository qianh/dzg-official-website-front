import { TContent } from "@apis/home";
import Image from "next/image";

interface INewsDetailProps {
  data: TContent[] | undefined;
}

const NewsDetail: React.FC<INewsDetailProps> = (props: INewsDetailProps) => {

  if (!props.data) {
    return null;
  }

  return (
    <div className="w-[100vw] flex flex-col items-center pt-[36px] pb-[36px]">
      <div className="w-[780px]">
        <div className="text-4xl font-bold">{props.data[0].title}</div>
        <div className="pt-4 text-xs text-slate-500 flex space-x-4">
          <span>来源：{props.data[0].source}</span>
          <span>时间：{props.data[0].createTime}</span>
        </div>
        <div className="w-[100%] h-[1px] bg-slate-200 mt-[12px]"></div>
        <div className="mt-[24px] news-content" dangerouslySetInnerHTML={{ __html: props.data[0].content || "" }}></div>
      </div>
    </div>
  );
};

export default NewsDetail;
