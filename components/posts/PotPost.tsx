import React from "react";
import {
  ProjectText,
  TextTitle,
  Code,
  ImgContainer,
  Img,
} from "../../styles/common";
import styled from "styled-components";
import PotMain from "../../assets/images/pot_main.png";
import PotMiddle from "../../assets/images/pot_middle.png";
import PotEnd from "../../assets/images/pot_end.png";

const Main = styled(ImgContainer)`
  width: 80%;
  margin-bottom: 20px;
`;

const PotPost = () => {
  return (
    <>
      <Main>
        <Img src={PotMain} alt="pot 메인화면" fill priority={true} />
      </Main>

      <TextTitle>개요</TextTitle>
      <ProjectText>
        가상의 웹사이트를 디자인하고 퍼블리싱했습니다. 메인 페이지만으로
        구성되어 있고 슬라이드 라이브러리를 사용하면서 제이쿼리를 일부
        사용했습니다.
      </ProjectText>

      <ImgContainer>
        <Img src={PotMiddle} alt="pot 화면" fill />
      </ImgContainer>
      <ProjectText>
        마우스 이벤트에 맞게 정보가 나타나도록 구현했습니다.
      </ProjectText>

      <ImgContainer>
        <Img src={PotEnd} alt="pot 화면" fill />
      </ImgContainer>
      <ProjectText>
        css를 이용해서 레이아웃을 잡고 스타일링 하는 법을 학습할 수 있었습니다.
        간단한 자바스크립트도 사용해보면서 프론트엔드의 기본적인 지식을 습득하는
        시간이 되었습니다.
      </ProjectText>

      <ImgContainer>
        <video
          className="sm_video"
          src={require("../../assets/images/pot_responsive.mp4")}
          autoPlay
          muted
          playsInline
          loop
        />
      </ImgContainer>
      <ProjectText>
        좁은 화면에서도 볼 수 있도록 반응형으로 제작했습니다.{" "}
        <Code>flex-wrap</Code> 속성을 이용하여 화면이 좁아지면 요소가 아래로
        내려갑니다.
      </ProjectText>
    </>
  );
};

export default PotPost;
