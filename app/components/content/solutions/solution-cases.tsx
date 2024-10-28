import { TContent } from "@/app/apis/home";
import ImageBg from "@components/image-bg";

interface ISolutionCasesProps {
  name: string;
  data: TContent[] | undefined;
}

const SolutionCases: React.FC<ISolutionCasesProps> = (
  props: ISolutionCasesProps
) => {
  return (
    <div className="flex flex-col items-center justify-center solution-case pt-24 pb-24">
      {props.name && <div className="text-5xl font-black pb-16 flex flex-col items-center gap-y-4">{props.name.split('。').map((line, index) => <div key={index}>{line}</div>)}</div>}
      <div className="flex w-[1360px] flex-col space-y-40">
        {props?.data?.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            } justify-between`}
          >
            <div className="w-[608px]">
              <div className="bg-orange-500 w-10 h-2"></div>
              <div className="text-3xl font-black pt-20">{item.title}</div>
              <div className="pt-10" dangerouslySetInnerHTML={{ __html: item.content || "" }}></div>
            </div>
            <div className="w-[680px] flex items-center">
              <ImageBg url={item.imageUrl?.split(',') || ''} alt="logo" pd={56.02} defaultToggleWith={100}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionCases;
