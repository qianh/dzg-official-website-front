import request from "@/utils/request";
import { TTagData, TContent } from "@apis/home";

export type TVideoData = {
  bannerUrl: string;
  tags: TTagData[];
};

const allVideos: TTagData[] = [
  {
    name: "系统培训",
    code: "system",
    list: [
      { id: 998, title: "M3培训视频-操作系统演示", imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240914144905/6b2a6db0-a9ed-4c2b-b660-a113922f59f0/video-1.jpg", videoUrl: "https://share.plvideo.cn/front/video/preview?vid=a22313bcc5f54ff657e266b4e95a3517_a" },
      { id: 999, title: "M3培训视频-系统初始化设置", imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240914144948/b05c3df7-832c-4c75-93e9-24a1e5a10131/video-2.jpg", videoUrl: "https://share.plvideo.cn/front/video/preview?vid=a22313bcc567dc3fbb8ccdca9c29e1c4_a" },
      { id: 1000, title: "M3培训视频-基础资料设置", imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240914145008/5d063119-c2b8-40f7-81a2-5900d70378e6/video-3.jpg", videoUrl: "https://share.plvideo.cn/front/video/preview?vid=a22313bcc5e2bf0e147004973ec5c42d_a" },
      { id: 1001, title: "M3培训视频-结算管理", imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240914145031/8f519d7d-5ab7-4a55-bb6a-8193ab51fa7c/video-4.jpg", videoUrl: "https://share.plvideo.cn/front/video/preview?vid=a22313bcc5259765d66ffc297ed43f19_a" },
      { id: 1002, title: "M3培训视频-单证报表", imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240914145053/5e226855-b22d-4e91-a038-3c527528c6ae/video-5.jpg", videoUrl: "https://share.plvideo.cn/front/video/preview?vid=a22313bcc5e2e1f1714797f874a804da_a" },
      { id: 1003, title: "M3培训视频-海运业务", imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240914145111/b7823f5c-b1df-4bfb-8b93-b6d79c5186d6/video-6.jpg", videoUrl: "https://share.plvideo.cn/front/video/preview?vid=a22313bcc51194a8654e4ef008ea3332_a" },
      { id: 1004, title: "M3培训视频-空运业务", imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240914145129/c1d40444-a0cc-4bf9-8e4b-3b96a4d5bb27/video-7.jpg", videoUrl: "https://share.plvideo.cn/front/video/preview?vid=a22313bcc5c47217675d0102aab7a561_a" },
      { id: 1005, title: "M3培训视频-铁路业务", imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240914145151/5c47de6c-c4ea-4db0-98c6-1cbf9d5f89f7/video-8.jpg", videoUrl: "https://share.plvideo.cn/front/video/preview?vid=a22313bcc524538f26e632281e1e79f8_a" },
    ],
  },
  {
    name: "业务培训",
    code: "business",
    list: [
      { id: 1006, title: "邮件功能能做什么？", imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240914145212/68041271-644a-4289-8704-7d037ff15af1/video-9.jpg", videoUrl: "https://share.plvideo.cn/front/video/preview?vid=a22313bcc5cc004fd02edc8146b87790_a" },
      { id: 1007, title: "货代人的提效秘诀--待办功能", imageUrl:"https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240914145233/521865f5-b8db-4fda-bfec-3a9ccf7b695c/video-10.jpg", videoUrl: "https://share.plvideo.cn/front/video/preview?vid=a22313bcc59f342f63b86b43842b0e99_a" },
    ],
  },
  {
    name: "大咖分享",
    code: "share",
    list: [
      { id: 1014, title: "数智化助力物流巨头开创新时代", imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241025140141/2a07a962-bad3-436a-a9fe-da5b09ad37d4/官网数字化分享.jpg", videoUrl: "https://share.plvideo.cn/front/video/preview?vid=a22313bcc5cf8ea0f94f87425c081168_a" },
    ],
  },
];

const data: TVideoData = {
  bannerUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240926160138/37c93e53-d883-4d36-bc8a-35c5dbc5aafc/学习中心.png",
  tags: allVideos
};

export const getVideoData = async (): Promise<TVideoData> => {
  return Promise.resolve(data);
};

export const getCaseDetailData = async (id: string | number): Promise<TContent | undefined> => {
  let allList: TContent[] = [];
  allVideos?.forEach((item) => {
    allList = allList.concat(item.list || []);
  });
  const item = allList.find((item) => {
    return item.id == id;
  });
  return item;

};