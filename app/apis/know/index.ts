import request from "@/utils/request";
import { TTagData } from "@apis/home";

export type TDzgInfoData = {
  bannerUrl: string;
  tags: TTagData[];
};

const data: TDzgInfoData = {
  bannerUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240926160028/10f936cd-f67e-4440-9739-28b8978cc551/了解我们.jpg",
  tags: [
    {
      name: "part1",
      code: "introduce-short-list",
      list: [
        {
          title:
            "大掌柜货代ERP：全能SaaS平台，引领物流管理新纪元，以科技赋能企业高效安全转型升级",
          content: `大掌柜的货代ERP系统，基于先进的SaaS技术架构，不仅保证了系统的灵活性和可扩展性，而且通过持续的产品升级迭代，能够迅速适应并满足不断演变的新场景和新需求。同时系统功能全面，涵盖了全电发票处理、全程物流可视化、智能托书解析以及EDI数据交换等多元化增值服务，为不同类型的客户提供了一站式的解决方案。这些服务不仅提升了操作效率，还增强了数据处理的准确性和安全性。
大掌柜彰显出强大的技术研发能力，其技术成就斐然，已获得超过80项软件著作权及2项软件专利的肯定。此外，系统内置的监控机制极为强大，通过细分为11大类别、覆盖超过50项关键性能指标的实时监控体系，确保了系统运行的稳定性与服务的高可靠性，为用户提供了坚实的后台保障。`,
          imageUrl:
            "https://img.js.design/assets/img/66b492dfe741c4d49040bc96.png#84b6ca93f042ab4b1296dc8adf7ae6ea",
        },
        {
          title: "大掌柜客服团队：十年国际运输经验，筑就专业物流服务桥梁",
          content: `大掌柜的客服团队拥有超过十年的行业沉淀，拥有丰富的全链路国际运输服务经验。他们不仅精通业务流程，更能够提供精准的系统操作指导和深入的行业咨询服务。这支团队以其专业、细致、周到的服务，确保每一位客户都能获得超出期待的满意度，成为企业与客户之间沟通的桥梁，助力客户在全球化的商业环境中游刃有余。`,
          imageUrl:
            "https://img.js.design/assets/img/66b4933ac7b850b007975a36.png#23ff11c37bc00555cc981a0fd7d66c75",
        },
        {
          title: "精英汇聚，引领创新：大掌柜高管团队驱动企业数字化转型新纪元",
            content: `大掌柜的高管团队由来自华为、阿里巴巴、IBM等知名企业的杰出精英组成。不仅拥有深厚的技术创新实力和丰富的行业经验，而且在专业团队管理和企业数字化转型解决方案方面展现出卓越的能力。团队以其精湛的专业技能和前瞻性的管理理念，引领着企业在数字化浪潮中稳健前行，不断开创行业新篇章。`,
          imageUrl:
            "https://img.js.design/assets/img/66b492dfe741c4d49040bc96.png#84b6ca93f042ab4b1296dc8adf7ae6ea",
        },
      ],
    },
    {
      name: 'part2',
      code: 'why-select-dzg',
      list: [
        {
          title: '高效集成的物流管理能力',
          content: '整合全球物流信息资源，实现端到端的可视化管理，增强业务管理体验，提高物流效率，减少时间和成本',
        },
        {
          title: '高度可定制化与灵活性',
          content: '根据不同物流企业的特定需求，提供高度可配置的服务和界面，帮助您自动化管理和简化操作，确保软件能够无缝融入客户现有的工作流程中，提升用户体验。',
        },
        {
          title: '持续的产品创新与迭代',
          content: '快速响应市场变化和技术进步，不断推出新功能和服务，保持软件的前沿性和竞争力。',
        },
        {
          title: '客户服务与培训支持',
          content: '提供专业、及时的客户服务，包括但不限于技术咨询、故障排除、用户培训等，确保客户能够充分利用软件的功能。',
        },
        {
          title: '品牌影响力与合作伙伴生态',
          content: '建立广泛的合作网络，包括物流承运商、仓库供应商、技术伙伴等，增强品牌信誉，为客户提供更全面的解决方案选项。',
        },
        {
          title: '超高技术实力支持',
          content: '大掌柜的全球数据网络提供强大的应用交付及管理服务。您整个企业可享受 24/7 全天候服务，包括数据管理、升级和维护、备份和连续性计划。',
        },
      ]
    }
  ],
};

export const getDzgInfo = async (): Promise<TDzgInfoData> => {
  return Promise.resolve(data);
};
