import { TTagData } from "@apis/home";

import { SolutionItemType } from "./index";

export const otherSolutions: TTagData = {
  name: "相关解决方案",
  code: "cases/MoreCase",
  list: [
    { title: "Django+Vue+Docker企业OA系统", url: "/solutions/cross" },
    { title: "Django+Vue+Docker企业OA系统", url: "/solutions/cross" },
    { title: "Django+Vue+Docker企业OA系统", url: "/solutions/cross" },
    { title: "Django+Vue+Docker企业OA系统", url: "/solutions/cross" },
  ],
};

export const allData: SolutionItemType[] = [
  {
    name: "All in One 国际物流供应链集成方案",
    code: "allinone",
    bannerUrl: "/solution/banner.png",
    tags: [
      {
        name: "All in One 国际物流供应链集成方案",
        code: "pain-points",
        list: [
          {
            title: "扩大仓库运营规模",
            url: "/solution/pointIcon.png",
            introduction:
              "通过系统和功能之间的紧密集成，自动化劳动密集型的手动流程，最大化库存库位利用率、存储和补货效率，帮助简化流程并提高生产力。",
          },
          {
            title: "确保订单履行和交付",
            url: "/solution/pointIcon.png",
            introduction:
              "通过保持收发货各个环节的可见性，并根据服务级别协议和交付承诺提供详细的仓库指示，从而提高透明度和管控力。",
          },
          {
            title: "避免中断和罚款",
            url: "/solution/pointIcon.png",
            introduction:
              "通过质量保证和检疫功能、条形码跟踪、扫描和验证以及准确及时的数字通信和审计跟踪，降低风险，最大限度减少错误，并履行尽职调查义务。 ",
          },
          {
            title: "提高收入和盈利能力",
            url: "/solution/pointIcon.png",
            introduction:
              "通过系统导向型任务，最大限度利用资源、流程和空间，从而降低成本，增强团队能力；提供增值服务以帮助您提升客户关系价值和粘性。",
          },
        ],
      },
      {
        name: "解决方案特点",
        code: "solution-features",
        list: [
          { title: "解决方案特点1", simpleContent: "78" },
          { title: "解决方案特点2", simpleContent: "100" },
          { title: "解决方案特点3", simpleContent: "100" },
          { title: "解决方案特点4", simpleContent: "100" },
        ],
      },
      {
        name: "",
        code: "solution-cases",
        list: [
          {
            title: "协同集成系统，消除企业信息鸿沟，让业务协同更高效",
            introduction:
              "提供从报价、订单、业务操作、客商管理、财务管理、OA、销售管理、BI等一站式行业应用系统，通过任务驱动，让员工、客户和合作伙伴在一个平台上办公，无论在国内还是在国外，如同在一个办公室里办公。",
            url: "/solution/solution-case.png",
          },
          {
            title:
              "智能依靠智能技术，将人从繁杂的工作中解放出来，让办公更轻松，更高效",
            introduction:
              "智能单证识别技术，轻松识别运价表、托书、对账单等，效率提升20倍； 智能操作，通过机器学习，将经验丰富的老员工经验变为知识，系统自动指导员工开展工作，每一个新人都能轻松驾驭复杂工作。",
            url: "/solution/solution-case.png",
          },
          {
            title: "协同集成系统，消除企业信息鸿沟，让业务协同更高效",
            introduction:
              "提供从报价、订单、业务操作、客商管理、财务管理、OA、销售管理、BI等一站式行业应用系统，通过任务驱动，让员工、客户和合作伙伴在一个平台上办公，无论在国内还是在国外，如同在一个办公室里办公。",
            url: "/solution/solution-case.png",
          },
          {
            title:
              "智能依靠智能技术，将人从繁杂的工作中解放出来，让办公更轻松，更高效",
            introduction:
              "智能单证识别技术，轻松识别运价表、托书、对账单等，效率提升20倍； 智能操作，通过机器学习，将经验丰富的老员工经验变为知识，系统自动指导员工开展工作，每一个新人都能轻松驾驭复杂工作。",
            url: "/solution/solution-case.png",
          },
        ],
      },
      otherSolutions
    ],
  },
  {
    name: "跨境物流一体化方案",
    code: "cross",
    bannerUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927103420/f8402c9e-ba9a-44b4-8f7a-dacbd236b9ef/banner-3-2.jpeg",
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
        code: "solution-features",
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
        code: "solution-cases",
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
            imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927102339/329f861a-8352-42f4-ae87-2e819a60a9d5/solution-2-1.jpeg",
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
            imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927102405/ad1a67cc-b5e9-4931-a15e-d9af4a22c26f/solution-2-2.jpeg",
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
            imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927102424/8e7b1341-41cf-4fdd-8839-bb484bdc566f/solution-2-3.jpeg",
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
            imageUrl: "/solution/solution-case.png",
          },
        ],
      },
      otherSolutions
    ],
  },
  {
    name: "小微货代业务系统方案",
    code: "micro",
    bannerUrl: 'https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927135330/5097d474-2da3-4e9c-9096-b0d63fd2b1b6/banner-3-4.jpeg',
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
          }
        ],
      },
      {
        name: "更适配小微货代业务的解决方案。1000+货代企业选择大掌柜。管理痛点轻松解决，业务效率显著提升",
        code: "solution-features",
        list: [
          { title: "在线协同办公，更敏捷", content: '打破空间/时间限制，团队成员随时随地即可开展在线协作沟通，响应速度直线提升' },
          { title: "一站式数字化管理，更全能", content: '大掌柜业务系统可以适应各类业务流程，提供从业务录入到财务分析的“业财一体化”全流程数字化管理' },
          { title: "无需专人维护，更省钱", content: '采用更简洁明了的大掌柜业务系统，运维成本降低了，资金使用效率提高了，企业效益实现了最大化' },
          { title: "最新功能随享随用，更贴心", content: '紧随市场变化和客户心声，持续优化升级系统功能，改善解决方案，助力企业实现业务一体化' },
        ],
      },
      {
        name: "更好用的小微货代业务系统解决方案。22年信赖优选，一票到底操作便捷，为货代创业者护航梦想",
        code: "solution-cases",
        list: [],
      },
      otherSolutions
    ]
  },
  {
    name: "高效协同办公集成方案",
    code: "efficiency",
    bannerUrl: 'https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927105037/cddf40a5-5322-4af0-9b78-63a921f70fb7/banner-3-5.jpeg',
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
        code: "solution-features",
        list: [
          { title: "操作记录留档。管理更有章法", content: '区别于线下协同，该解决方案让所有系统操作过程均有效记录留档，回溯有痕，减少员工间纠纷扯皮，让管理不再成为难题' },
          { title: "岗位间协同优化提升", content: '此前，每一工作环节需要人工一一通知或自行查看，容易遗漏或耽误订单进程；现在，该解决方案让各工作节点均有效通知到企业内部对应角色，各岗位高效协同，减少工作延误，提高工作效率' },
          { title: "业务流程可视化", content: '从客户订舱委托到跟单、费用结算，全程物流可视化，加速业务跟进，方便业务人员及时了解业务进展，并快速处理业务中的每一环节，提效降本' },
          { title: "服务升级。品牌形象更具高度", content: '智能回复业务信息，有效提醒客户；统一品牌形象呈现，专业水准的服务品质，客户体验都说好' },
        ],
      },
      {
        name: "协同管理整体解决方案",
        code: "solution-cases",
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
            imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927134532/8a89b002-c035-40e5-b585-c9df84b30552/solution-5-1.png,https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927134551/421351ba-c797-4f6e-9ab3-450af337ed1e/solution-5-2.png",
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
            imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927134626/78457eca-f872-4537-96e4-0c5245ad474f/solution-5-3.png",
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
            imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927134702/7bb5e91c-c87f-45f7-a5e0-28153860a7c5/solution-5-4.png",
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
            imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927134720/6265fe09-4ff1-4348-9615-ca07b6ae95ab/solution-5-5.png,https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240927134739/f23f8b46-3aab-44b5-9ec0-a07cd1f55b7c/solution-5-6.png",
          },
        ],
      },
      otherSolutions
    ]
  }
];
