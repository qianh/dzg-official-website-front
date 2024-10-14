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
        {`
          (function() {
            let wl = document.createElement("script");
            wl.type = "text/javascript";
            wl.src = "https://material.weiling.cn/h5/willing-third-party-js/v1/form-custom-comp-v1.js"
            wl.id = "wlFORM";
            wl.onload = function() {
              wlCustomFormComp.init({
                wl_id: "wpW2WmDAAA7x_sGTVeNWsg5y6u9k9JLw",
                src_config: {
                  self: {
                    DOMid: ["dzg-partner-form", "dzg-contract-form"],
                    wl_form_id: ["1832991416381472768", "1820373133232832512"]
                  }
                },
              });
            };
            if (!document.getElementById("wlFORM")) {
              let s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(wl, s);
            }
          })();
        `}
      </Script>
    </html>
  );
}
