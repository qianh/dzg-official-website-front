import request from "@/utils/request";
import { menus } from "./home";

export const getTooterData = async () => {
  return Promise.resolve(menus);
};
