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
        arr={["React", "React-router", "Redux-toolkit", "Styled-components"]}
      />

      <Container>
        <a
          href="https://illustrious-manatee-d6fc25.netlify.app/"
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

        <ProjectText>
          기존의 자바스크립트 프로젝트를 간소화하여 리액트로 제작했습니다.{" "}
          <br />
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
          제품을 클릭하면 상세 페이지로 들어갈 수 있습니다. <br />
          선택된 제품의 수량이 0개인 경우 1.5초간 모달창이 띄워지며 1개 이상의
          제품이 담겼을 경우에는 고정된 모달창이 나타납니다. <br />
          장바구니에 동일한 제품을 다시 담을 경우 전역 상태 배열에 동일한 상품이
          있는지를 확인하고 카운트를 추가합니다.
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
          검색했던 키워드는 쿼리스트링으로 붙여 제품 필터링에 활용하였습니다.
          검색한 키워드가 한글이다보니 쿼리스트링을 받아오면 글자가 깨지는
          현상이 발생하였는데 처음에는 <Code>decodeURI()</Code> 로 변환하여
          사용하였다가 리액트 라우터에서 제공하는 <Code>useSearchParams</Code>{" "}
          훅의 <Code>get</Code> 메서드로 변경하였습니다.
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

        <TextTitle>회고</TextTitle>
        <ProjectText>
          쇼핑몰의 핵심적인 기능들을 구현해 보면서 리액트에 대해 더 익숙해지고{" "}
          <Code>리액트 라우터</Code> 나 <Code>리덕스 툴킷</Code>같은 <br />
          새로운 기술에 적응할 수 있는 좋은 경험이었습니다. 특히 기존
          자바스크립트 프로젝트에서는 제품 상세 페이지를 하나만 만들어 아쉬움이
          있었는데 이번 프로젝트에서는 라우팅을 통해 모든 상세 페이지에 접속할
          수 있다는 점이 너무 즐거웠습니다.
          <br />
          스타일링 방법으로는 스타일드 컴포넌트를 처음 도입해 보았는데
          자바스크립트 파일 안에 css가 있다는 점이 어색하게 느껴지기도 했습니다.
          하지만 prop에 따른 조건부 스타일링과 높은 재사용성은 익숙해지고 난
          뒤에는 큰 만족감을 주었습니다.
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
