import React from "react";
import {
  MainImgBox,
  MainLinkDesc,
  ProjectText,
  Code,
  GoToGithub,
  ProjectImg,
  ImgContainer,
  Img,
  TextTitle,
} from "../../styles/common";
import Main from "../../assets/images/pix-main.png";
import MyPage from "../../assets/images/pix-mypage.png";
import Admin from "../../assets/images/pix-admin.png";
import Cart from "../../assets/images/pix-cart.png";
import Product from "../../assets/images/pix-product.png";
import Signup from "../../assets/images/pix-signup.png";

const PixPost = () => {
  return (
    <div>
      <ImgContainer>
        <Img src={Main} alt="픽스 메인이미지" />
      </ImgContainer>
      <TextTitle>개요</TextTitle>
      <ProjectText>폰케이스를 파는 컨셉의 쇼핑몰을 구현했습니다.</ProjectText>

      <ImgContainer>
        <Img src={Signup} alt="회원가입 페이지 사진" />
      </ImgContainer>
      <ProjectText>
        회원가입 페이지입니다. 회원가입과 로그인은 firebase의 auth를
        사용했습니다.
      </ProjectText>

      <ImgContainer>
        <Img src={Product} alt="상품 페이지 사진" />
      </ImgContainer>
      <ProjectText>
        상품 페이지입니다. intersection observer를 사용해 무한 스크롤을
        구현했습니다. 우측 상단의 하트를 누르면 위시리스트에 상품이 담기고
        장바구니 버튼을 클릭하면 장바구니에 상품이 담깁니다. 이미 담은 상품일
        경우 모달창에 메시지가 출력되고 수량이 더해집니다.
      </ProjectText>

      <ImgContainer>
        <Img src={MyPage} alt="마이페이지 사진" />
      </ImgContainer>
      <ProjectText>
        위시리스트와 개인 정보가 있습니다. 닉네임을 변경할 수 있고 위시리스트에
        담긴 상품을 장바구니에 추가할 수 있습니다. 로그인이 되어있지 않은 경우
        메인 페이지로 리다이렉트됩니다.
      </ProjectText>
      <ImgContainer>
        <video
          src={require("../../assets/images/pix-cart.mp4")}
          autoPlay
          muted
          playsInline
          loop
        />
      </ImgContainer>
      <ProjectText>
        장바구니 페이지입니다. 수량을 변경할 수 있고 그에 따른 총계가 우측에
        표시됩니다. 장바구니에서 제품을 삭제하거나 수량을 변경할 경우 낙관적
        업데이트를 적용하여 사용자 경험을 향상시켰습니다.
      </ProjectText>
      <ImgContainer>
        <video
          src={require("../../assets/images/pix-admin.mp4")}
          autoPlay
          muted
          playsInline
          loop
        />
      </ImgContainer>
      <ProjectText>
        어드민 페이지입니다. 어드민 계정으로 접속할 경우 상품을 추가할 수
        있습니다. 가격 인풋에는 숫자가 입력되지 않도록 정규표현식으로 추가적인
        처리를 했습니다.
      </ProjectText>

      <TextTitle>문제 해결</TextTitle>
      <ProjectText>
        상품 페이지와 메인 페이지는 같은 키값을 공유하기 때문에 둘중 하나에
        캐싱된 값을 사용하고 싶었습니다. 상품 페이지에 먼저 진입하거나
        새로고침을 하고 메인 페이지로 이동한 경우에는 캐싱된 데이터를 사용하고
        싶었습니다. useQuery의 enabled 속성으로 캐싱 여부를 확인한 후 없는 경우
        데이터를 페칭하도록 코드를 작성했고 캐싱된 데이터를 불러오는데까지
        성공했지만 isLoading이 계속 true로 간주되어 로딩 UI만 계속 출력되는
        문제가 있었습니다. 공식 문서를 읽어보니 컴포넌트가 마운트 된 이후 쿼리에
        데이터가 없는 상태 (=enabled로 페칭을 막은 상태) 는 로딩중으로
        간주된다는 것을 알게 되었습니다. useQuery의 또다른 리턴값인
        fetchStatus와 status를 함께 비교하는 방법으로 로딩 상태를 검증했고,
        원하는 대로 화면을 구현할 수 있었습니다.
        <a href="https://jaypa.tistory.com/46" target="_blank" rel="noreferrer">
          블로그 문제해결 기록
        </a>
      </ProjectText>

      <TextTitle>느낀 점</TextTitle>
      <ProjectText>
        firebase의 auth, storage, firestore를 사용해보았습니다. 서버 없이도
        한번에 인증, 데이터베이스를 사용할 수 있다는 것이 편리하게 느껴졌고
        혼자서 폭넓은 기능을 구현할 수 있다는 것이 매력적으로 느껴졌습니다.
        초기에는 리액트쿼리 없이 firebase sdk를 그대로 사용했지만 캐싱, 낙관적
        업데이트, invalidateQueries 등의 이점을 활용하기 위해 리액트 쿼리를
        도입했습니다. 일단 코드를 작성하고 불편함이 크게 느껴질때 쯤
        라이브러리를 도입하거나 기존 방법을 완전히 뜯어고치면서 개발해 구현
        속도가 더뎠던 것 같지만 그 덕분에 후자의 방법이 왜 더 좋은 방법인지에
        대해 충분히 경험하고 이해할 수 있는 시간이 되었습니다.
      </ProjectText>
    </div>
  );
};

export default PixPost;
