import type { NextPage } from "next";
import Header from "../components/Header";
import { useState } from "react";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Footer from "../components/Footer";
import Project from "../components/Project";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  const [boldIndex, setBoldIndex] = useState(0);

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
              url: "/imgs/intromain.png",
              width: 800,
              height: 400,
            },
          ],
        }}
      />

      <Header boldIndex={boldIndex} />
      <Intro boldHandler={setBoldIndex} />
      <Skill boldHandler={setBoldIndex} />
      <Project boldHandler={setBoldIndex} />
      <Footer boldHandler={setBoldIndex} />
    </div>
  );
};

export default Home;
