import ImageBg from "@components/image-bg";
import { getNewsData } from "@apis/news";
import DynamicRender from "@/app/components/dynamic-render";
import Contract from "@components/contract";
import LinkBtn from "@/app/components/link-btn";

export default async function News({ params }: any) {
  const newsData = await getNewsData();

  return (
    <div>
      <ImageBg
        url={newsData.bannerUrl}
        pd={23.9}
        children={
          <LinkBtn
            paddingBottom={87}
            title="立即查看"
            url={"http://localhost:3000/news/MTAw"}
            className="bg-[#EF7946] text-white w-[200px]"
            newTag
          />
        }
      />
      <DynamicRender tags={newsData.tags} />
      <Contract />
    </div>
  );
}
