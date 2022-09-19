import type { NextPage } from "next";
import { GlobalStyle } from "../styles/global-styles";
import Header from "../components/Header";
import { useState } from "react";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Head from "next/head";

const Home: NextPage = () => {
  const [boldIndex, setBoldIndex] = useState(0);

  return (
    <div>
      <Head>
        <title>Jieun Portfolio</title>
        <meta
          name="description"
          content="프론트엔드 개발자 박지은 포트폴리오 페이지입니다."
        />
        {/* <meta property="og:type" content="website" />
        <meta property="og:title" content="Jieun Portfolio" /> */}
      </Head>
      <GlobalStyle />

      <Header boldIndex={boldIndex} />
      <Intro boldHandler={setBoldIndex} />
      <Skill boldHandler={setBoldIndex} />
      <Project boldHandler={setBoldIndex} />
      <Footer boldHandler={setBoldIndex} />
    </div>
  );
};

export default Home;
