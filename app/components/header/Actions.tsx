import Image from "next/image";
import LocaleIcon from "./LocaleIcon";

const Actions = () => {
  return (
    <div className="flex items-center space-x-4 text-sm">
      <div className="flex items-center space-x-2">
        <Image src={"/home/phone.png"} alt="phone" width={16} height={16} />
        <span className="text-black opacity-30">400-882-8871</span>
      </div>
      {/* <LocaleIcon /> */}
      {/* <div className="flex items-center border rounded-full bg-white text-slate-500 h-9 pl-6 pr-6 cursor-pointer">
        登录
      </div> */}
      <div className="flex items-center border rounded-full bg-black text-white h-9 pl-6 pr-6 cursor-pointer">
        <a href="/about/free-trial">免费体验</a>
      </div>
    </div>
  );
};

export default Actions;
