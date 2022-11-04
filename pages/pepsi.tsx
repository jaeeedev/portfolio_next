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

function Pepsi() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <CommonDocu
        title="ZERO PEPSI FINDER"
        arr={[
          "React",
          "TypeScript",
          "Styled-components",
          "JavaScript",
          "Node.js",
        ]}
      />

      <Container>
        <a
          href="https://pepsi-finder.herokuapp.com/"
          target={"_blank"}
          rel="noreferrer"
          style={{ marginRight: "10px" }}
        >
          <MainImgBox
            src="/imgs/pepsimain.png"
            alt="펩시파인더 화면"
            layout="responsive"
            width={3}
            height={2}
          />
        </a>

        <MainLinkDesc>클릭 시 프로젝트로 이동합니다.</MainLinkDesc>

        <ProjectText>
          편의점의 제로 펩시 행사 정보를 알려주는 웹페이지를 제작했습니다.
        </ProjectText>

        <TextTitle>제작 의도</TextTitle>
        <ProjectText>
          개인적으로 제로 펩시를 정말 좋아하고 자주 사먹는데, 매달 1+1 행사를
          하는 편의점을 찾기 위해 일일이 검색하는 과정이 귀찮다고 생각했습니다.
          그래서 제로 펩시에 관한 정보만 제공하는 페이지를 만들자! 하고 바로
          실행에 옮기게 되었습니다.
        </ProjectText>

        <br />

        <ProjectText>
          편의점들은 오픈api를 따로 제공하고 있지 않기 때문에 크롤링을 해야
          했습니다.{" "}
          <a
            href="https://pyony.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#7c1e52" }}
          >
            펴늬
          </a>
          라는 편의점 정보를 모아놓은 페이지에서 제로 펩시에 관련한 정보들만
          가져왔습니다. <Code>cheerio</Code> 라이브러리를 사용하여 필요한 돔
          노드들만 추출하여 배열로 담고 화면에 리스트 형태로 나타내주었습니다.
          그리고 1+1 행사를 하는 편의점들이 가장 먼저 보일 수 있도록 데이터
          배열을 sort 했습니다.
        </ProjectText>

        <ProjectImg
          src="/imgs/pepsitheme.gif"
          alt="펩시 라이트모드 전환 화면"
          layout="responsive"
          width={97}
          height={56}
        />

        <ProjectText>
          제로 펩시 패키지 색상에 맞춰 기본 테마는 다크모드로 적용하였고 밝게
          보기 버튼을 클릭하면 라이트 모드로 변경됩니다.{" "}
          <Code>Styled-components</Code> 의 <Code>ThemeProvider</Code> 기능을
          사용하여 텍스트 색상, 배경 색상, 박스 색상 등을 darkTheme, lightTheme
          두가지 객체에 담아두고 현재 선택된 모드에 맞게 적용되도록 했습니다.
          스타일드 컴포넌트는 여러 번 사용해본 라이브러리지만 ThemeProvider
          기능은 처음 사용해 보았습니다. <Code>Context API</Code> 를 기반으로
          하는 기능이라 모든 컴포넌트에서 쉽게 테마 속성들을 끌어다 쓸 수 있어
          좋았습니다.
        </ProjectText>

        <TextTitle>회고</TextTitle>
        <ProjectText>
          따로 페이지 라우팅이나 복잡한 로직이 없는 단일 페이지기 때문에 리액트
          코드는 학습 목적을 겸해 타입스크립트로 작성했습니다. 저는 평소에
          배웠으면 써먹어야 한다는 신조를 가지고 있는데, 이번에는 정말 관심있고
          저에게 필요했던 페이지를 제작했기 때문에 재미있었던 프로젝트였습니다.
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

export default Pepsi;
