import { TContent } from "@/app/apis/home";
import SolutionCount from "@components/content/solution-count";

interface ISolutionFeatures {
  data: TContent[] | undefined;
  name: string;
}

const getGridCols = (len: number = 4) => {
  return `grid-cols-${len}`;
};

const SolutionFeatures: React.FC<ISolutionFeatures> = (
  props: ISolutionFeatures
) => {
  return (
    <div className="flex flex-col space-y-16 pt-12 pb-16 items-center justify-center bg-neutral-100">
      <div className="text-4xl font-black flex flex-col items-center gap-y-2">{props.name.split('。').map((line, index) => <div key={index}>{line}</div>)}</div>
      <div>
        <div
          className={`w-[1360px] grid ${getGridCols(
            props.data?.length
          )} gap-x-10`}
        >
          {props.data?.map((item, index) => (
            <div key={index}>
              <div className="text-2xl flex flex-col items-center text-orange-500">
                {item.title.split("。").map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className={`w-[1360px] grid ${getGridCols(
            props.data?.length
          )} gap-x-10 pt-4`}
        >
          {props.data?.map((item, index) => (
            <div key={index} className="break-words text-wrap">
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionFeatures;
