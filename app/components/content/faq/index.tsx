import { TContent, TTagData } from "@apis/home";
import DividingLine from "@components/dividing-line";

interface ITechSupportProps {
  name: string;
  data: TTagData[];
}

const TechSupport: React.FC<ITechSupportProps> = (props: ITechSupportProps) => {
  const getListDataByCode = (code: string) => {
    return props.data?.filter((item) => item.code === code);
  };

  const renderQa = (content: TTagData) => {
    return (
      <>
        <div className="text-5xl font-black">{content.name}</div>
        <div className="grid grid-cols-3 pt-12 gap-x-32 gap-y-4">
          {content.list?.map((item, index) => (
            <div key={index} className="flex space-x-2 items-center">
              <div className="w-2 h-[2px] bg-black"></div>
              <div className="flex-1 text-sm font-normal opacity-60">
                <a href={item.url} target="_blank">{item.title}</a>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  const renderBusinessQuestion = (content: TTagData) => {
    return (
      <div className="w-full">
        <div className="pb-6">IMG</div>
        {content.list?.map((item, index) => (
          <div key={index} className="flex space-x-2 items-center pb-4 items-center">
            <div className="w-2 h-[2px] bg-black"></div>
            <div className="flex-1 text-sm font-normal opacity-60">
              <a href={item.url} target="_blank">{item.title}</a>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="container flex flex-col items-center py-24">
      {renderQa(getListDataByCode('qa')[0])}
      <div className="flex space-x-32 w-full py-10">
        {new Array<string>(3).fill("border-neutral-200").map((color, index) => (
          <DividingLine key={index} color={color} />
        ))}
      </div>
      <div className="flex space-x-32 w-full">
        {renderBusinessQuestion(getListDataByCode('GM1')[0])}
        {renderBusinessQuestion(getListDataByCode('yjt')[0])}
        {renderBusinessQuestion(getListDataByCode('modelHome')[0])}
      </div>
    </div>
  );
};

export default TechSupport;
