import { TContent } from "@/app/apis/home";
import Image from "next/image";

interface IPainPointsProps {
  name: string;
  data: TContent[] | undefined;
}

const PainPoints: React.FC<IPainPointsProps> = (props: IPainPointsProps) => {

  const getCardWidth = () => {
    const length = props?.data?.length || 1;
    const width = (1360 - (length - 1) * 40) / length;
    return width;
  };

  return (
    <div className="flex flex-col space-y-16 pt-24 pb-12 items-center bg-neutral-100">
      <div className="text-5xl font-black">{props.name}</div>
      <div className="flex w-[1360px] justify-between">
        {props?.data?.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-white pt-16 pb-8 pl-6 pr-6 rounded-xl relative`}
            style={{ width: getCardWidth() }}
          >
            <div>
              <Image src={item.url || ""} alt="logo" width={68} height={68} />
            </div>
            <div className="text-2xl font-bold pt-8 pb-6 h-[120px] flex flex-col items-center">
              {item.title.split("。").map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </div>
            <div className="text-base font-normal">
              {item.introduction?.split("\n").map((line, index) => (
                <div>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainPoints;
