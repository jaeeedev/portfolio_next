import styled from "styled-components";
import List from "../components/List";
import PageHeader from "../components/PageHeader";
import PrevNext from "../components/PrevNext";

const Head = styled.div`
  margin-bottom: 20px;
  margin-top: 100px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;
`;

const SkillsBox = styled.div`
  display: flex;
  gap: 7px;
`;
const SkillBadge = styled.span`
  display: inline-block;
  font-size: 13px;
  background: #e9ecef;
  padding: 3px 7px;
  border-radius: 2px;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
  padding-bottom: 50px;
`;

const ProjectSpan = styled.span`
  display: block;
  color: #999;
  margin-bottom: 5px;
`;
const ProjectTitle = styled.h1`
  font-size: 2.25rem;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
`;

const ProjectText = styled.p`
  line-height: 1.6;
  margin-bottom: 15px;
`;

const MainImgBox = styled.img`
  max-width: 800px;
  margin: 0 auto;
  display: block;
`;

const MainLinkDesc = styled.p`
  font-size: 14px;
  color: #888;
  text-align: center;
  margin-bottom: 30px;
`;

const TextTitle = styled.h3`
  font-size: 30px;
  font-weight: 800;
  margin: 10px 0;
  margin-top: 60px;
`;

const ProjectImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const Code = styled.code`
  background: #e9ecef;
  padding: 3px 5px;
  font-size: 14px;
  border-radius: 3px;
  cursor: default;
`;

function SeoulBund() {
  window.scrollTo({ top: 0 });
  return (
    <div>
      <PageHeader />
      <Container>
        <Head>
          <ProjectSpan>프로젝트 설명</ProjectSpan>
          <ProjectTitle>서울번드</ProjectTitle>
          <SkillsBox>
            <SkillBadge>HTML</SkillBadge>
            <SkillBadge>CSS</SkillBadge>
            <SkillBadge>JavaScript</SkillBadge>
            <SkillBadge>firebase</SkillBadge>
          </SkillsBox>
        </Head>
        <List />
        <a
          href="https://jaeeedev.github.io/work"
          target={"_blank"}
          rel="noreferrer"
          style={{ marginRight: "10px" }}
        >
          <MainImgBox src="/imgs/sbmain.gif" alt="메인 사진" />
        </a>

        <MainLinkDesc>클릭 시 프로젝트로 이동합니다.</MainLinkDesc>

        <ProjectText>
          기존에 있는 웹사이트를 리뉴얼하여 만들어보는 프로젝트였습니다. 저는
          서울번드라는 식기 편집숍을 선택하였습니다.
          <br />
          <b>메인 페이지, 제품 상세 페이지, 장바구니 페이지</b> 세가지를
          구현했습니다.
        </ProjectText>

        <ProjectImg src="/imgs/sblink.gif" alt="모바일 화면" />
        <ProjectText>
          <b>포토 리뷰 영역</b>의 사진들을 클릭하면 제품 상세 페이지로
          이동합니다. 리뷰 이미지들은 가장 최신의 리뷰 사진들을 가지고 와서
          띄우는 형태입니다.
        </ProjectText>
        <ProjectImg src="/imgs/sbopt.gif" alt="모바일 화면" />
        <ProjectText>
          옵션을 선택하여 담으면 장바구니에 담기고 모달창이 뜹니다. 현재
          페이지에 머무르거나 장바구니 페이지로 이동할 수 있습니다.
        </ProjectText>
        <ProjectImg src="/imgs/sbrev.gif" alt="모바일 화면" />
        <ProjectText>
          리뷰를 작성할 수 있습니다. 사진은 최대 4개까지 첨부가 가능하며 사진이
          4개를 초과할 경우 안내 메시지와 함께 버튼의 속성이{" "}
          <Code>disabled</Code> 로 변경되어 리뷰를 제출할 수 없습니다. 사진이
          있는 리뷰만 필터하여 볼 수 있습니다.
          <br />
          리뷰 기능은 이미지와 리뷰 텍스트를 데이터베이스로 전송하고 나서 화면을
          리로드하는 방식으로 계획했으나 첨부한 사진이 많거나 텍스트가 많은 경우
          리로드가 먼저 실행되어 작성한 리뷰를 잃어버리는 문제가 있었습니다.
          그래서 <Code>async</Code> <Code>await</Code> 문법을 사용하게
          되었습니다.
        </ProjectText>
        <ProjectImg src="/imgs/sbmob.gif" alt="모바일 화면" />
        <ProjectImg src="/imgs/sbcartmob.gif" alt="모바일 화면" />
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
          프로젝트였습니다. 데이터를 보내고 수정하는 과정에서 <Code>GET</Code>,{" "}
          <Code>POST</Code>, <Code>PUT</Code> 방식의 차이점에 대해서도 공부하게
          되었습니다. 헤더나 사이드바같이 공통적으로 사용되는 코드들은
          common.js나 common.css 파일로 분리했습니다.
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
