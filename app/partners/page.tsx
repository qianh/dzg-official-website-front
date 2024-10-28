
import ImageBg from "@components/image-bg";
import Apply from "@/app/components/content/apply";
import CooperateEnter from "@components/content/cooperate-enter";

const partners_urls = [
  "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240914170109/8fc89add-899a-4c75-9dd4-295dfd8f294f/partner-1.jpg",
  "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240914170138/bd16173a-6ae2-4af1-9361-25994c2b1173/partner-2.jpg",
  "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240926150218/b5f0408b-4c72-440f-9525-f2e021144f02/partner-3.jpg",
  "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240926150238/51f2d1e8-df6d-4163-ae9b-a543ad34ee37/partner-4.jpg",
  "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240926150256/89d41a5c-2dd0-48da-8f69-b360a8393a1a/partner-5.jpg",
]
export default async function Partners({ params }: any) {

  return (
    <div>
      <ImageBg url={"https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240926160107/23313dbe-9f38-4cea-8fa5-27c6910df2bd/合作伙伴banner.jpg"} pd={26.7} />
      <div className="container pt-24 pb-24" id="partner-form">
        <Apply />
      </div>
      <ImageBg url={partners_urls} pd={31.25} alt="choice"/>
      <CooperateEnter />
    </div>
  );
}
