import request from "@/utils/request";
import { TTagData } from "@apis/home";
import { allData, otherSolutions } from "./data";

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
  // data?.tags && data.tags.push(otherSolutions);
  return Promise.resolve(data);
};
