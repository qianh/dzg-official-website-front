import Image from "next/image";
import { getCaseDetailData } from "@/app/apis/case";
import LinkBtn from "@/app/components/link-btn";
import CaseDetail from "@/app/components/content/cases/CaseDetail";
import Contract from "@components/contract";
import DynamicRender from "@/app/components/dynamic-render";
import { urlParamDecode } from "@/utils/common";

export default async function Solutions({ params }: any) {

  const caseData = await getCaseDetailData(urlParamDecode(params.detail));

  return (
    <div>
      <div className="banner-container pb-[26.7%]">
        <Image src={"https://img.js.design/assets/img/66b4907cbed65308b2ddf9fa.png#3f81b04ff856f2bce2264c2bc30cb401"} alt="logo" fill />
        <LinkBtn paddingBottom={123} title="点击获取更多方案"/>
      </div>
      <DynamicRender tags={caseData.tags || []} name={caseData.name} />
      <Contract />
    </div>
  );
}
