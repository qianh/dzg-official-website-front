import DzgLayout from "@/app/components/layout/index";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "宁波大掌柜物流技术有限公司",
  description: "宁波大掌柜物流技术有限公司",
  keywords: "大掌柜,宁波大掌柜,宁波大掌柜物流技术有限公司,dzg",
  copyright: "宁波大掌柜物流技术有限公司",
  icons: {
    icon: "/logo.png", // 默认 favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cn">
      <body>
        <DzgLayout children={children} />
      </body>
      <Script>
        {
          `
            (function (w, d, e, x) {
              w[e] = function () {
                w.cbk = w.cbk || [];
                w.cbk.push(arguments);
              };
              x = d.createElement("script");
              x.async = true;
              x.id = "zhichiScript";
              // ***为您的自定义域名
              x.src = "https://dzg.sobot.com/chat/frame/v6/entrance.js?sysnum=566817082dc0443a834d8308e574338e&channelid=17";
              d.body.appendChild(x);
            })(window, document, "zc")
          `
        }
      </Script>
    </html>
  );
}
