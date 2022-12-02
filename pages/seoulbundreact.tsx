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
} from "../styles/styled-components";
import CommonDocu from "../components/CommonDocu";

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
          "Node.js",
          "MongoDB",
        ]}
      />

      <Container>
        {/* <a
          href="https://reactsbr.herokuapp.com/"
          target={"_blank"}
          rel="noreferrer"
          style={{ marginRight: "10px" }}
        > */}
        <MainImgBox
          src="/imgs/sbrmenu.gif"
          alt="서울번드리액트 메뉴"
          layout="responsive"
          width={1423}
          height={952}
        />
        {/* </a> */}

        {/* <MainLinkDesc>클릭 시 프로젝트로 이동합니다.</MainLinkDesc> */}

        <ProjectText>
          <br /> 기존의 자바스크립트 프로젝트를 간소화하여 리액트로
          제작했습니다. <br />
          카테고리에 들어가면 제품들이 있습니다. 상단의 소분류 버튼들을 클릭하면
          해당하는 소분류의 제품들만 필터하여 볼 수 있습니다. 또한 가격이 낮은
          순서로도 정렬하여 볼 수 있습니다. 소분류 필터링은 배열 메서드 중{" "}
          <Code>filter</Code>를 사용했고 가격 정렬은 <Code>sort</Code>를
          이용했는데, <Code>sort</Code>는 원본 배열을 변경한다는 점을 잊어 잠깐
          헤맸습니다. 차이점을 다시 상기하고 원본 배열을 복사하여 정렬시켜
          주었습니다.
          <br />
        </ProjectText>
        <ProjectImg
          src="/imgs/sbrpd.gif"
          alt="서울번드리액트 화면"
          layout="responsive"
          width={1281}
          height={672}
        />
        <ProjectText>
          제품을 클릭하면 상세 페이지로 들어갈 수 있습니다. 상세 페이지의 제품
          상세 정보들은 시간적인 문제로 하나의 사진을 재사용했습니다. <br />
          선택된 제품이 없는 경우 1.5초간 제품을 담아달라는 내용의 모달창이
          띄워지며 1개 이상의 제품이 담겼을 경우에는 고정된 모달창이 나타납니다.{" "}
          <br />
          장바구니에 동일한 제품을 다시 담을 경우 전역 상태 배열에 동일한 상품이
          있는지를 확인하고 수량을 추가합니다.
          <br />
          하단에는 데이터 배열에서 같은 소분류의 제품군만 필터하여 랜덤하게
          추천하도록 구현했습니다.
        </ProjectText>
        <ProjectImg
          src="/imgs/sbrcart.gif"
          alt="서울번드리액트 화면"
          layout="responsive"
          width={198}
          height={119}
        />
        <ProjectText>
          장바구니 내에서도 제품 수량을 수정하거나 삭제할 수 있습니다. 체크된
          상품들의 총계가 우측 합계 영역에 나타납니다.
          <br />
          <br />
          장바구니의 상태는 리덕스에서 저장하고 관리합니다. 그런데 리덕스는 미리
          구축해야 하는 코드들이 너무 복잡하고 많기 때문에{" "}
          <Code>Redux-toolkit</Code> 라이브러리를 사용했습니다. 또한 리덕스의
          createStore를 사용하면 취소선과 함께 RTK의 configureStore을 사용할
          것을 권장한다는 문구가 뜨기 때문에 RTK를 사용하는 쪽으로 마음이
          굳었습니다.
        </ProjectText>

        <ProjectText>
          리덕스를 사용하여 장바구니의 상태를 관리한다고 하더라도 새로고침을
          하게되면 상태는 모두 날아가버리게 됩니다. 새로고침은 버릇처럼 누르게
          되는 버튼 중 하나라서 이런 특징은 쇼핑몰 웹사이트에서 큰 결점이라고
          느껴졌습니다. 리덕스의 상태를 유지시키기 위하여{" "}
          <Code>redux-persist</Code> 라이브러리를 사용했습니다. 로컬 스토리지에
          상태를 저장시켜 새로고침을 하더라도 상태가 날아가지 않습니다.
        </ProjectText>
        <ProjectImg
          src="/imgs/sbrsearch.gif"
          alt="서울번드리액트 화면"
          layout="responsive"
          width={1425}
          height={803}
        />

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

        <ProjectImg
          src="/imgs/valid.gif"
          alt="로그인 화면"
          layout="responsive"
          width={13}
          height={8}
        />
        <br />
        <ProjectImg
          src="/imgs/login.gif"
          alt="로그인 화면"
          layout="responsive"
          width={13}
          height={8}
        />
        <ProjectText>
          회원가입과 로그인 페이지입니다.
          <br />
          <Code>Formik</Code> 라이브러리를 사용하여 폼 상태를 한번에 관리하고{" "}
          <Code>Yup</Code> 을 통해 폼 유효성 검사를 간편하게 할 수 있었습니다.
          일차적으로 폼의 유효성이 맞지 않을 경우 안내 문구가 나타납니다.
          이차적으로 중복된 아이디를 생성하려는 경우나 없는 아이디로 로그인을
          하려는 경우, 비밀번호가 틀린 경우 요청한 api의 응답을 확인하여 안내
          문구를 띄웁니다. 로그인이 되어 있는지 여부는 리덕스에서 관리하고
          있습니다. 로그인에 성공할 경우 토큰을 발급하고 쿠키에 저장한 후 전역
          상태의 isLoggedIn 을 true로 변경하고 로그인 버튼을 로그아웃 버튼으로
          변경합니다. 로그아웃 시에는 반대로 쿠키에서 토큰을 지우고 isLoggedIn을
          false로 바꾸어 로그인 버튼이 나타나게 합니다.
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
          <br />+<br />
          더미데이터와 리덕스를 사용하여 일차적으로 프로젝트를 완성한 상태였지만
          고민을 하게 되었습니다. 쇼핑몰 헤더의 구색을 맞추기 위해 만들었던
          로그인 창이 기능하지 않는 점이 마음에 걸렸습니다. 또한 현업에서 일을
          하기 위해서는 백엔드와의 협업이 필수적인데 백엔드에 대해 잘 모른다는
          점이 마음에 걸려 Node.js와 몽고DB를 이용해 로그인/회원가입 기능을
          구현해보기로 했습니다.
          <br />
          백엔드 api를 구축하여 회원 정보를 관리하고 요청에 반환된 결과를 화면에
          나타내보면서 웹 개발의 전체적인 흐름에 대해서 좀 더 이해하게 되었던 것
          같습니다. 그리고 백엔드라도 노드js 덕에 같은 자바스크립트를 사용하니
          크게 낯설지 않아 좋았습니다. 하지만 아직 리덕스로 구축해두었던
          장바구니를 개별 유저의 장바구니를 관리하는 방식으로 변경하지
          못했습니다. 또한 기존의 제품 데이터는 임의로 만든 더미데이터 파일인데
          반해 새로 추가한 로그인/회원가입 기능의 회원 정보는 몽고DB에
          저장돼있어 데이터 관리가 일관적이지 못하다는 문제점도 생겨 아쉬움이
          많이 남습니다.
          <br />
          <br />
          새로운 기술들을 잔뜩 적용하면서 너무 즐거웠던 프로젝트였습니다.
          <Code>리액트 라우터</Code>를 통해 접속할 수 있는 페이지가 무한히
          늘어났고, <Code>리덕스</Code>를 통해 모든 컴포넌트에서 쉽게 상태를
          꺼내 쓸 수 있었습니다. 미지의 세계였던 <Code>Node.js</Code> 도{" "}
          <Code>Express</Code>를 곁들여 사용해보게 되었습니다. 낯설지만 서버를
          구축하고 배운다는것이 뿌듯하고 너무 재미있었습니다. 개발은 배운 만큼
          할 수 있는 것들이 늘어난다는걸 크게 체감하고 더 열심히 공부해야겠다는
          동기부여가 되는 시간이었습니다.
        </ProjectText>

        <PrevNext
          prev={"seoulbund"}
          next={"portfolio"}
          pText={"서울번드"}
          nText={"포트폴리오 페이지"}
        />
      </Container>
    </div>
  );
}

export default SbReact;
