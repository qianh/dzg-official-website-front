export default function FreeEnter() {
  return (
    <div className="free-enter-bg flex flex-col items-center justify-center pt-24 pb-24">
      <div className="text-5xl font-bold">下载注册一分钟异地合作真轻松</div>
      <div className="text-2xl font-normal pt-8">
        全国各地庄家的通讯录，不用加好友就可以随时交流询价！
      </div>
      <div className="pt-16 flex space-x-16">
        <div className="flex items-center justify-center pl-20 pr-20 h-12 border rounded-full font-bold bg-orange-500 border-orange-400 text-white hover:cursor-pointer">
          <a href="/about/free-trial">免费使用</a>
        </div>
        {/* <div className="flex items-center justify-center pl-20 pr-20 h-12 border rounded-full font-bold border-slate-300 hover:cursor-pointer">
          免费注册
        </div> */}
      </div>
    </div>
  );
}
