import List from "../components/List";
import PageHeader from "../components/PageHeader";
import PrevNext from "../components/PrevNext";
import { useEffect } from "react";
import {
  Container,
  ProjectText,
  ProjectImg,
  TextTitle,
  MainImgBox,
  MainLinkDesc,
  Code,
} from "../styles/styled-components";
import CommonDocu from "../components/CommonDocu";

function Pot() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <CommonDocu title="Pot" arr={["HTML", "CSS", "Javascript", "jQuery"]} />

      <Container>
        <a
          href="https://jaeeedev.github.io/pot"
          target={"_blank"}
          rel="noreferrer"
          style={{ marginRight: "10px" }}
        >
          <MainImgBox
            src="/imgs/pot01.jpg"
            alt="팟 화면"
            layout="responsive"
            width={1705}
            height={949}
          />
        </a>

        <MainLinkDesc>클릭 시 프로젝트로 이동합니다.</MainLinkDesc>

        <ProjectText>
          가상의 웹사이트(식물 정보 커뮤니티)를 기획하여 메인 페이지를
          제작했습니다. 반응형 페이지로 제작되었습니다. 캐러셀 라이브러리 사용과
          편리한 코드 작성을 위해 <Code>jQuery</Code>를 사용했습니다.
        </ProjectText>
        <br />
        <ProjectImg
          src="/imgs/pot3.gif"
          alt="팟 화면"
          layout="responsive"
          width={394}
          height={225}
        />
        <ProjectImg
          src="/imgs/pot4.gif"
          alt="팟 화면"
          layout="responsive"
          width={591}
          height={407}
        />
        <br />
        <ProjectImg
          src="/imgs/potmob.gif"
          alt="팟 화면"
          layout="responsive"
          width={7}
          height={5}
        />
        <ProjectText>
          모바일 화면에서도 사용할 수 있도록 반응형으로 구현하였습니다. 분기점에
          따라 보이는 요소의 개수를 줄이고 <Code>flex-wrap</Code> 값을 wrap으로
          하여 일정 너비를 초과하면 아래로 내려가도록 하였습니다.
        </ProjectText>
        <TextTitle>회고</TextTitle>
        <ProjectText>
          전체 페이지를 반응형으로 구현하는것은 처음이었는데 요소 사이즈나
          개수를 어떻게 수정해야 할 지 고민을 많이 했던 것 같습니다. 레이아웃을
          잡는 과정에서 CSS의 <Code>flex</Code> 를 많이 익히게 되었습니다. 메인
          슬라이드를 제이쿼리 기반 라이브러리로 적용하면서 제이쿼리의 문법도
          사용해보게 되었습니다. 돔을 조작하기 편리하고 코드가 깔끔해져 좋은
          경험이었습니다.
        </ProjectText>
        <PrevNext
          prev={"todolist"}
          next={"seoulbund"}
          pText={"투두리스트"}
          nText={"서울번드"}
        />
      </Container>
    </div>
  );
}

export default Pot;
