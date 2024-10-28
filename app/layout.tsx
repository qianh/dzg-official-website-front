import DzgLayout from "@/app/components/layout/index";
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
    </html>
  );
}
