import request from "@/utils/request";
import { TTagData } from "../home";

export type TAboutData = {
  bannerUrl?: string;
  tags: TTagData[];
};

const data: TAboutData = {
  bannerUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240926160240/0c59a497-57e8-48b9-bb93-31ee988d1103/关于我们.png",
  tags: [
    {
      name: "简介",
      code: "introduce-short-list",
      list: [
        {
          title: "大掌柜，一站式数智化跨境物流软件服务提供商",
          introduction: "宁波大掌柜物流科技有限公司成立于2015年，是国内领先的数智化物流解决方案服务提供商，中国国际物流SaaS软件和产业互联网服务的先行者，为供应链上下游企业提供全量全要素的数字化软件产品与方案实施服务。大掌柜帮助企业建立自己的商务平台，实现业务的在线化、数字化、标准化、自动化和智能化，构建跨区域营销服务和运营管理的能力，编织全球营销服务网络，高效低成本的随时、随地、随意做生意和管生意。",
          imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241022153040/40c61391-f048-421a-81b1-81aaaaeb3911/右侧配图.png",
        },
      ],
    },
    {
      name: "案例特点",
      code: "solutions/solution-count",
      list: [
        {
          title: "年国际物流行业经验",
          simpleContent: "20",
        },
        {
          title: "企业客户项目经验",
          simpleContent: "1000",
        },
        {
          title: "软件著作&专利",
          simpleContent: "80",
        },
      ],
    },
    {
      name: '大掌柜发展历程',
      code: "development-history",
      list: [
        { title: "2002年", introduction: "大掌柜创始团队在硅谷成立，研发云计算平台" },
        { title: "2007年", introduction: "研发出全球第一款货代SaaS软件和第一个物流云计算平台——大掌柜" },
        { title: "2014年", introduction: "推出国际物流行业第一个020平台，帮助物流企业实现营销线上化" },
        { title: "2017年", introduction: "发布面向中大型企业的一站式综合物流管理系统GM1,实现降本增效" },
        { title: "2019年", introduction: "阿里巴巴采购大掌柜软件，同年引入菜鸟战略投资，开启行业生态化建设" },
        { title: "2020年", introduction: "与义乌小商品城、环世物流成立合资公司布局：商流+信息流+物流数字化生态" },
        { title: "2023年", introduction: "发布物流数字员工一AI数字员工，标志AI驱动物流企业转型升级" },
      ],
    }
  ],
};

export const getAboutData = async (): Promise<TAboutData> => {
  return Promise.resolve(data);
};
