import request from "@/utils/request";
import { TTagData } from "@apis/home";
import { allData, otherSolutions, AllInOneData, AllInOneDetailData } from "./data";

export type TSolutionData = {
  bannerUrl: string;
  tags: TTagData[];
};

export type SolutionItemType = {
  name: string;
  code: string;
  bannerUrl: string;
  tags: TTagData[];
}

export const getSolutionData = async (path: string): Promise<SolutionItemType | undefined> => {
  const data = allData.find((item) => item.code === path);
  if (!data) {
    return Promise.resolve(data);
  } else {
    const _data = {...data};
    _data.tags = [..._data.tags, {
      ...otherSolutions,
      list: otherSolutions.list?.filter((item) => !item.url?.includes(path))
    }];
    return Promise.resolve(_data);
  }
};


export const getAllInOneSolutionData = async (path: string): Promise<any> => {
  return Promise.resolve(AllInOneData);
};

export const getAllInOneSolutionDetail = async (code: string): Promise<any> => {
  return Promise.resolve(AllInOneDetailData[code]);
};

