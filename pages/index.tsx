import type { NextPage } from "next";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Project from "../components/Project";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  const [boldIndex, setBoldIndex] = useState(0);

  useEffect(() => {
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
      const win: Window = window;
      win.location = "microsoft-edge:" + window.location;
      //차단되어 있으면 안열림

      setTimeout(function () {
        win.location = "https://go.microsoft.com/fwlink/?linkid=2135547";
      }, 1);
    }
  }, []);

  return (
    <div>
      <NextSeo
        title="Jieun Portfolio"
        description="프론트엔드 개발자 박지은 포트폴리오 페이지입니다."
        openGraph={{
          type: "website",
          url: "https://www.jaeeedev.com/",
          title: "Jieun Portfolio",
          description: "프론트엔드 개발자 박지은 포트폴리오 페이지입니다.",
          images: [
            {
              url: "/imgs/pf-main.png",
              width: 800,
              height: 400,
            },
          ],
        }}
      />

      <Header boldIndex={boldIndex} />
      <Intro boldHandler={setBoldIndex} />
      <Skills boldHandler={setBoldIndex} />
      <Project boldHandler={setBoldIndex} />
      <Footer boldHandler={setBoldIndex} />
    </div>
  );
};

export default Home;
