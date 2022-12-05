import PrevNext from "../components/PrevNext";
import { useEffect } from "react";
import {
  Container,
  ProjectText,
  TextTitle,
  MainImgBox,
  MainLinkDesc,
  Code,
  ProjectImg,
  ImgContainer,
  Img,
} from "../styles/styled-components";
import CommonDocu from "../components/CommonDocu";
import styled from "styled-components";
import Image from "next/image";

function SbReact() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <CommonDocu
        title="서울번드 리액트"
        arr={[
          "React",
          "React-router",
          "Redux-toolkit",
          "Styled-components",
          "Firebase",
        ]}
      />

      <Container>
        <a
          href="https://dapper-pudding-d0dfcf.netlify.app"
          target={"_blank"}
          rel="noreferrer"
          style={{ marginRight: "10px" }}
        >
          <MainImgBox
            src="/imgs/sbrmenu.gif"
            alt="서울번드리액트 메뉴"
            layout="responsive"
            width={1423}
            height={952}
          />
        </a>

        <MainLinkDesc>클릭 시 프로젝트로 이동합니다.</MainLinkDesc>

        <TextTitle>개요</TextTitle>
        <ProjectText>
          동아시아 식기, 소품 편집숍 서울번드를 간소화 한 웹페이지를
          제작하였습니다.
          <br /> 기존에 바닐라 자바스크립트로 페이지를 구현해 보았지만 리액트
          학습과 많은 기능들을 사용해보기 위해 리액트로 제작했습니다. <br />
        </ProjectText>

        <ImgContainer>
          <Img
            src="/imgs/sbr_list.png"
            alt="썸네일"
            fill
            sizes="(max-width: 850px) 100%,
              60%"
          />
        </ImgContainer>

        <ProjectText>
          카테고리에 들어가면 제품들이 있습니다. 상단의 소분류 버튼들을 클릭하면
          해당하는 소분류의 제품들만 필터하여 볼 수 있습니다. 또한 가격이 낮은
          순서로도 정렬하여 볼 수 있습니다.
          <br />
        </ProjectText>

        <ImgContainer>
          <Img
            src="/imgs/sbrpd.gif"
            alt="서울번드리액트 화면"
            fill
            sizes="(max-width: 850px) 100%,
              60%"
          />
        </ImgContainer>
        <ProjectText>
          상품 상세 페이지입니다. 제품을 선택해 장바구니에 담을 수 있습니다.
          수량을 선택하지 않았을 경우 모달창이 나타납니다. 기존에 장바구니에
          담겨있는 상품을 다시 선택할 경우 수량이 합산됩니다.
          <br />
          하단에는 데이터 배열에서 같은 소분류의 제품군만 필터하여 랜덤하게
          추천하도록 구현했습니다.
        </ProjectText>

        <ImgContainer>
          <Img alt="장바구니 화면" src="/imgs/sbr_cart.png" fill />
        </ImgContainer>
        <ProjectText>
          로그인 한 회원의 장바구니를 firestore에서 가져와 화면에 보여줍니다.
          장바구니 페이지 내에서도 수량 변경이 가능합니다. 로그아웃 시 상태
          배열이 비워지며 빈 화면이 됩니다.
        </ProjectText>

        <ImgContainer>
          <Img
            src="/imgs/sbr_search.png"
            alt="서울번드리액트 화면"
            layout="fill"
            sizes="(max-width: 850px) 100%,
              60%"
          />
        </ImgContainer>

        <ProjectText>
          헤더의 검색창에 키워드를 입력하면 그 키워드를 가진 제품들을 화면에
          출력합니다. <br />
        </ProjectText>

        <ProjectImg
          src="/imgs/page404.png"
          alt="서울번드리액트 화면"
          layout="responsive"
          width={895}
          height={336}
        />

        <ProjectText>
          없는 페이지나 잘못된 경로로 접속하였을 경우 나타날 페이지입니다.
        </ProjectText>

        <ImgContainer>
          <Img alt="로그인 화면" src="/imgs/valid.gif" fill />
        </ImgContainer>
        <ProjectText>
          회원가입과 로그인 폼 상태관리와 유효성 검사를 간편하게 하기 위해
          formik과 yup 라이브러리를 사용했습니다.
        </ProjectText>

        <ImgContainer>
          <Img alt="로그인 화면" src="/imgs/sbr_login.png" fill />
        </ImgContainer>

        <ProjectText>
          이메일을 통해 가입하거나 구글 아이디를 이용해 바로 로그인 할 수
          있습니다. 로그인이나 로그아웃 여부를 전역 상태에서 관리해 헤더의
          버튼이 변경됩니다.
        </ProjectText>

        <TextTitle>회고</TextTitle>
        <ProjectText>
          쇼핑몰의 핵심적인 기능들을 구현해 보면서 리액트에 대해 더 익숙해질 수
          있는 계기였습니다.
          <br />
          스타일링 방법으로는 스타일드 컴포넌트를 처음 도입해 보았는데
          자바스크립트 파일 안에 css가 있다는 점이 어색하게 느껴지기도 했습니다.
          하지만 prop에 따른 조건부 스타일링과 높은 재사용성은 익숙해지고 난
          뒤에는 큰 만족감을 주었습니다.
          <br />
          <br />
          기존에 서버나 데이터베이스를 아예 이용하지 않고 리덕스만으로 장바구니
          기능을 구현했었습니다. 하지만 로그인 기능이나 사용자별로 다른
          장바구니를 보여주는 기능이 없어 아쉬움을 느끼던 차에 파이어베이스를
          사용해보기로 했습니다. 서버를 구축할 필요 없이 파이어베이스에서
          제공하는 SDK를 이용해 간단하게 인증 기능이나 데이터베이스를 사용할 수
          있는 점이 마음에 들었습니다. 처음에는 어떻게 사용해야 할 지 감을 잡기
          위해 버전8을 사용하는 강의를 들었었는데, 저는 버전9를 사용하기로 했고
          쇼핑몰 기능에 필요한 함수들을 더 찾아야 해서 초반에 헤매는 시간이
          길었습니다. 공식 문서를 시작부터 차근차근 보면서 적용하니 원했던
          기능들을 만들 수 있었고 공식 문서와 좀 더 친해지는 계기가 되었던 것
          같습니다.
          <br />
          <br />
          새로운 기술들을 잔뜩 적용하면서 많이 배워갈 수 있는 프로젝트였습니다.{" "}
          <Code>리액트 라우터</Code>를 통해 접속할 수 있는 페이지가 무한히
          늘어났고, <Code>리덕스</Code>를 통해 모든 컴포넌트에서 쉽게 상태를
          관리 할 수 있었습니다. 배운 만큼 구현할 수 있는 것들이 늘어난다는 것을
          깨닫고 동기부여가 되는 시간이었습니다.
        </ProjectText>

        <PrevNext
          prev={"pepsi"}
          next={"portfolio"}
          pText={"ZERO PEPSI FINDER"}
          nText={"포트폴리오 페이지"}
        />
      </Container>
    </div>
  );
}

export default SbReact;
