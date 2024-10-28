import { TTagData } from "@apis/home";
import { SolutionItemType } from "./index";

export const otherSolutions: TTagData = {
  name: "相关解决方案",
  code: "cases/MoreCase",
  list: [
    {
      title: "All in One 国际物流供应链集成方案",
      url: "/solutions/allinone",
      tag: "solution",
      imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145244/11003ebe-ba01-4aa2-a174-e6326c9ea31c/货运操作.png"
    },
    { title: "跨境物流一体化方案", url: "/solutions/cross", tag: "solution", imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241025142147/2aa6fe18-af8b-4cb1-8fee-4ecd2a935c97/跨境.jpg" },
    // {
    //   title: "Django+Vue+Docker企业OA系统",
    //   url: "/solutions/1234",
    //   tag: "solution",
    // },
    { title: "小微货代业务系统方案", url: "/solutions/micro", tag: "solution", imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241025142312/139c7105-0a72-44d8-9ed4-21f628ca1c7a/小微.jpg" },
    {
      title: "高效协同办公集成方案",
      url: "/solutions/efficiency",
      tag: "solution",
      imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241025142333/188cffa5-6b5b-4c32-971e-34f096095fb0/高效.jpg"
    },
  ],
};

export const allData: SolutionItemType[] = [
  {
    name: "All in One 国际物流供应链集成方案",
    code: "allinone",
    bannerUrl: "",
    tags: [
      {
        name: "All in One 国际物流供应链集成方案",
        code: "solutions/solution-allinone",
        list: [],
      },
    ],
  },
  {
    name: "跨境物流一体化方案",
    code: "cross",
    bannerUrl:
      "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927103420/f8402c9e-ba9a-44b4-8f7a-dacbd236b9ef/跨境.jpg",
    tags: [
      {
        name: "跨境仓配运营正在面临这些挑战",
        code: "pain-points",
        list: [
          {
            title: "多元平台竞争大。电商订单履约难",
            url: "/solution/pointIcon.png",
            introduction:
              "跨境电商竞争愈发激烈，商家拓展版图，入驻多个跨境电商平台。每个平台有独特的履约要求，而电商的本质更带来单量大、阶段性暴涨以及对履约服务时效性的苛刻要求。",
          },
          {
            title: "跨境仓配运营难度大",
            url: "/solution/pointIcon.png",
            introduction:
              "海外仓运营需要保证订单正常履约，协调仓配资源，跟进异常业务处理，降低运营风险；没有系统化的运营工具，不仅增加人力成本还存在业务风险。",
          },
          {
            title: "仓配资源杂多。无效管理",
            url: "/solution/pointIcon.png",
            introduction:
              "跨境业务对仓库布局及物流的适配存在严格需求，目前挑战在于如何智慧整合、调度、筛选仓配资源，确保在异常场景时能迅速响应，维持物流履约流程的顺畅与稳定性。",
          },
          {
            title: "智能化费用管理。简化跨境核算",
            url: "/solution/pointIcon.png",
            introduction:
              "库内及尾程费用结构繁复，计算过程繁琐。尾程附加费用受多种因素影响，包括但不限于商品尺寸、配送距离、地址类型、以及季节时间，这些变量使人工计算不仅成本高昂，更难以保证计算的精确度与响应速度。",
          },
        ],
      },
      {
        name: "多流程方案亮点。即刻加速跨境业务腾飞",
        code: "solutions/solution-features",
        list: [
          { title: "跨境订单自动化生成" },
          { title: "物流智能集成" },
          { title: "多仓库管理便捷。仓配一体" },
          { title: "异常处理有限提醒" },
          { title: "运营成本有效降低" },
        ],
      },
      {
        name: "",
        code: "solutions/solution-cases",
        list: [
          {
            title: "电商客户专属解决方案，优化全链路物流管理",
            content: `
              <ul class="list-decimal list-inside flex flex-col gap-y-4">
                <li>实现与多种ERP系统集成，提供包括履约流程追踪、异常管理、库存及费用等关键指标的实时监控与智能预警功能，确保运营效率与透明度。</li>
                <li>适用多平台业务需求，支持客户记账、客户面单、仓配等多种物流渠道，且提供多套快递方案适配超长、超重等非常规货物。</li>
                <li>通过智能计算，对仓库分配与尾程配送进行优选，不仅提升物流链路的协同效率，还降低客户的运输成本，实现供应链管理的精细化与成本效益最大化。</li>
              </ul>
            `,
            imageUrl:
              "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927102339/329f861a-8352-42f4-ae87-2e819a60a9d5/solution-2-1.png",
          },
          {
            title: "全面优化仓配运营，提升业务智能管理",
            content: `
              <ul class="list-decimal list-inside flex flex-col gap-y-4">
                <li>订单自动化处理：与ERP、WMS等其他系统无缝集成，通过预设的规则进行分类和处理，提高订单处理效率，确保数据流畅传输，提升整体运营效率</li>
                <li>智能化管理与精细化监控：部署多维度的异常报警系统，建立全面的风险管理框架。在关键业务节点预设灵活的应对策略，以适应市场变化，增强业务的稳定性和抗风险能力。</li>
                <li>物流成本优化：能分析订单的特定要求，如签署、承运限制和保险，结合目的地、货物规格等参数，自动计算尾程费用，选择最优物流方案，实现成本和时效的最佳平衡。</li>
                <li>多仓库集中管理：针对多仓布点，可以统一管理各个仓库的订单和库存，通过智能分仓，为客户实现资源的最优分配。</li>
                <li>数据分析和报告：收集和分析订单数据，提供客户、仓库服务商、快递服务商等运营报告，帮助企业做出更明智的业务决策，实现运营赋能。</li>
              </ul>
            `,
            imageUrl:
              "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927102405/ad1a67cc-b5e9-4931-a15e-d9af4a22c26f/solution-2-2.png",
          },
          {
            title: "高效服务商资源管理，打造透明化供应链",
            content: `
              <ul class="list-decimal list-inside flex flex-col gap-y-4">
                <li>提供灵活的服务商对接方案，支持多种系统接入，满足不同服务商的个性化需求，实现资源的多样化管理。</li>
                <li>从头程送仓预约到尾程配送轨迹查询，实现全链路的运营覆盖。通过精细的流程管控，确保每个履约环节都得到严格的监控和评估，保障服务质量。</li>
                <li>引入供应服务商评级模块，从多个维度对服务商的服务质量进行管控和分析。通过优胜劣汰的机制，确保服务资源的稳定性和可靠性。</li>
              </ul>
            `,
            imageUrl:
              "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927102424/8e7b1341-41cf-4fdd-8839-bb484bdc566f/solution-2-3.png",
          },
          {
            title: "费用智能管理",
            content: `
              <ul class="list-decimal list-inside flex flex-col gap-y-4">
                <li>汇总市场报价规则，构建系统费用逻辑，支持根据客户、仓库、物流等多维度维护报价。订单自动化生成费用明细，确保费用的及时性和精准性。</li>
                <li>客户资金账户支持预充值与信用额度双重管理，订单业务侧支持松紧严出。在保证客户体验的同时，有效降低坏账风险。</li>
                <li>系统自动生成三方供应商费用，为应付对账提供准确的参考数据，简化财务流程。</li>
                <li>配备自动对账小工具，不仅确保对账的准确性，同时大幅提升对账效率，减少人工操作的时间和精力。</li>
              </ul>
            `,
            imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024153415/7eed604d-c708-4174-97ff-7730529780a6/solution-2-4.png",
          },
        ],
      },
    ],
  },
  {
    name: "小微货代业务系统方案",
    code: "micro",
    bannerUrl:
      "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024135245/bb131f95-cf5b-4696-bd85-2ce11b8a3cb8/小微.jpg",
    tags: [
      {
        name: "小微货代行业为什么需要专业的流程与数据管理？",
        code: "pain-points",
        list: [
          {
            title: "线下办公，数据难追踪",
            url: "/solution/pointIcon.png",
            introduction:
              "1. 线下纸质表格管理业务，信息无法快速互通\n2. 人工手动维护费时费力，数据准确性难以保障\n3. 表格内容杂乱无章，业务节点无法监控",
          },
          {
            title: "权限泄露，数据安全无保障",
            url: "/solution/pointIcon.png",
            introduction:
              "1. 五花八门的跟单excel，人工处理繁杂\n2. 线下处理、流转业务，员工工作量激增",
          },
          {
            title: "局域网办公，成本高，效果差",
            url: "/solution/pointIcon.png",
            introduction:
              "1. 员工专业程度不同，带教需要一定时间\n2. 服务标准无统一，易造成客户体验不佳",
          },
        ],
      },
      {
        name: "更适配小微货代业务的解决方案。1000+货代企业选择大掌柜。管理痛点轻松解决，业务效率显著提升",
        code: "solutions/solution-features",
        list: [
          {
            title: "在线协同办公，更敏捷",
            content:
              "打破空间/时间限制，团队成员随时随地即可开展在线协作沟通，响应速度直线提升",
          },
          {
            title: "一站式数字化管理，更全能",
            content:
              "大掌柜业务系统可以适应各类业务流程，提供从业务录入到财务分析的“业财一体化”全流程数字化管理",
          },
          {
            title: "无需专人维护，更省钱",
            content:
              "采用更简洁明了的大掌柜业务系统，运维成本降低了，资金使用效率提高了，企业效益实现了最大化",
          },
          {
            title: "最新功能随享随用，更贴心",
            content:
              "紧随市场变化和客户心声，持续优化升级系统功能，改善解决方案，助力企业实现业务一体化",
          },
        ],
      },
      {
        name: "更好用的小微货代业务系统解决方案。22年信赖优选，一票到底操作便捷，为货代创业者护航梦想",
        code: "solutions/solution-cases",
        list: [
          {
            title: "电商客户专属解决方案，优化全链路物流管理",
            content: `
              <div>
                <div class="pb-4">原先：业务文件存档全线下纸质化，信息交换、员工办公协同极其不便</div>
                <div>现在：系统实现了业务、财务一体化管理，信息实时共享，员工之间在线协同成为办公高频；自动取值，收支毛利智能计算，数据更准确，让费用信息一目了然，辅助做出更准确的决策</div>
              </div>
            `,
            imageUrl:
              "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024153712/66cfc2d9-2b50-4e92-b50c-bbc7507c7b9f/solution-4-1.png",
          },
          {
            title: "全面优化仓配运营，提升业务智能管理",
            content: `
              <div>
                <div class="pb-4">原先：货代企业因业务流程繁多，且内部没有统一有效的管理方法，易造成数据泄漏，影响到业务安全</div>
                <div>现在：大掌柜业务系统提供规范的审核管理流程，按需分配员工权限，保障了经营数据安全；支持智能生成各类经营报表，精准把控财务收支风险。</div>
              </div>
            `,
            imageUrl:
              "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024153732/60a8232a-9a4d-4ec9-af64-a6aca951c753/solution-4-2.png",
          },
          {
            title: "高效服务商资源管理，打造透明化供应链",
            content: `
              <div>
                <div class="pb-4">原先：局域网办公限制了员工的办公/沟通协作场所，且需专人维护系统，费用高昂</div>
                <div>现在：轻轻松松即实现了线上无纸化办公；按需购买员工账号个数，成本进一步得到精简；系统自动化更新，操作便捷功能易理解；客服在线解答，对外品牌形象统一。</div>
              </div>
            `,
            imageUrl:
              "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024153746/14aceefe-0c41-4217-a495-95f745970457/solution-4-3.png",
          }
        ],
      },
    ],
  },
  {
    name: "高效协同办公集成方案",
    code: "efficiency",
    bannerUrl:
      "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927105037/cddf40a5-5322-4af0-9b78-63a921f70fb7/高效.jpg",
    tags: [
      {
        name: "物流行业协同管理挑战",
        code: "pain-points",
        list: [
          {
            title: "缺乏统一沟通渠道。对客服务不专业",
            url: "/solution/pointIcon.png",
            introduction:
              "1. 在不同应用下与客户沟通，信息发送易疏漏\n2. 常用的IM、邮件沟通无法应对非标业务，多源信息传递易出错",
          },
          {
            title: "线下流转处理跟单。员工工作效率低",
            url: "/solution/pointIcon.png",
            introduction:
              "1. 五花八门的跟单excel，人工处理繁杂\n2. 线下处理、流转业务，员工工作量激增",
          },
          {
            title: "人员流动性大。缺乏有效人才管理",
            url: "/solution/pointIcon.png",
            introduction:
              "1. 员工专业程度不同，带教需要一定时间\n2. 服务标准无统一，易造成客户体验不佳",
          },
          {
            title: "跨境行业工作繁琐。人工操作易出错",
            url: "/solution/pointIcon.png",
            introduction:
              "1. 结算费用来源多，月对账繁琐，一旦错误将产生巨额费用\n2. 跟单流程长，由人工辨别业务进度，效率低、遗漏率高\n3. 员工工作类别多，工作切换频繁易导致人力损耗",
          },
        ],
      },
      {
        name: "更适配物流行业的特色协同方案。为1000+货代企业带来管理价值",
        code: "solutions/solution-features",
        list: [
          {
            title: "操作记录留档。管理更有章法",
            content:
              "区别于线下协同，该解决方案让所有系统操作过程均有效记录留档，回溯有痕，减少员工间纠纷扯皮，让管理不再成为难题",
          },
          {
            title: "岗位间协同优化提升",
            content:
              "此前，每一工作环节需要人工一一通知或自行查看，容易遗漏或耽误订单进程；现在，该解决方案让各工作节点均有效通知到企业内部对应角色，各岗位高效协同，减少工作延误，提高工作效率",
          },
          {
            title: "业务流程可视化",
            content:
              "从客户订舱委托到跟单、费用结算，全程物流可视化，加速业务跟进，方便业务人员及时了解业务进展，并快速处理业务中的每一环节，提效降本",
          },
          {
            title: "服务升级。品牌形象更具高度",
            content:
              "智能回复业务信息，有效提醒客户；统一品牌形象呈现，专业水准的服务品质，客户体验都说好",
          },
        ],
      },
      {
        name: "协同管理整体解决方案",
        code: "solutions/solution-cases",
        list: [
          {
            title: "服务始终在线，客户倍感信赖",
            content: `
              <ul class="list-decimal list-inside flex flex-col gap-y-4">
                <li>业务节点，及时达</li>
                <li>历史邮件，可追溯</li>
                <li>规范服务，可信任</li>
              </ul>
            `,
            imageUrl:
              "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927134532/8a89b002-c035-40e5-b585-c9df84b30552/solution-5-1.png",
          },
          {
            title: "智能发送业务信息，业务跟进如此简单",
            content: `
              <ul class="list-decimal list-inside flex flex-col gap-y-4">
                <li>标准邮件、业务节点自动发送给客户，对外服务标准不用愁</li>
                <li>系统直联邮箱快速回复，轻松回归业务</li>
                <li>一键取值业务，告别无效复制粘贴</li>
              </ul>
            `,
            imageUrl:
              "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927134551/421351ba-c797-4f6e-9ab3-450af337ed1e/solution-5-2.png",
          },
          {
            title: "履约更规范，协同更轻松，告别重复工作",
            content: `
              <ul class="list-decimal list-inside flex flex-col gap-y-4">
                <li>标准岗位跟单表，规范内部履约流程、信息</li>
                <li>跟单表直联订单，确保一致性，减少重复劳动</li>
                <li>内部协同消息有效留存，追溯不再困难</li>
                <li>即时信息直通钉钉，紧急事件@，方便快捷</li>
              </ul>
            `,
            imageUrl:
              "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927134626/78457eca-f872-4537-96e4-0c5245ad474f/solution-5-3.png",
          },
          {
            title: "管理标准沉淀，工作更规范、高效",
            content: `
              <ul class="list-decimal list-inside flex flex-col gap-y-4">
                <li>每个关键业务服务节点，规范可定制</li>
                <li>履约协同流转，分配到人</li>
                <li>归类处理待办，工作效率直线提升</li>
              </ul>
            `,
            imageUrl:
              "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927134702/7bb5e91c-c87f-45f7-a5e0-28153860a7c5/soluton-5-4.png",
          },
        ],
      },
    ],
  },
];

export type ItemType = {
  label: string;
  imageUrl?: string;
  introduction: string;
  code?: string;
};

const SolutionCardList: ItemType[] = [
  {
    label: "货运业务操作",
    imageUrl:
      "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145244/11003ebe-ba01-4aa2-a174-e6326c9ea31c/货运操作.png",
    introduction: "优化订单操作、费率管理、订舱等货代操作，实现线上化智能化",
    code: "case1",
  },
  {
    label: "客户营销与服务",
    imageUrl:
      "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145300/efe4f298-9820-4f77-b6d1-7383d43cd18b/客户营销服务.png",
    introduction: "集成运价管理和CRM销售管理等功能，实现价格策略优化、客户关系深化及个性化服务提供",
    code: "case2",
  },
  {
    label: "智能化与可视化",
    imageUrl:
      "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145323/e140bd50-bc8a-452a-8228-c920c8295109/智能化与可视化.png",
    introduction: "实现货物追踪、数据分析和预测优化，实现运输实时掌握及时决策",
    code: "case3",
  },
  {
    label: "行业生态链接",
    imageUrl:
      "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145339/14c6bbea-69d7-4aff-9f7c-cad03d9ec041/行业生态链接.png",
    introduction: "整合多方面资源，实现信息、资源和客户的生态循环，构建高效协同的行业生态圈，促进信息共享与流程优化",
    code: "case4",
  },
];

const AdvantageCardList: ItemType[] = [
  {
    label: "优化业务流程",
    imageUrl:
      "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927103420/f8402c9e-ba9a-44b4-8f7a-dacbd236b9ef/banner-3-2.jpeg",
    introduction: "集成众多客户成功经验，综合业务需求，改善客户业务操作流程。",
  },
  {
    label: "数据精细化运营",
    imageUrl:
      "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927103420/f8402c9e-ba9a-44b4-8f7a-dacbd236b9ef/banner-3-2.jpeg",
    introduction:
      "业务全过程线上化操作，随时获取符合条件的数据，减少错误及人力投入，精准运营。",
  },
  {
    label: "工作更高效、更智能",
    imageUrl:
      "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927103420/f8402c9e-ba9a-44b4-8f7a-dacbd236b9ef/banner-3-2.jpeg",
    introduction:
      "结合AI、RPA，更多智能自动化的应用和可视化工具，助您简化整个业务流程。",
  },
];

export const AllInOneData = {
  topBanner: {
    label: "为国际物流业务数智化转型量身定制",
    introduction: "单一集成平台，为企业执行各类复杂物流货运业务保驾护航。",
    imageUrl:
      "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145244/11003ebe-ba01-4aa2-a174-e6326c9ea31c/货运操作.png",
  },
  solutionCardList: SolutionCardList,
  advantageCardList: AdvantageCardList,
};

export const AllInOneDetailData: {[key: string]: any} = {
  case1: {
    topBanner: {
      ...SolutionCardList[0],
    },
    advantageCardList: [
      {
        label: "单一平台整合多业务类型",
        introduction:
          "通过一个系统即可支持海整，空运，铁路，跨境等多业务服务类型，满足从业务到财务结算的所有场景需求。",
      },
      {
        label: "以人为本的效率工具",
        introduction:
          "集成多种效率工具，用最简单高效的办公方式，提高工作效率，实时提醒，减少重复工作的消耗。",
      },
      {
        label: "全流程线上化",
        introduction:
          "协同互动在线，审批在线，一个平台完成业务相关工作的聚合，全面实现办公无纸化。",
      },
    ],
    featureList: [
      {
        label: "Control Tower",
        imageUrl:
          "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024144941/f9791f48-2a8c-4891-8ae2-79cc3671a838/1.1.png",
        introduction:
          "老板视图，管理者视图，提供实时的公司经营数据展示，一切让数据说话，管理更轻松个人视图，待办协同，用数据指导每个人的日常工作，用系统规范业务操作流程。",
      },
      {
        label: "全表格工作列表",
        imageUrl:
          "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145045/883c71d4-2a39-4083-afb0-96219c4e6d55/1.2.png",
        introduction:
          "全EXCEL组件，让日常工作回归高效本质，减少系统流程管理而带来的负向增加人员成本问题。",
      },
      {
        label: "全流程线上化",
        imageUrl:
          "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145059/71b3b173-a5d2-42f6-857b-8326990c0638/1.3.png",
        introduction:
          "协同互动在线，审批在线，一个平台完成业务相关工作的聚合，全面实现办公无纸化。",
      },
    ],
    solutionCardList: SolutionCardList.filter((item) => item.code !== "case1"),
  },
  case2: {
    topBanner: {
      ...SolutionCardList[1],
    },
    advantageCardList: [
      {
        label: "多语言货代官网",
        introduction:
          "为您的客户提供运价、订单可视化跟踪查询等服务，提升企业品牌形象。",
      },
      {
        label: "运价管理集成",
        introduction:
          "支持海整，海拼，空运运价的管理维护，电商运价接入，客户询报价一键回复。",
      },
      {
        label: "CRM销售过程管理集成",
        introduction:
          "CRM系统应用集成，为销售赋能，客户转换更轻松。",
      },
    ],
    featureList: [
      {
        label: "小程序营销",
        imageUrl:
          "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145113/94dbc2bb-0d15-4216-a7b5-ea0991e6f44a/2.1.png",
        introduction:
          "转换私域流量，快速获客，提供更加便捷的渠道",
      },
      {
        label: "线上化履约服务",
        imageUrl:
          "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145125/93292454-f1dd-4945-8547-7e027e95f314/2.2.png",
        introduction:
          "在线下单，提单确认，费用确认，账单确认等场景支持，为平台型企业打造完整的线上化客户服务模式。",
      },
      {
        label: "全面客户画像支持",
        imageUrl:
          "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145141/9f509d3f-0604-41dc-8fd1-55f876a1193e/2.3.png",
        introduction:
          "整合销售过程，客户需求、历史订单、海量公开信息，让您全方位了解您的客户，提升转换。",
      },
    ],
    solutionCardList: SolutionCardList.filter((item) => item.code !== "case2"),
  },
  case3: {
    topBanner: {
      ...SolutionCardList[2],
    },
    advantageCardList: [
      {
        label: "AI数字员工",
        introduction:
          "结合大模型能力，创造人机工作协同新趋势。",
      },
      {
        label: "RPA业务自动化",
        introduction:
          "系统融合型RPA机器人，更短的操作链路，更稳定更多的场景支持。",
      },
      {
        label: "可视化服务集成",
        introduction:
          "整合多方数据资源，自主运营，关键结点自动更新业务数据，异常推送，全链路可视化跟踪。",
      },
    ],
    featureList: [
      {
        label: "AI询报价",
        videoUrl:
          "http://go.plvideo.cn/front/video/view?vid=a22313bcc57bbcad498bcebda6dc0a65_a",
        introduction:
          "互动式询报价新体验，轻松完成客户报价全过程。",
      },
      {
        label: "订舱流程自动化",
        videoUrl:
          "http://go.plvideo.cn/front/video/view?vid=a22313bcc58c1adbbc70e2404ab4123e_a",
        introduction:
          "从委托到放舱整个过程，实现无人为干预，省心省力，效率翻倍。",
      },
      {
        label: "可视化数据订阅",
        imageUrl:
          "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241025140646/6dea4fd4-5d62-43f4-baea-400dc4583c04/solution-3-3.png",
        introduction:
          "自动回写关键业务节点，数据变动邮件/OA应用实时通知，可为您的客户定制数据可视化服务。",
      },
    ],
    solutionCardList: SolutionCardList.filter((item) => item.code !== "case3"),
  },
  case4: {
    topBanner: {
      ...SolutionCardList[3],
    },
    advantageCardList: [
      {
        label: "自建EDI数据交换中心",
        introduction:
          "支持承运人，港区码头，EDI平台等对接，实现数据交换。",
      },
      {
        label: "对接平台链接客户及代理",
        introduction:
          "低代码对接平台实现客户及海外代理快速对接，增加您与客户的业务粘性，提升客户满意度。",
      },
      {
        label: "自运营平台客户生态链接",
        introduction:
          "平台内客户业务线上链接，高效协同，为客户创造更多业务价值。",
      },
    ],
    featureList: [
      {
        label: "EDI中心",
        imageUrl:
          "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145156/fdf0d497-8e0c-4eb0-86d6-8e62e524fc5f/4.1.png",
        introduction:
          "已支持XXX个平台，XX家船东等承运人及供应商的订舱，提单， VGM，无纸化等数据交换场景。",
      },
      {
        label: "掌柜互联",
        imageUrl:
          "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145210/4db2a690-2e20-475f-83a9-7b5e6daf5f16/4.2.png",
        introduction:
          "实现平台内运价互联，订单互联，舱单，费用等数据交换场景，线上完成业务撮合沟通。",
      },
      {
        label: "海外代理对接",
        imageUrl:
          "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20241024145222/fdea73b7-3375-4376-aa1d-9e7d6c7da5a9/4.3.png",
        introduction:
          "通过系统直链，完成订单创建，信息回填，业务数据自动报告等场景，体现您的数字化业务能力。",
      },
    ],
    solutionCardList: SolutionCardList.filter((item) => item.code !== "case4"),
  },
};
