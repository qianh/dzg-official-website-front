
import ImageBg from "@/app/components/image-bg";
import Image from "next/image";
import { getSolutionData, TSolutionData } from "@/app/apis/solution";
import LinkBtn from "@/app/components/link-btn";
import MoreCase from "@/app/components/content/cases/MoreCase";
import DynamicRender from "@/app/components/dynamic-render";
import Contract from "@components/contract";

export default async function Solutions({ params }: any) {

  const solutionData = await getSolutionData(params.slug);

  return (
    <div>
      {solutionData?.bannerUrl && (
        <ImageBg url={solutionData.bannerUrl} pd={26.7} children={<LinkBtn paddingBottom={140} title="点击获取更多方案"/>} />
      )}
      <DynamicRender tags={solutionData?.tags || []} />
      <Contract />
    </div>
  );
}
