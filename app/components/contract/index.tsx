import ContractBaseInfo from "./contract-baseinfo";
import ContractForm from "./contract-form";

interface ContractProps {}

const Contract: React.FC<ContractProps> = (props: ContractProps) => {
  return (
    <div className="bg-gradient-to-r from-[#F3F6F8] to-[#EFE1C8]">
      <div className="container flex flex-col justify-between pt-24 pb-20">
        <div className="">
          <div className="text-5xl font-black">快速和我们取得联系</div>
          <div className="text-xl pt-6 opacity-60">
            大掌柜，全面助力业务数字化转型升级
          </div>
        </div>
        <div className="pt-[40px]">
          <ContractForm />
        </div>
      </div>
    </div>
  );
};

export default Contract;
