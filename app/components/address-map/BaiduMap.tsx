"use client";

import { useState, useEffect } from "react";
import { decode } from "universal-base64";

interface BaiduMapProps {
  ak: string
}

declare const BMapGL: any;

const BaiduMap: React.FC<BaiduMapProps> = (props: BaiduMapProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      loadBaiduMapScript();
    }
  }, [isClient]);

  if (!isClient || typeof window === "undefined") {
    return null;
  }

  const loadBaiduMapScript = () => {
    if (!props.ak) {
      return;
    }
    const baiduMapScript = document.createElement("script");
    baiduMapScript.type = "text/javascript";
    baiduMapScript.id = "baidu-map-script";
    baiduMapScript.src = `https://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=${decode(props.ak)}`;
    baiduMapScript.onload = () => {
      const map = new BMapGL.Map("dzg-location-map");
      const point = new BMapGL.Point(121.55854, 29.815056);
      var marker = new BMapGL.Marker(point);
      map.addOverlay(marker);   
      map.centerAndZoom(point, 20);
    };
    document.body.appendChild(baiduMapScript);
  };

  return <div id="dzg-location-map" className="w-[1360px] h-[550px]"></div>;
};

export default BaiduMap;
