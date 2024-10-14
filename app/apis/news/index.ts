import request from "@/utils/request";
import { TTagData, TContent } from "@apis/home";
import { companyNews, productNews } from "./data";

export type TNewsData = {
  bannerUrl: string;
  tags: TTagData[];
};

const newsData: TTagData[] = [
  {
    name: "公司新闻",
    code: "company",
    list: companyNews
  },
  {
    name: "产品新闻",
    code: "product",
    list: productNews,
  },
];

const getNews = () => {
  return newsData.map((item) => ({
    ...item,
    list: item.list?.sort((a, b) => a.id! - b.id!),
  }))
}

const data: TNewsData = {
  bannerUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240926160220/409d52de-6cba-491f-aa3d-9b651d57f28e/新闻中心.jpg",
  tags: [
    {
      name: "新闻",
      code: "news",
      tags: getNews(),
    },
  ],
};

export const getNewsData = async (): Promise<TNewsData> => {
  return Promise.resolve(data);
};

export const getNewsDetail = async (
  id: string | number
): Promise<TTagData> => {
  let allList: TContent[] = [];
  getNews().forEach((item) => {
    allList = allList.concat(item.list || []);
  });
  const item = allList.find((item) => item.id == id);
  return Promise.resolve({
    name: '新闻详情',
    code: 'newsDetail',
    tags: [{
      name: '',
      code: 'news/NewsDetail',
      list: item ? [item] : undefined
    }, {
      name: '相关新闻',
      code: 'cases/MoreCase',
      list: allList.filter((item) => item.id != id)
    }]
  });
};
