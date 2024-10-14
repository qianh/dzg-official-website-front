import ImageBg from "@components/image-bg";
import DynamicRender from "@/app/components/dynamic-render";
import { getSupportData } from "@apis/support";
import Contract from "@components/contract";
import LinkBtn from "@/app/components/link-btn";
import CustomerService from "@components/icon/customer-service";

export default async function Support({ params }: any) {
  const data = await getSupportData("");

  return (
    <div>
      <ImageBg
        url={data.bannerUrl}
        pd={23.9}
        children={
          <LinkBtn
            paddingBottom={84}
            title="智能客服咨询"
            url="https://gm1.sobot.com/chat/pc/v6/index.html?sysnum=566817082dc0443a834d8308e574338e&channelid=14"
            icon={<CustomerService size={20} />}
            newTag
          />
        }
      />
      <DynamicRender tags={data.tags} />
      <Contract />
    </div>
  );
}
