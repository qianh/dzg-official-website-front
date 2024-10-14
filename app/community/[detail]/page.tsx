import { getCaseDetailData } from '@apis/community';
import { urlParamDecode } from "@/utils/common";
import CardLink from '@components/content/card-link';
import Player from '@/app/components/Player';
import { parseUrlParams } from '@/utils/common'; 

interface VideoPlayerProps {}

const VideoPlayer: React.FC<any> = async ({ params }: any) => {

  const videoDetail = await getCaseDetailData(urlParamDecode(params.detail));

  const urlParams = parseUrlParams(videoDetail?.videoUrl || ""); 

  return (
    <div className="bg-[#66676C] flex justify-center">
      <div className="flex py-24 space-x-10">
        <div className="rounded-xl overflow-hidden w-[1200px] h-[648px] dzg-player">
          <Player vid={urlParams.get('vid')}/>
        </div>
        {videoDetail && <CardLink item={videoDetail!} href="" needLink={false} />}
      </div>
    </div>
  );
};

export default VideoPlayer;
