import Header from "@/app/components/header/index";
import Footer from "@/app/components/footer/index";
import FloatingToolbar from "@/app/components/floating-toolbar";
import { LayoutContextProvider } from "@components/LayoutContextProvider";
import { getBaseInfo } from "@apis/home";

interface DzgLayoutProps {
  children?: React.ReactNode;
  pageProps?: any;
}

async function Layout({ children, pageProps }: DzgLayoutProps) {
  const data = await getBaseInfo();

  return (
    <>
      <LayoutContextProvider value={{ baseInfo: data }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingToolbar />
      </LayoutContextProvider>
    </>
  );
}

export default Layout;
