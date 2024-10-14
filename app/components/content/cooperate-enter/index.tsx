"use client";

export default function CooperateEnter() {

  const scrollToApply = () => {
    const partnerForm = document.getElementById("partner-form");
    partnerForm?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="container flex flex-col items-center pt-24 pb-24">
      <div className="text-5xl font-black"><span>加入</span><span className="text-orange-500">大掌柜合作伙伴</span><span>网络</span></div>
      <div className="text-5xl font-black pt-6">携手共赢</div>
      <div className="border border-black rounded-full py-3 px-10 mt-10 hover:cursor-pointer" onClick={scrollToApply}>成为合作伙伴</div>
    </div>
  );
}
