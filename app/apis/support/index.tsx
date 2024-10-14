import request from "@/utils/request";
import { TTagData, TBaseInfo } from "@apis/home";

export type TSupportData = {
  bannerUrl: string;
  tags: TTagData[];
};

const data: TSupportData = {
  bannerUrl:
    "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240926160157/e8a32c59-3b2d-46f7-aadc-1f9a4622e3cc/服务与支持.jpg",
  tags: [
    {
      name: "常见问题",
      code: "faq",
      tags: [
        {
          name: "常见问题",
          code: "qa",
          list: [
            { title: "我要新增一个账号该怎么维护？", url: "https://kf.800jit.com/dzg-kf-front/#/article?id=486" },
            { title: "操作请款后，怎么对请款单进行受理？", url: "https://kf.800jit.com/dzg-kf-front/#/article?id=327" },
            { title: "我的客户怎么注册账号？", url: "https://kf.800jit.com/dzg-kf-front/#/article?id=496" },
            { title: "一票业务需要出多份货代提单，业务信息应该怎么维护？", url: "https://kf.800jit.com/dzg-kf-front/#/article?id=420" },
            { title: "收到客户款项后，怎么进行收款登记？", url: "https://kf.800jit.com/dzg-kf-front/#/article?id=322" },
            { title: "会员注册后在哪里怎么审核 ？", url: "https://kf.800jit.com/dzg-kf-front/#/article?id=499" },
            { title: "怎么生成应收账单？", url: "https://kf.800jit.com/dzg-kf-front/#/article?id=400" },
            { title: "怎么对客户进行信控设置？", url: "https://kf.800jit.com/dzg-kf-front/#/article?id=586" },
            { title: "怎么给不同的客户设置不同的价格？", url: "https://kf.800jit.com/dzg-kf-front/#/article?id=501" },
            { title: "只有一张发票而客人想要分次付款，怎么进行核销？", url: "https://kf.800jit.com/dzg-kf-front/#/article?id=450" },
            { title: "怎么进行提单放单？", url: "https://kf.800jit.com/dzg-kf-front/#/article?id=296" },
            { title: "在哪里可以查看之前的发布记录？", url: "https://kf.800jit.com/dzg-kf-front/#/article?id=407" },
          ],
        },
        {
          name: "GM1功能说明",
          code: "GM1",
          list: [
            {
              title: "客商",
              url: "https://kf.800jit.com/dzg-kf-front/#/section?id=17",
            },
            {
              title: "订单",
              url: "https://kf.800jit.com/dzg-kf-front/#/section?id=18",
            },
            {
              title: "结算",
              url: "https://kf.800jit.com/dzg-kf-front/#/section?id=19",
            },
            {
              title: "报表",
              url: "https://kf.800jit.com/dzg-kf-front/#/section?id=20",
            },
          ],
        },
        {
          name: "运价通功能说明",
          code: "yjt",
          list: [
            {
              title: "运价维护",
              url: "https://kf.800jit.com/dzg-kf-front/#/section?id=401",
            },
            {
              title: "运价发布",
              url: "https://kf.800jit.com/dzg-kf-front/#/section?id=406",
            },
            {
              title: "运价查询",
              url: "https://kf.800jit.com/dzg-kf-front/#/section?id=408",
            },
            {
              title: "报价单生成",
              url: "https://kf.800jit.com/dzg-kf-front/#/section?id=464",
            },
          ],
        },
        {
          name: "M系列功能说明",
          code: "modelHome",
          list: [
            {
              title: "系统初始化",
              url: "https://kf.800jit.com/dzg-kf-front/#/section?id=484",
            },
            {
              title: "业务管理",
              url: "https://kf.800jit.com/dzg-kf-front/#/section?id=30",
            },
            {
              title: "结算管理",
              url: "https://kf.800jit.com/dzg-kf-front/#/section?id=31",
            },
            {
              title: "单证报表",
              url: "https://kf.800jit.com/dzg-kf-front/#/section?id=32",
            },
          ],
        },
      ],
    },
  ],
};

export const getSupportData = async (path: string): Promise<TSupportData> => {
  return Promise.resolve(data);
};
