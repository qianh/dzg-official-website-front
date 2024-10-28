import { TContent } from "@/app/apis/home";
import SolutionCount from "@/app/components/content/solutions/solution-count";

interface ISolutionFeatures {
  data: TContent[] | undefined;
  name: string;
}

const SolutionFeatures: React.FC<ISolutionFeatures> = (
  props: ISolutionFeatures
) => {

  const gridClassName = `w-[1360px] grid gap-x-10`;

  const gridColumnsStyle = (length = 4) => {
    return {
      gridTemplateColumns: `repeat(${length}, minmax(0, 1fr))`
    }
  }

  return (
    <div className="flex flex-col space-y-16 pt-12 pb-16 items-center justify-center bg-neutral-100">
      <div className="text-4xl font-black flex flex-col items-center gap-y-2">{props.name.split('。').map((line, index) => <div key={index}>{line}</div>)}</div>
      <div>
        <div
          className={gridClassName}
          style={{...gridColumnsStyle(props.data?.length)}}
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
          className={`${gridClassName} pt-4`}
          style={{...gridColumnsStyle(props.data?.length)}}
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
