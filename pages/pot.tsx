import PrevNext from "../components/PrevNext";
import { useEffect } from "react";
import {
  Container,
  ProjectText,
  TextTitle,
  MainLinkDesc,
  Code,
  ImgContainer,
  Img,
} from "../styles/common";
import CommonDocu from "../components/CommonDocu";
import styled from "styled-components";

const Main = styled(ImgContainer)`
  width: 80%;
  margin-bottom: 20px;
`;

function Pot() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <CommonDocu title="Pot" arr={["HTML", "CSS", "JavaScript", "JQuery"]} />
      <Container>
        <Main>
          <a
            href="https://jaeeedev.github.io/pot/"
            target="_blank"
            rel="noreferrer"
          >
            <Img
              src="/imgs/pot_main.png"
              alt="pot 메인화면"
              fill
              priority={true}
            />
          </a>
        </Main>
        <MainLinkDesc>클릭 시 프로젝트로 이동합니다.</MainLinkDesc>

        <TextTitle>개요</TextTitle>
        <ProjectText>
          가상의 웹사이트를 퍼블리싱했습니다. 메인 페이지만으로 구성되어 있고
          슬라이드 라이브러리를 사용하면서 제이쿼리를 일부 사용했습니다.
        </ProjectText>

        <ImgContainer>
          <Img src="/imgs/pot_middle.png" alt="pot 화면" fill />
        </ImgContainer>
        <ProjectText>
          마우스 이벤트에 맞게 정보가 나타나도록 구현했습니다.
        </ProjectText>

        <ImgContainer>
          <Img src="/imgs/pot_end.png" alt="pot 화면" fill />
        </ImgContainer>
        <ProjectText>
          웹페이지의 토대를 짜고 css를 이용해서 레이아웃을 잡고 꾸미는 법을
          학습할 수 있었습니다. 간단한 자바스크립트도 사용해보면서 프론트엔드의
          기본적인 지식을 습득하는 시간이 되었습니다.
        </ProjectText>

        <ImgContainer>
          <Img src="/imgs/pot_mobile.gif" alt="pot 반응형 화면" fill />
        </ImgContainer>
        <ProjectText>
          좁은 화면에서도 볼 수 있도록 반응형으로 제작했습니다.{" "}
          <Code>flex-wrap</Code> 속성을 이용하여 화면이 좁아지면 요소가 아래로
          내려갑니다.
        </ProjectText>

        <PrevNext
          prev={"false"}
          next={"pepsi"}
          pText={"false"}
          nText={"ZERO PEPSI FINDER"}
        />
      </Container>
    </div>
  );
}

export default Pot;
