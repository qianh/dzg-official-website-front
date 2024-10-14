import request from "@/utils/request";
import { TContent, TTagData } from "@apis/home";

export type TCaseType =
  | "supply"
  | "manufacture"
  | "sea"
  | "air"
  | "cross"
  | "ship";

export type TCases = TTagData[];

export type TCaseData = {
  bannerUrl: string;
  tags?: TCases;
};

export const allCases: TTagData[] = [
  {
    name: "供应链",
    code: "supply",
    list: [
      {
        id: 100,
        title: "打造数字化透明工厂，传统企业数字转型的新思路！",
        tag: "英科",
        module: "supply",
        imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240920154946/56c8b50d-3139-4002-822c-5a54d03c0ad3/cases-1.jpeg",
        introduction: "大掌柜助力传统企业数字化转型，实现供应链全链路生态建联",
        content: `
          <div class="pt-6"></div>
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923142413/af877fed-f257-4eff-b1a0-c494d5101fcb/cases-p1-2.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923142435/bc52ffdf-9a5f-4381-85c9-8bb4d5cd2498/cases-p1-3.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923142452/cae0a557-25d4-4e4b-808d-478cabea71a4/cases-p1-4.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923142510/fb63f9b8-bffe-4cb2-bc24-d530d0491fc7/cases-p1-5.png" />
          <p>英科医疗科技股份有限公司(简称:英科医疗)是一家致力于医疗器械耗材研发、生产、营销的高科技制造企业，是中国品牌500强，中国制造业企业500强，2021年上市公司百强企业。业务涵盖医用耗材、康养器械、理疗护理等系列产品。产品广泛应用于医疗机构、养老护理机构、家庭日用及其他相关行业。</p>
          <p>英科医疗产品已经远销美洲、欧洲、亚洲、非洲、大洋洲的120+个国家和地区，正在为全球10000+家客户提供着实用的产品和优质的服务。</p>
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240920141808/63a342a1-6c5f-4490-8658-1c06664bf796/cases-p1-1.png" />
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">传统供应链迎来数字化浪潮</div>
          <p>在当今全球化的商业环境中，企业运营的复杂度与日俱增，特别是在医疗用品制造业，如英科医疗这类领军企业，面临着供应链管理上的诸多挑战。尤其是考虑到每个工厂在地理位置、生产规模、技术标准及法规遵循上的差异，使得统一操作规范与确保业务流程的准确性成为了一项艰巨任务。这种多样性不仅可能导致效率低下，还可能引发操作失误，进而影响到产品质量与客户满意度。</p>
          <p>为了在新时代的浪潮中保持竞争力，英科医疗开始探索数字化转型升级，不仅从技术层面的迭代更新，更从企业战略思维、组织文化乃至商业模式的全方位革新。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">转型道路上的数字化小队</div>
          <p>作为传统企业，长久以来习惯于将大量资源倾注于生产线的扩建与优化，然而随着全球市场环境的快速变化和信息技术的飞跃发展，这种侧重物质生产的思维模式逐渐显现出其局限性。</p>
          <p>随着英科医疗在全球生产基地的不断扩充，货物繁多操作流程复杂，生产和销售的协同就成了一个急需解决的问题，尤其是每个工厂的操作规范和要求不同，导致业务操作也经常出错。</p>
          <p>而对实操员工而言，由于长期沉浸在既定的工作流程与环境中，往往形成了较为固定的工作习惯与思维方式，认为数字化转型和提效升级认为那是技术人员的事情，与自己的日常操作无直接关联，不易接纳或主动探索数字化工具带来的可能性。</p>
          <p>在奔赴过程中，英科医疗积极组建了一只数字化小队，在各个工厂选出领头羊，有效激发了全体员工对于数字化转型的热情与参与度。</p>
          <p>在系统上线前，英科医疗携手大掌柜共同深入挖掘企业内部的流程，细致梳理并优化业务流程。这一合作不仅促进了后续系统与业务的无缝融合，更力求通过智能化、自动化手段，达到提升决策效率、增强响应速度、降低成本的综合效应。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">大掌柜助力英科建设数字化透明工厂</div>
          <p>大掌柜为英科医疗量身打造了运输管理系统（TMS），不仅充分考虑了各个口岸的特殊要求与操作规范，还融入了行业最佳实践，确保了业务操作的线上化与标准化。通过集成化的TMS平台，英科医疗能够实现从订单管理、货物追踪、库存控制到运输调度的全链条数字化管理，大大提升了信息的透明度与决策的即时性。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">产销平衡精准管理</div>
          <p>在传统的生产制造与销售流程中，英科医疗因为生产订单与销售订单的匹配不准确，常引发产销量比例失衡的问题，这不仅影响企业的库存管理效率，还可能导致资源浪费与市场响应速度的减缓。</p>
          <p>为应对这一挑战，大掌柜集成TMS和NC系统，构建了从市场需求预测、生产计划制定到最终产品交付的闭环管理体系。当销售部门在NC系统中录入销售订单时，这些信息会被即时传递至TMS系统，后者依据实时的产能情况与物料库存，精确调整生产计划，从而避免了过度生产或生产不足的情况，实现了供需平衡的精准管理。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">业务操作有效协同</div>
          <p>从货物预订舱位、报关处理、费用记录乃至最后的放单环节，所有步骤均实现了线上化操作与数据透明化。这一系列流程的数字化转型，显著提升了各环节的协同效率，减少了以往因信息不对称、人工错误等造成的沟通成本与时间损耗。</p>
          <p>比如，系统可以自动根据货物体积、重量以及要求，智能推荐最优算柜方案；系统可以根据业务操作和时间节点自动触发邮件和单证文件，大大缩短了货物履约操作的时间。</p>
          <p>此外，线上化流程的清晰划分与自动化处理，也为不同业务角色提供了定制化的操作界面，使得每个参与者都能专注于其核心任务，进一步优化了个人与团队的工作效率。例如，财务部门能即时获取到费用发生的信息，进行快速核对与处理，而物流专员则可以集中精力于货物追踪与异常处理，确保供应链的顺畅运行。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">供应商在线协同</div>
          <p>英科医疗和供应商的协同一直线下沟通，因其信息孤岛、操作繁琐以及费用管理不透明等问题，已难以满足现代英科医疗的高效协同需求。</p>
          <p>以车队派单与接单流程为例，信息传递依赖电话、微信登，导致了链路信息的碎片化，每一环节的参与者只能掌握自己直接相关的部分信息，增加了信息误传和遗漏的风险。同样在在费用管理方面，传统模式同样面临着严峻挑战。由于结算过程大多依赖手工处理和纸质单据，不仅费用明细的记录容易出错，而且审核流程冗长复杂。财务人员需要花费大量时间核对发票、对账单等纸质文件，这一过程不仅耗时费力，还可能导致费用透明度降低，合作双方对于费用构成的理解出现偏差，影响信任基础和长期合作关系的建立。</p>
          <p>在全球化竞争加剧的今天，英科医疗构建了新型供应商协同体系，实现供应商在线接单，信息维护，实时追踪货物状态、精确管理费用，从而大幅提升协同效率，降低成本，增强供应链的整体韧性和竞争力。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">数据实时同步</div>
          <p>为了满足业务需求，英科医疗引入了各类系统，NC,TMS.OMS,钉钉.....系统之间相互割裂，信息流通困难。</p>
          <p>定制版TMS系统的引入，有效解决了英科医疗信息孤岛问题，实现了数据的无缝流通与共享，这一变革不仅减少了人工错误，提高了工作效率，还为英科医疗提供了强大的数据分析能力，使其能基于实时数据做出更加精准的业务预测与资源配置决策。系统的灵活性设计，确保了英科医疗能够快速适应市场变化与内部发展需求，持续优化其全球供应链网络。</p>
          <p>英科医疗与大掌柜的携手合作，不仅是一次对传统运营模式的深刻革新，更是对未来趋势的精准把握。通过这一系列举措，英科医疗正逐步构建起一个高效、灵活且可持续发展的数字化生态系统，为企业长远发展奠定坚实基础，同时也为同行业乃至更广泛的企业群体提供了宝贵的转型范例与启示。</p>
        `,
      },
    ],
  },
  {
    name: "制造业",
    code: "manufacture",
    list: [
      {
        id: 200,
        title: "大掌柜助力环世物流集团全业务数字化转型升级2",
        tag: "Worldwide Logistics",
        module: "manufacture",
        url: "/home/case-demo.png",
        introduction:
          "大掌柜全面升级环世物流集团全业务系统，助力环世集团高效开展全球数字化业务。",
      },
    ],
  },
  {
    name: "空运",
    code: "air",
    list: [
      {
        id: 300,
        title: "解码核心痛点，缔造高效跨境物流生态：技术桥接与流程重塑",
        tag: "瑞升",
        module: "air",
        imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923151858/2efbc6b9-c4e4-4cd7-ae9d-d8e3e9530d22/cases-3.jpeg",
        introduction: "跨越平台壁垒，赋能跨境物流新纪元：大掌柜助力瑞升国际优化快递航空业务",
        content: `
          <div class="pt-6"></div>
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923152317/5e4eb67c-e771-493a-8445-fa47d1c15eca/cases-p3-1.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923152333/5477756b-4584-44ff-8e2f-36312da3023f/cases-p3-2.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923152353/a727e546-6dd7-4438-9a06-e6aaddee4939/cases-p3-3.png" />
          <p>杭州瑞升国际货运代理有限公司成立于2005年7月，是经国家审批的一级货运代理企业，持有IATA销售代理、交通部无船承运及国家邮政快递经营许可的权威资质，专注于提供全方位的国际物流解决方案。业务范畴广泛覆盖国际海运整箱/拼箱、空运普货/跨境快件、多式联运、门到门物流、报关报检、仓储运输等，构建了全球化的服务网络。</p>
          <p>空运服务方面，作为港龙航空、长荣航空、荷兰皇家航空等多家知名航空公司的一级代理，不仅拥有市场上极具竞争力的价格优势，更确保了旺季舱位的稳定供应。公司在杭州萧山国际机场设立的现场办公室，能高效处理货物进出时各种现场问题，并通过上海浦东与杭州萧山机场的海关监管卡车服务，为客户提供便捷的转关操作。此外，与东方航空、亚洲航空、瑞士航空等航空公司的稳定合作；在全球150多个国家、超过200个港口都拥有成熟的港口代理。公司致力于满足客户从门到门进出口的多元化需求，能够为全球客户提供定制化、端到端的物流服务。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">电商跨境新航线：传统空运的数字化转型</div>
          <p>随着跨境电商的蓬勃发展，跨境物流需求日益增长，对服务的时效性和准确性提出了更高要求。传统空运企业面临着业务模式的转型压力，需要适应小件货物的跨境运输需求，提升信息化水平，确保数据的准确性和实时性，以满足电商平台的严格要求。</p>
          <p>瑞升公司，决心拓展跨境电商空运小件运输业务，正通过系统升级和内部流程优化，积极应对行业挑战。公司正在逐步满足市场对业务及时性、信息化和数据准确性的要求，通过技术手段提升操作效率，减少人工操作成本，并通过系统数据的整合，提供有效的经营数据指标，实现业务风险的提前预警。</p>
          <p>瑞升的业务转型不仅是对内部流程的优化，也是对外部市场变化的积极响应。通过这一系列措施，瑞升旨在提升客户服务体验，确保在跨境电商物流领域中保持竞争力，同时为公司带来新的增长机遇。在这一转型过程中，瑞升展现了其对行业趋势的敏锐洞察力和对技术升级的坚定决心，有望在跨境电商物流领域占据先机。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">全面优化业务流程，实现端到端覆盖，赋能行业解决方案</div>
          <p>在跨境电商的浪潮中，瑞升公司正积极推进业务模式的革新，将传统的空运服务向跨境电商小件领域延伸。公司高层亲自挂帅，带领专业团队细致优化每个业务流程，确保从操作到管理的每个细节都能实现高效协同和精准执行。瑞升期望通过新系统的引入，不仅巩固传统空运业务，更能灵活应对跨境电商小件的个性化需求，同时预留空间以适应行业未来的发展。</p>
          <p>作为瑞升的系统合作伙伴，大掌柜提供了深入的业务流程规划和精细的作业流程设计，确保系统全面覆盖业务的每个环节。系统与电商平台的无缝对接，实现了数据的实时汇聚和服务履约的精确追踪，移动端的扩展应用进一步提升了操作的便捷性。大掌柜系统的全面部署，从现场操作到战略规划，为瑞升提供了坚实的技术支持，确保公司能够与客户共同探索市场新趋势，并为未来的扩展做好准备。这些综合措施将助力瑞升提升服务品质，保持行业领先地位，开创业务发展的新篇章。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">数字化升级，增强跨境小件业务，提升效率与市场竞争力</div>
          <p>瑞升公司，凭借其在物流领域的深厚实力，已成为多家电商平台的跨境小件物流服务商。面对业务量的激增，原有获取订单方式、线下共享表格跟单和机器人搬运单据的业务模式和多系统操作的复杂性逐渐成为制约发展的瓶颈。电商平台对物流的即时性、信息化水平和数据精确度的高标准，迫切要求瑞升进行业务模式的革新。</p>
          <p>在这样的背景下，大掌柜系统的升级为瑞升带来了革命性的变革。大掌柜在原有操作系统的基础上，新增了跨境平台专属板块，通过接口直接打通电商平台，实现订单包裹数据的即时获取。这一改进不仅提高了数据的实时性，还确保了履约服务节点能够及时回传物流轨迹信息和费用结算信息，极大地提升了业务的透明度和客户的信任度。</p>
          <p>对于那些暂时无法实现系统对接的平台，提供批量导入订单包裹的功能，提升业务的便捷性、操作统一性；同时针对后续履约环节提供对应的数据导出功能，降低线下清洗轨迹、回传数据的成本，提高数据的准确性。此外，大掌柜系统还提供了运营管理的统一视图，覆盖了现场操作的各个方面，使得瑞升能够更加灵活地应对市场变化和客户需求。</p>
          <p>通过大掌柜系统的升级和优化，瑞升公司不仅能够提升现有服务质量，还能够在未来的市场中保持竞争力，引领行业发展，为跨境电商物流服务树立新的标杆。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">瑞升物流携手大掌柜，以移动协同革新空运业务，推动行业标准化新篇章</div>
          <p>在空运业务的快节奏环境中，瑞升公司面临着现场操作的忙乱、客户异常情况的频繁发生以及信息反馈的不及时性等挑战。为了提高航站操作人员与公司内部操作人员之间的协同效率，瑞升曾采用共享表格跟单的方式，试图缓解这些问题。但这种方法并未从根本上解决问题，信息沟通的误差和沟通成本依然居高不下，影响了整体的工作效率和客户满意度。</p>
          <p>大掌柜系统的移动协同端应时而生，它专为航站现场作业设计，旨在彻底改变现场操作的混乱状态。通过这个移动端，大掌柜系统能够清晰地照亮信息的每一个暗角，有效破解协同沟通的低效瓶颈，同时应对管理上的挑战，构建一个高效和谐的运营生态系统。</p>
          <p>此方案的核心在于提升前线执行者的工作效率，通过优化操作流程、实施监控和建立预警机制，大掌柜系统创造了一个无障碍、高效运转的工作环境。这不仅提高了员工的工作满意度，也增强了他们对工作的掌控感和成就感。</p>
          <p>在设计上，大掌柜系统展现了高度的灵活性和深度的可配置性，这使得它能够迅速适应市场的变化，满足并超越客户对高标准服务的需求。瑞升公司通过采用大掌柜系统，不仅提升了航站操作的便捷性和效率，也为公司在激烈的市场竞争中赢得了先机，为客户提供了更加可靠和高效的服务。</p>
        `  
      },
    ],
  },
  {
    name: "海运",
    code: "sea",
    list: [
      {
        id: 400,
        title: "携手成长好伙伴——大掌柜助力安信航应对扩张期难题",
        tag: "安信航",
        module: "sea",
        imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923155443/2c0a30d7-90dc-4c14-97d0-b415a3f16d83/cases-4.jpeg",
        introduction: "如何做好业务&服务管理是企业扩张期时难以避免的问题，大掌柜通过多年行业经验分享和不断创新的技术力量，助力安信航向数字化未来迈进！",
        content: `
          <div class="pt-6"></div>
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923154829/2a998f41-cf60-4d67-8066-2e29e3c83923/cases-p4-1.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923154845/f05f3410-d277-4df8-b8ac-9988e5536f6d/cases-p4-2.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923154902/f6dd4055-ab0b-497a-9055-e17a0ebadcfd/cases-p4-3.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923154919/3132485f-973d-4d7c-bafc-3b2aafbfe9c7/cases-p4-4.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923154937/50c912f1-cff9-4d36-a176-10e4b2a1705e/cases-p4-5.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923154955/7d33f1c5-fb15-4596-8ede-4c668af2c07b/cases-p4-6.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923155014/641ade09-0649-491d-8dd9-21a2b1e65c09/cases-p4-7.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923155030/9c5b54f0-161b-41ec-800e-47199629fa50/cases-p4-8.png" />
          <div class="text-xl font-bold py-2">关于安信航</div>
          <p>深圳安信航国际货运代理有限公司，成立于2020年，位于广东省深圳市，经营范围包括航空、海上、陆路、多式联运国际及国内货运代理等多种类型，是一家以<span class="text-blue-500">从事多式联运和运输代理业</span>为主的企业。</p>
          <p>安信航秉承着“客户至上”的原则，致力于利用科技和数据手段为客户提供一站式综合物流解决方案和超预期的优质服务。同时，安信航坚信企业的长远健康发展离不开团队建设，相信“只有员工快乐才能带动企业更好发展”，把每一位团队成员的成长视为重中之重。</p>
          <p>短短几年间，安信航业务量和人员量逐年成倍增长。在中国外贸趋势下行的2023年，安信航逆势增长，从最初的5个成员扩大到200+，年成交量突破80000T。2024年，安信航成立上海分公司，进一步拓展业务版图。</p>
          <p>随着安信航业务量的显著跃升，公司正处于一个急速扩张的转折点，这无疑对订单管理的效率与服务质量提出了更高要求。如何高效地处理更多订单、同时维持一流的服务质量，成为了亟待解决的挑战。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">邮件标准化&智能化，凸显更专业的企业形象</div>
          <p>邮件智能化是现代企业提升工作效率、优化内部管理流程的重要工具之一。通过使用大掌柜的升级邮件功能，可自动获取订单信息，极大地减轻了员工的维护负担，还减少了因人工操作失误导致的信息错漏，提升了数据的准确性和可靠性。同时支持即时生成附件，确保了订单相关信息能够被迅速整理成企业所需的规范文件，如PDF或EXCEL表格等，随选择的邮件内容自动生成，直接对外发送，加强了内外的沟通效率。邮件自动推送功能也进一步简化了工作流程。根据预设规则，系统能自动识别订单状态或特定条件，触发邮件通知给相应的团队成员或客户，比如订舱确认、开船通知、提单确认等等。这不仅保证了信息的及时传达，还让团队成员可以更专注于需要人工决策和高价值任务上，而非日常的重复性邮件发送工作。</p>
          <p>邮件标准化，企业能够在对外沟通中展现出一致性与专业性，确保外发邮件能遵循统一的格式、语言风格，不仅能够有效强化自身的品牌识别度，清晰、规范的邮件格式也有助于收件人快速抓住重点信息，提升信息传递的效率。同时，标准化模版可直接套用，也提高了员工在撰写邮件时的工作效率，减少了新员工的培训成本，在内部管理、效率提升和塑造专业品牌形象等方面获得有效改善，是提升企业综合竞争力的有效策略之一。</p>
          <p>更值得注意的是，大掌柜紧密贴合货代行业的特有习惯，通过对历史邮件交互模式的智能融入，加速推动行业的数字化转型进程，注入创新发展的动力。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">订单管理线上化</div>
          <p>在货代行业里，大部分员工都会有自己的线下“订单跟踪表”，来提醒自己跟进订单的相关事项。大掌柜通过协助企业进行业务流程的梳理，订单处理流程标准化之后，基于企业日常的操作习惯，生成企业所需的“线上跟踪表”，实现订单信息的自动化抓取与录入。这意味着员工无需在多个平台间切换，直接在线上表格内即可完成订单数据的修改与新增，而这些改动在经过系统的智能校验后，会即刻反映在订单详情中，确保了数据的一致性与准确性。该系统全面支持线下表格的各种实用功能，包括但不限于快速填充数据、智能化筛选与排序、醒目的颜色标记以及灵活的个人笔记与团队协同备注，极大地简化了操作步骤，确保了订单详情的实时更新与进程的透明化掌控，极大提升了订单管理效率。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">订单流转自动化</div>
          <p>通过大掌柜待办功能，企业能够显著提升其内部管理效率与执行力，它能够紧密跟随订单从接收到完成的每一个流转环节，自动触发相应的提醒通知给到负责的相关员工。这意味着，无论订单状态发生何种变化——比如从审核通过转为待订舱，或是需要客户反馈确认等关键节点——系统都能立即识别并分配任务，确保员工能够及时获得通知，无需人工监控每个细节，大大减轻了管理负担。</p>
          <p>在员工层面，这样的自动化待办事项不仅清晰展示了他们每日的工作重点和进度，也可以根据需要区分出不同紧急程度的待办事项。这种安排使得个人时间管理和工作效率得到极大优化，员工能更加聚焦于手头最重要的工作，有效避免了因任务混淆或优先级判断错误而导致的延误。</p>
          <p>更进一步，大掌柜待办功能还促进了团队间的透明沟通与协作。管理者可以轻松查看团队成员的任务完成情况及工作效率，及时发现潜在的瓶颈或延误，并采取相应措施调整资源分配，确保项目整体进度不受影响。同时，系统的自动提醒机制有效减少了因人为遗忘或信息传递不畅而引发的错误，从而降低了企业的运营成本和风险，提高了客户满意度。</p>
          <p>待办功能不仅让员工的日常任务管理变得简单高效，还为企业构建了一个更加流畅、响应迅速的工作流程体系，是提升企业运营效率、增强竞争力的有效工具。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">订单协同透明化</div>
          <p>员工借助于高效的消息列表功能，在处理订单业务时能够实现无缝且高效的沟通协作，不仅让团队成员可以直接查看并讨论与该订单相关的所有细节，而且通过@提及功能，可以精准地将信息推送至相关责任人的办公软件中，无论是桌面端还是移动端，确保关键信息即时传达，一旦被@的人员阅读了消息，系统会自动标记为“已读”，其他团队成员也能立刻看到这一状态更新，大大增强了团队内部的信息透明度和责任感，确保每个人都保持同步，有效避免了信息孤岛和重复工作的问题。</p>
          <p>更进一步，消息列表能够自动监控订单的状态变化，并在检测到如订单利润预警等关键信息时，立即触发通知给相应的责任人。这种主动式的警报体系，确保团队能够迅速聚焦于需要紧急处理的问题上。此外，该消息列表可以回溯订单相关沟通，这对于复盘分析订单过程、总结经验教训、优化工作流程具有一定价值。通过这样的技术赋能，企业不仅提升了运营效率，还构建了一个更加开放、透明和高效的团队合作环境，为企业的持续发展和竞争力的增强奠定了坚实的基础。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">放单收款更有保障</div>
          <p>在当今快速变化的商业环境中，企业面临着诸多挑战，其中之一便是如何高效且准确地管理客户信用风险，以维护财务稳定与业务可持续发展。通过信控升级功能，凭借其智能化的异常识别功能，成为企业风控管理的得力助手。</p>
          <p>通过企业定义好的信控异常规则进行设置，全天候地监测客户交易行为和信用状况，更新异常情况，让财务团队和销售前线能够直观地了解到哪些客户需要特别关注或采取预先干预措施。这种即时反馈机制极大地缩短了问题识别到解决的时间差，为防止坏账累积筑起了一道有力的防线。通过及时有效的沟通和协调，许多信用问题得以在萌芽阶段就被化解，既维护了客户关系的和谐，又保护了企业的经济利益。</p>
          <p>从另一角度看，这一功能的应用也显著减轻了财务部门的工作负担，尤其是繁重的手动数据审核与异常筛查任务。它优化了过往依赖人工监控的低效流程，将财务人员从重复劳动中解放出来，使他们能将更多精力投入到更高价值的工作中去。不仅提升了工作效率，还有效降低了因人为疏忽可能导致的财务风险，为企业的长期发展和财务健康构建了坚实的防护网。</p>
        `,
      },
    ],
  },
  {
    name: "跨境",
    code: "cross",
    list: [
      {
        id: 500,
        title: "跨越人力瓶颈：构建智能化跨境电商解决方案，实现资源优化与运营精进",
        tag: "环世物流供应链",
        module: "cross",
        imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923160434/8d05d78a-8a84-448c-9d6e-07e6f174b929/cases-5.jpeg",
        introduction: "大掌柜助力环世通过数字化解决方案，培养专业人才，打造跨境电商仓配服务的领导品牌",
        content: `
          <div class="pt-6"></div>
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923160500/089e4e43-2e88-48a0-ac05-17f2ec53a6fa/cases-p5-1.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923160516/1d18c0b5-f4ef-4548-b146-22f9eefcf3cd/cases-p5-2.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923160535/60a096a4-a0b7-4dec-af92-df42894a0b65/cases-p5-3.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923160556/45fa56dd-7912-4133-bbbf-458b5efde386/cases-p5-4.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923160613/beb84ae7-d642-463f-9d0d-64f718782935/cases-p5-5.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923160633/8864180b-6d64-419d-bf2b-99f22001d52b/cases-p5-6.png" />
          <p>环世物流创立于2001年，全球员工超过1900名，是国家5A级物流企业，拥有国际货代物流行业最高信用等级3A级资质，通过海关AEO高级认证。集团荣列中国物流企业排行榜第23位；中国服务业企业500强第383位；上海民营企业百强第38位，Transport Topics “Top 50 Global Freight“ 排行榜中，环世物流海运集装箱运输货运量位列全球13名。</p>
          <p>环世海外仓，依托于环世物流的深厚基业并积极拓展，精心构筑的跨境海外仓储配送业务板块，旨在为跨境电商平台的商家铺设一条横跨国际的供应链绿色通道。公司专精于提供超越传统界限的第三方仓储解决方案，集成了存储优化、高效订单执行及精细化终端配送服务，旨在构建一个精密协调且全面覆盖的服务生态系统。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">领航海外仓储，铸就跨境服务先锋</div>
          <p>在跨境电商的浪潮中，环世供应链勇敢地迈出了重要一步，决心在海外仓运营领域占据领先地位。面对激烈的市场竞争，他们从零开始，不仅建立了一套强大的系统，还打造了一支精英团队。</p>
          <p>起步之初，他们遇到客户资源稀缺、系统支持不足和缺乏专业团队等重重困难。但这些挑战反而激发了他们的决心和创新精神。在大掌柜系统的专业支持下，环世供应链不仅构建了强大的海外仓运营系统，更团队从行业新手成长为专业能手。</p>
          <p>环世供应链的每一次进步，都是对卓越的执着追求，致力于利用大掌柜系统的深度整合和智能技术，为客户提供无与伦比的海外仓储服务。他们的目标是成为跨境电商领域最可靠的伙伴，与客户一起探索更广阔的全球市场，共同书写成功的故事。</p>
          <p>在海外仓的赛道上，环世供应链的每一步都是对创新、服务和成功的坚定承诺。不仅开启了新的篇章，更展现了对未来的无限憧憬。从0到1的跨越，不仅是一个开始，更是一个承诺——对创新的承诺，对服务的承诺，对成功的承诺。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">资源生态站：智能化管理工具的集大成者，驱动企业高效运作与协同创新</div>
          <p>在跨境电商的快速发展中，海外仓库的布局和管理变得尤为关键。环世供应链面对的挑战在于如何有效整合和管理众多的资源，以满足日益增长的客户需求和复杂的业务场景。大掌柜系统提供了一个全面的解决方案，通过构建高度互联且灵活的资源生态系统，强化了ERP、WMS及尾程打单的集成，特别强调了API的广泛适配，以实现多系统间的高效、无缝对接，确保信息的自由流动。</p>
          <p>大掌柜系统通过智能化的资源管理，不仅降低了新系统对接的成本，还加深了系统间的链接，确保了信息流转的精准和迅速。系统提供的智能管理工具，能够根据运营策略实时计算出最优的服务产品搭配方案，既满足了客户的个性化需求，也为环世供应链的资源管理提供了强大的赋能。内部管理上，致力于业务流程智能化革新，引入先进自动化工具，如智能调度与预见性分析模型，旨在减少人工干预成本，提速决策过程并提升其精确性。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">一站式跨境电商海外仓运营，定制化解决方案助力企业高效出海</div>
          <p>环世供应链致力于提供全面的海外仓履约服务，并将其与自有的头程服务相结合，包括环世海运和CD段拖车等业务，为客户打造一站式的跨境电商全链路服务体验。不仅协助客户和第三方车队完成仓库预约送仓业务，还积极处理各种异常情况，确保客户享受到无微不至的服务。</p>
          <p>大掌柜系统进一步优化海外仓运营系统与头程CD预约系统的整合，使得环世供应链的两个业务团队能够无缝协作，减少无效沟通，从而显著提升客户服务的质量和效率。对于客户的第三方车队，我们也提供了便捷的系统预约入口，有效降低客户与车队之间的沟通成本和信息误差，确保预约送仓过程的顺畅和准时。</p>
          <p>此外，大掌柜系统还配备了全面的日志监控和故障预警机制，如同不眠不休的数字守护者，对预约送仓、提空还柜等关键节点进行实时监控，预防可能的滞留费用，保护环世供应链和客户的共同利益。通过这些措施，不仅提高了运营效率，还进一步巩固了客户的信任和满意度，为跨境电商的未来发展奠定了坚实的基础。</p>
          <div class="text-orange-500 text-lg pt-8 pb-2 font-medium">玩转跨境电商服务，培育行业运营精英</div>
          <p>环世供应链与大掌柜系统的合作，是跨境电商领域中一个创新的里程碑。环世供应链凭借其在海外仓运营的专业知识和资源，结合大掌柜系统提供的先进数字化解决方案，共同打造了一个强大的服务生态系统。这个系统不仅提高了运营效率，降低了成本，更重要的是，它为客户提供了一种全新的、个性化的服务体验。</p>
          <p>环世供应链通过大掌柜系统，实现了从订单处理到物流追踪，再到库存管理等关键环节的智能化管理。这种全链路的监控和优化，使得环世供应链能够快速响应市场变化，及时调整运营策略，确保了服务的高效率和高品质。同时，大掌柜系统的智能化预警和异常处理机制，为环世供应链提供了一个可靠的风险管理工具，确保了业务的稳定运行。</p>
          <p>此外，大掌柜系统的数据分析和可视化功能，为环世供应链的决策提供了强有力的支持。通过这些工具，环世供应链能够更深入地理解市场和客户需求，从而提供更加精准和个性化的服务。这种深度的数据分析和洞察，使得环世供应链在激烈的市场竞争中保持了领先地位。</p>
          <p>环世供应链和大掌柜系统的合作，不仅为客户带来了实实在在的价值，也为整个跨境电商行业的数字化转型提供了一个成功的案例。通过这种合作，环世供应链展示了其在跨境电商服务领域的专业能力和创新精神，同时也证明了大掌柜系统在提供高效、可靠服务方面的卓越能力。</p>
        `
      },
    ],
  },
  {
    name: "船代船司",
    code: "ship",
    list: [
      {
        id: 600,
        title: "数字化转型与客户服务优化的深度实践",
        tag: "中联",
        module: "ship",
        imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240920154242/13d4c38b-6823-4603-8c35-54c1a91caf81/cases-6.jpeg",
        introduction: "大掌柜助力中联物流共创只会物流未来",
        content: `
          <div class="pt-6"></div>
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923161437/8c16a9bb-c982-4d4f-afd5-586a9a2bc97b/cases-p6-2.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923161454/810b03da-b0db-4d85-831b-50a46c148d49/cases-p6-3.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923161512/1d597b11-68bd-4e6d-884d-537ae8d7c5c0/cases-p6-4.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240923161531/d0da2491-1b67-4643-bcf2-38a112afa043/cases-p6-5.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240920154316/5eeb2f06-a6dd-4a2d-85fe-921f0b4bfcf8/cases-p6-1.png" class="py-4" />
          <p>中联运通控股集团上海国际物流有限公司（中文简称“中联物流”，英文简称“Unitrans Logistics”），作为中联运通控股集团旗下的全资分支机构，自2021年携手大掌柜启动合作以来，成功构筑了中联国际物流线上客户服务平台。</p>
          <p>平台旨在构建一套全面的客户线上可视化服务体系，囊括在线舱位预订、电子单证确认及在线费用审核等核心功能，实现了业务操作的无缝衔接与高度透明化。通过采用大掌柜先进的数字化解决方案，中联物流不仅优化了内部服务流程，还确保了客户体验的全周期可视化，显著提升了针对客户需求的即时反馈与响应能力。</p>
          <p>坚守以科技创新重塑传统物流业态的初衷，中联物流致力于串联物流链路上的关键节点，为货运企业精心打造一个集高效性、便捷性与成本效益于一体的多元化产品及服务体系。公司矢志不渝地追求以“新平台、芯技术、用心成就你我”的理念，赋能行业伙伴，共筑物流行业的智慧未来。</p>
          <p>依托母集团的强大背景与卓越的市场声誉，中联物流已与诸多国际集装箱班轮企业建立起稳固而持久的战略合作伙伴关系。公司矢志不渝地致力于利用数字化技术革新传统物流生态，通过智能化链接物流链上的核心节点，旨在为货运企业量身打造高效性、便捷性和成本效益兼备的多元化物流解决方案与增值服务，推动行业向更深层次的数字化转型迈进。</p>
          <div class="text-orange-500 text-base pt-8 pb-2 font-medium">面向同行货代的电子订舱平台</div>
          <p>中联上海物流的数字化订舱平台，深度融合了广泛而多元的海运资源，携手包括ASL、CUL、COSCO、CMA CGM、ESL、EVG、HMM、HPL、IAL、Jinjiang Shipping、KMTC、MCC、MSC、Maersk、ONE、OOCL、PIL、Sealane、SITC、SFT、SML、SNL、TFL、TSL、TMS、WHL、YML及ZIM在内的众多国际航运巨头，构建起一个高效协同的物流生态系统。该平台与大掌柜先进的数字化营销界面无缝对接，不仅赋能用户实现在线舱位预订与代理结算的一站式服务，还通过智能化的数据交互机制，大幅度削减了跨系统操作中的人工数据维护与重复录入环节，从而显著优化了订舱流程，提升了作业效率，引领行业向更高层次的自动化与智能化转型。
在当今数字化转型的浪潮中，客户自助服务已成为众多行业提升效率、优化用户体验的重要途径。中联门户作为这一趋势的践行者，为用户提供了便捷、高效的数据提交与管理平台，不仅简化了传统下单流程，还增强了客户的参与度与控制力。</p>
          <div class="text-orange-500 text-base pt-8 pb-2 font-medium">客户数据提交的灵活性与便捷性</div>
          <p>登录中联门户网站后，客户可以根据自身需求，灵活选择数据提交方式。一方面，对于偏好直接输入信息的用户，网站界面设计友好，引导清晰，确保用户能够轻松地手工填写所有必要数据。这一过程不仅直观，而且即时反馈机制能有效减少输入错误，提升数据准确性。另一方面，针对拥有大量或结构化数据的客户，系统支持批量上传功能，只需按照预先设定的文件格式（如舱单、提单等）准备数据，即可实现快速上传，大大节省了时间与人力成本。</p>
          <div class="text-orange-500 text-base pt-8 pb-2 font-medium">实时订单跟踪与数据维护透明化</div>
          <p>中联门户的一大亮点在于其提供的订单进度追踪功能。一旦数据提交成功，客户即可在个人账户中实时查看订单处理状态，从数据审核、处理到完成的每一步都有明确的时间节点和详细说明。这种透明化的流程设计，让客户随时掌握项目动态，增强了服务的可靠性和信任感。此外，系统还自动记录每一次的数据维护操作，无论是更新还是修正，都留有可追溯的痕迹，便于客户回顾历史更改，确保数据管理的连续性和安全性。</p>
          <div class="text-orange-500 text-base pt-8 pb-2 font-medium">强化客户自主权与体验优化</div>
          <p>通过赋予客户自助下单和数据管理的能力，中联门户实际上是在强化用户的自主权。客户不再受限于工作时间或地理位置，随时随地都能高效地完成业务操作，这种灵活性在快节奏的商业环境中尤为重要。同时，平台还可能集成智能推荐系统或数据分析工具，基于客户提交的历史数据提供个性化的建议和服务，进一步提升用户体验，形成良性互动循环。</p>
          <p>中联门户通过构建一个集数据提交、订单跟踪与数据维护记录于一体的自助服务平台，不仅提升了服务效率，也深化了与客户的互动关系。这一模式不仅展现了技术赋能服务创新的潜力，更标志着向更加人性化、智能化客户服务体验的迈进。随着技术的不断进步和用户需求的日益多元化，中联门户及其同类平台将持续优化升级，引领数字时代客户服务的新潮流。</p>
          <div class="text-orange-500 text-base pt-8 pb-2 font-medium">系统自动化的优势</div>
          <p>在当今快节奏的商业环境中，高效且准确的信息传递是确保业务流程顺畅运行的关键。邮件自动推送通知系统作为一种智能化的通讯解决方案，在中联公司的日常运营中扮演了至关重要的角色。该系统的设计旨在优化客户体验，增强内部沟通效率，同时维护和提升企业品牌形象。</p>
          <p>通过在内部操作人员完成关键任务后（例如订舱、放舱、提交提单信息等）自动触发邮件通知，此系统有效解决了人工发送邮件可能带来的遗漏或延误问题。自动化不仅大幅减少了人为错误，还确保了信息传递的即时性，使得客户能够第一时间获得最新进展，从而做出相应决策或安排，提升了整体的服务响应速度和客户满意度。</p>
          <div class="text-orange-500 text-base pt-8 pb-2 font-medium">标准化邮件内容：塑造专业形象</div>
          <p>邮件自动推送通知功能采用预设的标准化模板，统一了对外沟通的格式与语言风格，每一封发出的邮件都经过精心设计，既体现了公司的专业性，也维护了品牌一致性。这种标准化不仅简化了操作流程，降低了个性化撰写邮件所需的时间成本，还能够在每一次互动中强化客户的认知，构建起统一且专业的公司形象。</p>
          <p>在大掌柜系统支持上，中联公司实施的邮件自动推送通知，不仅是一项技术上的革新，更是对客户服务理念的深刻体现。它通过高度自动化、标准化的操作，不仅提高了工作效率，还加强了与客户的互动质量，展现了公司在数字化转型道路上的前瞻性和执行力。未来，随着技术的不断进步和市场环境的变化，中联公司将继续探索和应用更多创新手段，为客户提供更加卓越的服务体验。</p>
          <div class="text-orange-500 text-base pt-8 pb-2 font-medium">自动触发报文发送的优势</div>
          <p>报文自动发送机制，极大地优化了数据交换与通信的效率，是实现智能化管理和运营的关键技术。该机制通过预设的逻辑判断与规则匹配，确保在特定条件达到时，无需人工介入，系统即可自动执行报文的生成与发送任务，这一过程不仅显著提升了工作效率，还减少了人为错误，增强了业务流程的稳定性和可靠性。</p>
          <p>自动发送报文的过程基于一套精心设计的触发规则体系。这些规则可以是时间驱动（如定时任务）、事件驱动（如完成某个业务操作后）、数据阈值达到特定条件等。系统持续监控预定义的条件状态，一旦满足设定标准，即刻激活报文生成与传输流程。例如，在供应链管理系统中，当库存水平降至预警线时，系统自动发送补货请求至供应商，整个过程无缝衔接，保证了供应链的高效运作。</p>
          <div class="text-xl pt-8 pb-2 font-medium">提升自动化流程效率</div>
          <div>
            <ul class="text-lg list-decimal list-inside">
              <li class="py-1"><span class="font-bold">减少人为干预：</span>自动化发送避免了人工检查、手动触发报文的操作，减轻了工作人员的负担，使他们能够专注于更高价值的任务。</li>
              <li class="py-1"><span class="font-bold">增强时效性：</span>即时响应业务需求或外部变化，快速传递信息，缩短了决策与行动之间的时间差，提升了企业的响应速度。</li>
              <li class="py-1"><span class="font-bold">提高准确性：</span>自动化流程减少了人为错误，确保信息的准确无误，这对于金融交易、医疗健康等领域尤为重要，其中错误可能导致重大损失或影响。</li>
              <li class="py-1"><span class="font-bold">可扩展性和灵活性：</span>随着业务需求的变化，自动发送规则可以灵活调整，轻松适应新场景，为企业的持续发展提供技术支持。</li>
            </ul>
          </div>
          <p>报文自动发送机制作为提升业务流程自动化水平的关键工具，不仅提高了工作效率和数据准确性，还为企业数字化转型提供了坚实的基础，是现代信息管理不可或缺的一部分。随着技术的不断进步，其应用范围和效能还将进一步拓展，为企业带来更加深远的影响。</p>
          <div class="text-orange-500 text-2xl pt-8 pb-2 font-medium">中联国际物流与大掌柜携手共进</div>
          <p>在当今全球化的经济版图中，物流行业作为连接世界贸易的纽带，其重要性不言而喻。中联国际物流，作为业内知名的物流解决方案提供商，与大掌柜科技的强强联合，不仅标志着物流与科技深度融合的新篇章，更是对全球供应链优化升级的一次积极探索。</p>
          <p>中联国际物流，凭借其广泛的全球网络、深厚的行业经验和高效的服务体系，在传统物流服务的基础上，不断寻求创新与突破。公司致力于为客户提供从海运、空运到多式联运的全方位物流解决方案，特别是在国际贸易复杂多变的当下，中联以其专业的定制化服务，有效帮助企业降低了成本，提高了供应链的灵活性和响应速度。</p>
          <p>而大掌柜，作为物流科技领域的佼佼者，利用云计算、大数据、人工智能等先进技术，为物流行业提供了智能化的操作平台和服务。其核心产品能够实现物流流程的数字化管理，从货物追踪、仓储管理到供应链金融，全方位提升了物流效率与透明度，帮助企业实现了业务流程的自动化和决策的智能化。</p>
          <p>两者的携手，不仅仅是技术与资源的简单叠加，更是一场物流智慧化的深刻变革。中联国际物流的深厚行业底蕴，结合大掌柜的科技创新力，将共同推动物流行业的服务模式由传统的操作驱动向数据和技术驱动转型。这一合作模式，不仅能够极大地提升物流作业的精准度与效率，还能够为企业提供更为精细化、个性化的供应链管理方案，助力企业在激烈的市场竞争中抢占先机。</p>
          <p>更为重要的是，面对后疫情时代全球供应链面临的挑战与不确定性，中联与大掌柜的合作模式为保障供应链稳定性和韧性提供了新的思路。通过构建更加智能、灵活的物流网络，双方将有效缓解因疫情导致的物流阻塞问题，加快货物周转，保障国际贸易顺畅进行，为全球经济复苏贡献力量。</p>
          <p>总之，中联国际物流与大掌柜的携手合作，是物流行业迈向数字化、智能化时代的重要里程碑。这一合作不仅展现了双方对于未来物流发展趋势的敏锐洞察，更是以实际行动引领着行业向更高效率、更高质量发展的方向迈进，为全球供应链的可持续发展注入了强劲动力。</p>
        `
      },
      {
        id: 610,
        title: "大掌柜引领OVP构建一站式航运服务平台：科技革新与用户体验双升级",
        tag: "OVP Shipping",
        module: "ship",
        imageUrl: "https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240924091910/4a3b37dd-c1df-4e58-acf7-dbdf2c804159/cases-7.jpeg",
        introduction: "从官网重塑到实时物流：OVP平台转型树立行业新标杆",
        content: `
          <p class="pt-4">大掌柜为OVP建设以客户为中心、科技为驱动、高可用的一站式新型航运服务生态平台</p>
          <div class="-mt-2"></div>
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240924091943/f9746dee-a5a9-45e3-a5e0-c84e7b759525/cases-p7-1.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240924092002/7fe99de4-b674-44d4-82d1-7d7fe2d32ed3/cases-p7-2.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240924092019/2e7467a1-5514-4b59-9571-29071f79a5f0/cases-p7-3.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240924092041/3e90b0b0-3615-419d-b8a9-9de4e84898cf/cases-p7-4.png" />
          <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240924092103/09b0955d-1944-44f5-83d5-5da67f90e588/cases-p7-5.png" />
          <div><img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240924092120/4a577eb8-860d-4212-88e0-f7665a6237e8/cases-p7-6.png" /></div>
          <div class="flex space-x-4 w-full py-4">
            <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240924092137/3922f07a-3b4f-46d1-a611-a840e3b30d5e/cases-p7-7.png" class="w-[30%]"/>
            <img src="https://qa600jit-public.oss-cn-hangzhou.aliyuncs.com/upload_public/sites/3/orgs/3/20240924092152/0549449d-6a74-44e7-8222-912bb24b2220/cases-p7-8.png" class="w-[68%]"/>
          </div>
          <p class="indent-8">OVP Shipping 海液通航运（以下简称“OVP”）于2020年在香港成立，公司致力于跟随中国“一带一路”的战略步伐，为满足中国和俄罗斯的双边重要贸易需求，提供高频快速、可靠及多样化的航运和物流产品。其班轮服务覆盖远东至东非，中东，红海， 地东，黑海及波罗的海沿线的众多港口，同时还提供广泛的物流服务，全面覆盖俄罗斯内陆地区，为客户提供优质的物流履约服务。</p>
          <div class="text-orange-500 text-2xl pt-8 pb-2 font-medium">官网平台建设凸显品牌价值</div>
          <p class="indent-8">在现代数字时代，官网作为企业面向全球的数字门面，能够全面展示企业的品牌形象、企业文化、服务理念及综合实力，有助于提升品牌知名度与美誉度，区分于竞争对手，吸引潜在客户。自有官网搭建了企业与客户的直接沟通桥梁，减少中间环节，提升服务效率。客户可以直接获取官方信息，进行航线查询、运费估算、货物跟踪等操作，增强客户体验与忠诚度。拥有自己的数据平台，企业能更好地收集和分析客户行为数据，了解市场需求变化，为产品与服务的优化提供数据支持，同时保护企业核心数据安全，避免依赖第三方可能带来的风险。</p>
          <p class="indent-8">OVP公司非常重视官网平台建设的品牌价值，和大掌柜强强联手，打造新型数字化官网，这不仅是为了适应数字化时代的竞争格局，更是为了深化客户服务、拓展市场边界、增强品牌形象与实现服务创新的长远布局。</p>
          <div class="text-orange-500 text-2xl pt-8 pb-2 font-medium">国际化多语言多提升客户丝滑体验</div>
          <p class="indent-8">在全球化的商业环境中，客户群体广泛遍布全球，跨越文化和地理界限。多语言支持展现了对各地文化的尊重与理解，使产品或服务更贴近本地用户的语言习惯和文化偏好，提升用户的亲近感和接受度。多端确保用户在不同设备上获得一致且高质量的服务体验，减少了因设备差异带来的使用障碍，提高了用户满意度和留存率。</p>
          <p class="indent-8">OVP公司为了在激烈的市场竞争中脱颖而出，吸引更多元化的客户群体，在技术、设计及内容管理上有高度的灵活性和创新性，无缝的多设备多语言多地区客户丝滑体验的背后，反映出企业在全球化市场中的核心竞争力构建及用户中心化战略的价值所在。</p>
          <p class="indent-8">提升国际化客户丝滑体验，是企业适应全球市场、深化用户体验、推动业务可持续发展的必要策略，其核心价值在于促进全球化布局、增强用户连接、提升品牌影响力并最终驱动业绩增长。</p>
          <div class="text-orange-500 text-2xl pt-8 pb-2 font-medium">实时物流查询服务提升效率</div>
          <p class="indent-8">随着全球贸易的快速增长和技术的不断进步，客户对物流信息的实时性和透明度要求越来越高。企业通过官方网站增设实时查询服务，是对市场趋势的积极响应，旨在提升服务竞争力。此类服务让客户能够自主、即时地获取货物状态、船舶位置及预计到达时间等关键信息，极大地提升了物流过程的透明度，减少了信息查询的等待时间与沟通成本。</p>
          <p class="indent-8">OVP公司，借助大掌柜数字化数据整合能力，集成实时物流查询服务，这是对客户需求的直接响应，也是提升自身服务质量和市场竞争力的重要手段，对促进整个物流供应链的信息化、透明化发展具有重要价值。同时，实时数据的积累能提供了丰富的数据分析原料，可用于预测分析、路线优化、成本控制等高级应用，进一步指导战略决策，实现精细化管理和持续优化。</p>
          <p class="indent-8">大掌柜一整套可广泛复用的网站建设体系旨在成为标准模板，为后续项目提供即插即用的建设蓝图，加速多平台多端多语言部署的一致性与高效性。通过智能物流信息整合，让物流全链条的透明可视与数据实时精准传递。最终打造一个以客户为中心、科技为驱动、高可用的一站式新型航运服务生态平台，展示品牌特性与用户体验的最优化，驱动业务全链路整体效能提升。</p>
          <p class="indent-8">大掌柜与OVP将继续深度合作，聚焦船运行业的科技创新与智能化升级，持续探索船东数字化转型升级，同时为客户提供更加全面、高效、智能的履约服务。</p>
        `
      }
    ],
  },
];

const data: TCaseData = {
  bannerUrl: "https://img.js.design/assets/img/66b4907cbed65308b2ddf9fa.png#3f81b04ff856f2bce2264c2bc30cb401",
  tags: [
    {
      name: "",
      code: "cases",
      tags: allCases,
    },
  ],
};

export const getCaseData = async (): Promise<TCaseData> => {
  return Promise.resolve(data);
};

export const getCaseDetailData = async (id: string | number): Promise<TTagData> => {
  let allList: TContent[] = [];
  allCases?.forEach((item) => {
    allList = allList.concat(item.list || []);
  });
  const item = allList.find((item) => item.id == id);
  return Promise.resolve({
    name: "客户案例详情",
    code: "caseDetail",
    tags: [
      {
        name: "客户案例",
        code: "cases/CaseDetail",
        list: item ? [item] : undefined,
      },
      {
        name: "相关案例",
        code: "cases/MoreCase",
        list: allList.filter((item) => item.id != id),
      },
    ],
  });
};