import { TContent } from "@/app/apis/home";

interface IDevelopmentHistoryProps {
  name: string;
  data: TContent[] | undefined;
}

const DevelopmentHistory: React.FC<IDevelopmentHistoryProps> = ({
  name,
  data,
}: IDevelopmentHistoryProps) => {
  return (
    <div className="bg-[#F5F5F5] py-12 -mt-12">
      <div className="container flex flex-col items-center">
        <div className="text-5xl font-bold">{name}</div>
        <div className="pt-12">
          {data?.reverse().map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row space-y-4 justify-center justify-around ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                } h-[180px]`}
              >
                <div className="w-[632px]"></div>
                <div className="flex w-24 flex-col space-y-2 items-center justify-center">
                  <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gradient-development-history-l">
                    <div className="w-[18px] h-[18px] rounded-full bg-gradient-development-history"></div>
                  </div>
                  <div className="w-[1px] h-[120px] bg-slate-200"></div>
                </div>
                <div
                  className={`w-[632px] ${index % 2 === 1 ? "text-right" : ""}`}
                >
                  <div className="text-[40px] font-bold">{item.title}</div>
                  <div className="text-xl pt-[20px]">{item.introduction}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentHistory;
