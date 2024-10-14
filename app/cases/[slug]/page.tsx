import ImageBg from "@/app/components/image-bg";
import { getCaseData } from "@/app/apis/case";
import LinkBtn from "@/app/components/link-btn";
import DynamicRender from "@/app/components/dynamic-render";
import Contract from "@components/contract";

export default async  function Solutions({ params }: any) {

  const defaultCode = params.slug;
  const caseData = await getCaseData();

  return (
    <div>
      <ImageBg url={caseData.bannerUrl} pd={26.7} children={<LinkBtn paddingBottom={123} title="点击获取更多方案"/>} />
      <DynamicRender tags={caseData.tags || []} page={'cases'}  defaultCode={defaultCode} />
      <Contract />
    </div>
  );
}
