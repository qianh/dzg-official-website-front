import dynamic from 'next/dynamic';
import { getAkToken } from "@apis/home"

interface AddressMapProps {}

const BaiduMap = dynamic(() => import('@components/address-map/BaiduMap'), {
  ssr: false,
});

const AddressMap: React.FC<AddressMapProps> = async (props: AddressMapProps) => {

  const baiduAk = await getAkToken('DZG');

  return (
    <div className="container flex flex-col items-center justify-between">
      <div className="text-5xl font-bold">联系地址</div>
      <div className="mt-16 rounded-[40px] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.2)]">
        <BaiduMap ak={baiduAk.data + ''}/>
      </div>
    </div>
  );
};

export default AddressMap;
