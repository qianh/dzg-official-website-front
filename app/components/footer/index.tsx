import Image from "next/image";
import { getTooterData } from "@apis/footer";
import { TMenu } from "@apis/home";
import FooterBaseInfo from "./BaseInfo";
import Copyright from "../Copyright";

const MORE_LINK = ["partners", "community", "support", "news", "about", "know"];

const LINK_STYLE = "flex flex-col space-y-2 text-sm pt-4 font-normal opacity-80";

export default async function Footer() {
  const footerData = await getTooterData();

  const findMenus = (menus: TMenu[], name: string) => {
    return menus?.find((item) => item.code === name);
  };

  return (
    <div className="flex justify-center h-[520px] bg-slate-900 text-white relative">
      <div className="w-[1360px] flex flex-col">
        <div className="flex pt-16">
          <div className="pr-60">
            <Image
              src={"/home/footer-logo.png"}
              alt="logo"
              width={160}
              height={60}
            />
          </div>
          <div className="w-[286px]">
            <span className="font-medium">解决方案</span>
            <div className={LINK_STYLE}>
              {findMenus(footerData, "solutions")?.children?.map((item, index) => (
                <div key={index}>
                  <a href={item.href}>{item.title}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[164px]">
            <span className="font-medium">客户案例</span>
            <div className={LINK_STYLE}>
              {findMenus(footerData, "cases")?.children?.map((item, index) => (
                <div key={index}>
                  <a href={item.href}>{item.title}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[170px]">
            <span className="font-medium">更多</span>
            <div className={LINK_STYLE}>
              {MORE_LINK.map((code, index) => {
                const item = findMenus(footerData, code);
                return (
                  item && (
                    <div key={index}>
                      <a href={item.href}>{item.title}</a>
                    </div>
                  )
                );
              })}
              <div>
                <a href={'/about/free-trial'}>免费体验</a>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <span className="font-medium">联系我们</span>
            <FooterBaseInfo />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center absolute bottom-16 w-[1360px]">
        <div>三方平台</div>
      </div>
      <Copyright />
    </div>
  );
}
