import { useEffect } from "react";
import PrevNext from "../components/PrevNext";
import {
  Container,
  ProjectText,
  ProjectImg,
  TextTitle,
  MainImgBox,
  MainLinkDesc,
  LinksContainer,
  Code,
} from "../styles/styled-components";
import CommonDocu from "../components/CommonDocu";

function SeoulBund() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <CommonDocu title="서울번드" arr={["HTML", "CSS", "Javascript"]} />

      <Container>
        <LinksContainer>
          <a
            href="https://jaeeedev.github.io/work/"
            target="_blank"
            rel="noreferrer"
          >
            메인
          </a>
          <a
            href="https://jaeeedev.github.io/work/pages/detail.html"
            target="_blank"
            rel="noreferrer"
          >
            제품상세
          </a>
          <a
            href="https://jaeeedev.github.io/work/pages/sub.html"
            target="_blank"
            rel="noreferrer"
          >
            장바구니
          </a>
        </LinksContainer>

        <MainLinkDesc>클릭 시 프로젝트로 이동합니다.</MainLinkDesc>

        <ProjectText>
          기존에 있는 웹사이트를 리뉴얼하여 만들어보는 프로젝트였습니다. 저는
          서울번드라는 식기 편집숍을 선택하였습니다.
          <br />
          <b>메인 페이지, 제품 상세 페이지, 장바구니 페이지</b> 세가지를
          구현했습니다.
        </ProjectText>

        <ProjectImg
          src="/imgs/sblink.gif"
          alt="모바일 화면"
          layout="responsive"
          width={1563}
          height={827}
        />
        <ProjectText>
          <b>포토 리뷰 영역</b>의 사진들을 클릭하면 제품 상세 페이지로
          이동합니다. 리뷰 이미지들은 가장 최신의 리뷰 사진들을 가지고 와서
          띄우는 형태입니다.
        </ProjectText>
        <ProjectImg
          src="/imgs/sbopt.gif"
          alt="모바일 화면"
          layout="responsive"
          width={1563}
          height={827}
        />
        <ProjectText>
          옵션을 선택하여 담으면 장바구니에 담기고 모달창이 뜹니다. 현재
          페이지에 머무르거나 장바구니 페이지로 이동할 수 있습니다.
        </ProjectText>
        <ProjectImg
          src="/imgs/sbrev.gif"
          alt="모바일 화면"
          layout="responsive"
          width={1563}
          height={827}
        />
        <ProjectText>
          리뷰를 작성할 수 있습니다. 사진은 최대 4개까지 첨부가 가능하며 사진이
          4개를 초과할 경우 안내 메시지와 함께 버튼의 속성이{" "}
          <Code>disabled</Code> 로 변경되어 리뷰를 제출할 수 없습니다. 사진이
          있는 리뷰만 필터하여 볼 수 있습니다.
          <br />
          리뷰 기능은 이미지와 리뷰 텍스트를 데이터베이스로 전송하고 나서 화면을
          리로드하는 방식으로 계획했으나 첨부한 사진이 많거나 텍스트가 많은 경우
          리로드가 먼저 실행되어 작성한 리뷰를 잃어버리는 문제가 있었습니다.
          처음에는 비동기 함수에 대한 이해가 없어서 무식하게{" "}
          <Code>setTimeout</Code> 을 사용해서 기다렸지만 <Code>async</Code>{" "}
          <Code>await</Code> 문법에 대해 공부를 하고 요청이 완료되면 리로드하는
          방식으로 변경하였습니다.
        </ProjectText>
        <ProjectImg
          src="/imgs/sbmob.gif"
          alt="모바일 화면"
          layout="responsive"
          width={7}
          height={5}
        />
        <br />
        <ProjectImg
          src="/imgs/sbcartmob.gif"
          alt="모바일 화면"
          layout="responsive"
          width={7}
          height={5}
        />
        <ProjectText>
          반응형으로 제작하여 좁은 화면에서도 기능들을 동일하게 이용 할 수
          있습니다. 메인 슬라이드의 사진은 <Code>picture</Code> 태그를 이용하여
          화면 너비에 따라 다른 이미지가 나타나도록 했습니다.
        </ProjectText>

        <TextTitle>회고</TextTitle>
        <ProjectText>
          처음으로 여러 페이지를 가진 웹페이지를 제작하려니 고민이 많았습니다.
          무엇보다도 쇼핑몰이라면 장바구니 기능이 핵심일텐데 어떻게 정보를
          기억시킬까 고민을 하다가 로컬 스토리지는 이미 사용을 해 본 경험이 있기
          때문에 외부 저장소를 선택하게 되었습니다. 최종적으로 장바구니와 리뷰가
          파이어베이스 실시간 데이터베이스에 저장되도록 하고 요청은{" "}
          <Code>fetch API</Code> 를 이용했습니다. 비동기 요청을 동기적으로
          제어하기 위해서 <Code>async</Code>, <Code>await</Code> 문법도 처음으로
          사용해보았습니다. 데이터가 불러와지기 전이라 함수가 동작하지 않거나
          콘솔을 찍어봐도 빈 배열이 출력되는 등 우여곡절이 많았던
          프로젝트였습니다. 파이어베이스를 단순히 데이터를 저장하고 덮어씌우는
          용도로 사용했지만 그 과정에서 <Code>GET</Code>, <Code>POST</Code>,{" "}
          <Code>PUT</Code> 방식의 차이점에 대해서도 공부하게 되었습니다. 헤더나
          사이드바같이 공통적으로 사용되는 코드들은 common.js나 common.css
          파일로 분리했습니다. 여담으로 성격이 둔한 탓인지 바닐라 자바스크립트가
          불편하다는 생각을 해본 적이 없었습니다. 하지만 이 다음에 바로 서울번드
          리액트 페이지를 제작하면서 동일한 기능들을 구축해보니 리액트가 확실히
          편하다는 사실을 깨달았습니다 😂
        </ProjectText>
        <PrevNext
          prev="pot"
          next="seoulbundreact"
          pText="Pot"
          nText="서울번드 리액트"
        />
      </Container>
    </div>
  );
}

export default SeoulBund;
