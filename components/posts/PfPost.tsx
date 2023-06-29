import React from "react";
import {
  ProjectText,
  Code,
  TextTitle,
  ImgContainer,
  Img,
} from "../../styles/common";
import styled from "styled-components";
import Main from "../../assets/images/pf-main.png";
import Skill from "../../assets/images/pf-skill.png";

const AvifImg = styled.img`
  width: 100%;
  height: 100%;
`;

const PfPost = () => {
  return (
    <>
      <TextTitle>개요</TextTitle>

      <ImgContainer>
        <Img src={Main} alt="포트폴리오 메인 이미지" />
      </ImgContainer>

      <ProjectText>
        포트폴리오 페이지를 만들었습니다. 메인 페이지에 개략적인 개인 정보와
        프로젝트들을 나열하고, 상세 페이지에서 프로젝트를 하나하나 설명하는
        방식으로 구성했습니다.
      </ProjectText>

      <ImgContainer>
        <Img src={Skill} alt="포트폴리오 스킬 이미지" />
      </ImgContainer>

      <ProjectText>
        skills는 <Code>display:grid</Code> 속성으로 나열했습니다. 기존에는 한줄
        한줄씩 컴포넌트를 나누어 flex로 구현했지만 코드가 길어져 grid로
        변경했습니다.
      </ProjectText>

      <ImgContainer>
        <video
          className="sm_video"
          src={require("../../assets/images/pf-responsive.mp4")}
          autoPlay
          muted
          playsInline
          loop
        />
      </ImgContainer>
      <ProjectText>
        <br />
        <Code>IntersectionObserver API</Code>를 사용하여 스크롤에 따른 css
        효과를 구현했습니다. 프로젝트 링크들은 페이지를 이동하는 것 보다 새창을
        띄우는게 보기에 편할 것 같아
        <Code>target=&quot;_blank&quot;</Code> 속성을 적용 해 주었습니다.
      </ProjectText>
      <ProjectText>
        페이지별로 적절한 타이틀과 정보가 나타나도록 <Code>next-seo</Code> 라는
        라이브러리를 사용했습니다.
      </ProjectText>

      <ProjectText>
        초기에는 각 프로젝트 페이지를 별도의 파일로 만들어 포트폴리오를
        구성했습니다. 하지만 포트폴리오에 싣는 프로젝트들이 계속 변경되었고,
        반복되는 요소들을 하드코딩하는 것이 비효율적이라고 판단하여 객체에
        데이터를 모아 뿌려주는 방식으로 변경하고 라우팅 방식도 동적으로
        변경했습니다.
      </ProjectText>
    </>
  );
};

export default PfPost;
