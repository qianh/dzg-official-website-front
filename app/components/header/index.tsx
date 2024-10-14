import Menus from "./Menus";
import Image from "next/image";
import Actions from "./Actions";
import { getMenus } from "@apis/home";

export default async function Header() {

  const menus = await getMenus();

  return (
    <div className="flex items-center h-16 justify-center sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="flex items-center w-[1360px]">
        <a href="/"><Image src={"/logo.png"} alt="logo" width={112} height={42} /></a>
        <Menus data={menus}/>
        <div className="flex-1 flex justify-end">
          <Actions />
        </div>
      </div>
    </div>
  );
}
