
import MoreCase from "@/app/components/content/cases/MoreCase";
import { getNewsDetail } from "@apis/news";
import Contract from "@components/contract";
import DynamicRender from "@/app/components/dynamic-render";
import { urlParamDecode } from "@/utils/common";

export default async function NewsDetail({ params }: any) {

  const { detail } = params;
  const newsData = await getNewsDetail(urlParamDecode(detail));

  return (
    <div className="news-detail">
      <DynamicRender tags={newsData.tags || []}/>
      <Contract />
    </div>
  );
} 
 