import ImageBg from "@/app/components/image-bg";
import FreeEnter from "@/app/components/content/free-enter";
import LinkBtn from "@/app/components/link-btn";
import { getHomeData } from "@/app/apis/home";
import DynamicRender from "@/app/components/dynamic-render";
import Contract from "@components/contract";

export const metadata = {
  title: "宁波大掌柜物流技术有限公司",
  description: "宁波大掌柜物流技术有限公司",
  keywords: "大掌柜,宁波大掌柜,宁波大掌柜物流技术有限公司,dzg",
  copyright: "宁波大掌柜物流技术有限公司",
};

export default async function Page() {
  const homeData = await getHomeData();

  return (
    <div>
      <ImageBg
        url={homeData.bannerUrl!}
        pd={35.2}
        children={<LinkBtn paddingBottom={123} title="点击获取更多方案" />}
      />
      <DynamicRender tags={homeData.tags} />
      {/* <FreeEnter /> */}
      <Contract />
    </div>
  );
}
