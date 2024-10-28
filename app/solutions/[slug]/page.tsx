
import ImageBg from "@/app/components/image-bg";
import { getSolutionData } from "@/app/apis/solution";
import LinkBtn from "@/app/components/link-btn";
import DynamicRender from "@/app/components/dynamic-render";
import Contract from "@components/contract";

export default async function Solutions({ params }: any) {

  const solutionData = await getSolutionData(params.slug);

  return (
    <div>
      {solutionData?.bannerUrl && (
        <ImageBg url={solutionData.bannerUrl} pd={26.7} children={<LinkBtn paddingBottom={80} title="点击获取更多方案"/>} />
      )}
      <DynamicRender tags={solutionData?.tags || []} />
      <Contract />
    </div>
  );
}
