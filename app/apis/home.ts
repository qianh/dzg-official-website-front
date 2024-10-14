import request from "@/utils/request";
import { allCases } from "@apis/case";

export type TCaseType =
  | "supply"
  | "manufacture"
  | "sea"
  | "air"
  | "cross"
  | "ship";

export type TBaseInfo = {
  name: string;
  enName: string;
  value: string;
  code: string;
};

export type TContent = {
  id?: number;
  title: string;
  tag?: string;
  url?: string;
  imageUrl?: string;
  videoUrl?: string;
  introduction?: string;
  module?: string;
  code?: string;
  simpleContent?: string;
  content?: string;
  source?: string;
  createTime?: string;
};

// export type TCases = Partial<Record<TCaseType, TContent[]>>;
export type TCases = TTagData[];

export type TTagData = {
  name: string;
  code: string;
  list?: TContent[];
  tags?: TTagData[];
};

export type THomeData = {
  bannerUrl?: string | string[];
  tags: TTagData[];
};

const data: THomeData = {
  bannerUrl: "/home/banner.png",
  tags: [
    {
      name: "解决方案",
      code: "solutions",
      list: [
        {
          title: "小微贷业务系统方案",
          tag: "解决方案",
          url: "/home/solutions.png",
          introduction:
            "通过全球端供应链物流解决方案连接和简化客户供应链，为客户打造轻松便捷的物流体验。针对小微贷业务操作缺乏系统、人员不足、业务出错率高、效率低等痛点，大掌柜提供线上一体化管理系统。",
        },
        {
          title: "小微贷业务系统方案",
          tag: "解决方案",
          url: "/home/solutions.png",
          introduction:
            "通过全球端供应链物流解决方案连接和简化客户供应链，为客户打造轻松便捷的物流体验。针对小微贷业务操作缺乏系统、人员不足、业务出错率高、效率低等痛点，大掌柜提供线上一体化管理系统。",
        },
        {
          title: "小微贷业务系统方案",
          tag: "解决方案",
          url: "/home/solutions.png",
          introduction:
            "通过全球端供应链物流解决方案连接和简化客户供应链，为客户打造轻松便捷的物流体验。针对小微贷业务操作缺乏系统、人员不足、业务出错率高、效率低等痛点，大掌柜提供线上一体化管理系统。",
        },
      ],
    },
    {
      name: "客户案例",
      code: "cases",
      tags: allCases
    },
  ],
};

const baseInfo: TBaseInfo[] = [
  { name: "公司总机", enName: "", value: "0574-88445656", code: "tel" },
  { name: "服务热线", enName: "", value: "400-882-8871", code: "hotline" },
  {
    name: "商务合作",
    enName: "",
    value: "yunying@olymtech.com",
    code: "cooperationEmail",
  },
  {
    name: "联系地址",
    enName: "",
    value: "宁波市鄞州区日丽中路555号华茂总部壹号2801",
    code: "address",
  },
  {
    name: "微信二维码",
    enName: "weChatQr",
    value: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240924154044/e0bfc01f-f558-4052-8491-131e271c45af/qrcode_for_dzg_qw.jpeg",
    code: "weChatQr",
  },
  {
    name: "copyright",
    enName: "copyright",
    value: "Copyright @ 2018-2023 大掌柜 All Right Reserved ICP证：浙ICP备20008776号-4",
    code: "copyright",
  },
  {
    name: "官网企微二维码",
    enName: "dzgWeChatQr",
    value: "https://hd-gm1-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240911154856/c83d30dd-e9ca-4efc-bcdc-f756774e8b18/官网企微二维码.png",
    code: "dzgWeChatQr",
  }
];

export type TMenu = {
  title: string;
  href: string;
  code?: string;
  children?: TMenu[];
  sort: number;
}

export const menus: TMenu[] = [
  {
    title: "首页",
    code: "home",
    href: "/",
    sort: 1,
  },
  {
    title: "了解大掌柜",
    code: "know",
    href: "/know",
    sort: 2,
  },
  {
    title: "解决方案",
    href: "/solutions",
    code: "solutions",
    sort: 3,
    children: [
      { title: "All in One 国际物流供应链集成方案", href: "/solutions/allinone", sort: 1 },
      { title: "跨境物流一体化方案", href: "/solutions/cross",sort: 2 },
      { title: "工贸TMS运输系统方案", href: "/solutions/tms", sort: 3 },
      { title: "小微贷业务系统方案", href: "/solutions/micro", sort: 4 },
      { title: "高效协同办公集成方案", href: "/solutions/efficiency", sort: 5 },
      { title: "供应利埃纳组织数字化方案", href: "/solutions/supply", sort: 6 },
      { title: "业财一体化方案", href: "/solutions/finance", sort: 7 },
      { title: "业务营销一体化方案", href: "/solutions/marketing",  sort: 8 },
    ],
  },
  {
    title: "客户案例",
    href: "/cases",
    code: "cases",
    sort: 4,
    children: [
      { title: "供应链", href: "/cases/supply", sort: 1 },
      { title: "制造业", href: "/cases/manufacture", sort: 2 },
      { title: "空运", href: "/cases/air", sort: 3 },
      { title: "海运", href: "/cases/sea", sort: 4 },
      { title: "跨境", href: "/cases/cross", sort: 5 },
      { title: "船代", href: "/cases/ship", sort: 6 },
    ],
  },
  {
    title: "合作伙伴",
    href: "/partners",
    code: "partners",
    sort: 5,
  },
  {
    title: "学习社区",
    href: "/community",
    code: "community",
    sort: 6,
  },
  {
    title: "服务支持",
    href: "/support",
    code: "support",
    sort: 7,
  },
  {
    title: "新闻",
    href: "/news",
    code: "news",
    sort: 8
  },
  {
    title: "公司简介",
    href: "/about",
    code: "about",
    sort: 9,
    children: [
      { title: "关于我们", href: "/about", sort: 1 },
      { title: "免费体验", href: "/about/free-trial", sort: 2 },
    ],
  },
];


export const getHomeData = async (): Promise<THomeData> => {
  return Promise.resolve(data);
};

export const getBaseInfo = async (): Promise<TBaseInfo[]> => {
  return Promise.resolve(baseInfo);
};

export const getMenus = async (): Promise<TMenu[]> => {
  return Promise.resolve(menus);
};

export const getAkToken = async (project: string) => {
  return request<{ key: string; value: string }[]>({
    url: `/dzg-mdm/rest/baidu/public/getToken?product=` + encodeURI(project),
    method: "GET",
  });
};