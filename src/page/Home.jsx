import Content from "../components/content/index";
import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import Layout from "../components/common/Layout";
import Settings from "../components/navbar/Settings";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout>
      <div className="grid md:grid-cols-12 grid-cols-1">
        {/* Sidebar */}
        <div
          className={`${
            isMobile
              ? "fixed bottom-0 left-0 w-full md:static md:col-span-1"
              : "md:col-span-1"
          }`}
        >
          <SideBar />
        </div>

        {/* Content section */}
        <div
          className={`${
            isMobile ? "md:col-span-12" : "md:col-span-11"
          } bg-[#F2F4F6] md:rounded-tl-3xl`}
        >
          <Content />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
