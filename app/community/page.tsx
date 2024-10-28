import ImageBg from "@components/image-bg";
import { getVideoData } from "@/app/apis/community";
import DynamicRender from "@/app/components/dynamic-render";
import Contract from "@components/contract";
import LinkBtn from "@/app/components/link-btn";

interface CommunityProps {}

const Community: React.FC<CommunityProps> = async (props: CommunityProps) => {

  const data = await getVideoData();

  data.tags.forEach((item) => {
    item.code = 'video-list';
  })

  return (
    <div>
      <ImageBg
        url={data.bannerUrl}
        pd={26.7}
        children={
          <LinkBtn
            paddingBottom={180}
            title="点击获取更多方案"
          />
        }
      />
      <div className="bg-[#FAFAFA]">
        <div className="container flex flex-col items-center space-y-20 pt-12 pb-24">
          <DynamicRender tags={data.tags} />
        </div>
      </div>
      <Contract />
    </div>
  );
};

export default Community;
