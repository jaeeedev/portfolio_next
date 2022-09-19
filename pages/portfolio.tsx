import PrevNext from "../components/PrevNext";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Container,
  ProjectText,
  TextTitle,
  MainImgBox,
  MainLinkDesc,
  Code,
  GoToGithub,
  ProjectImg,
} from "../styles/styled-components";
import CommonDocu from "../components/CommonDocu";

function Portfolio() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <CommonDocu
        arr={["Next.js", "Typescript", "Styled-components"]}
        title={"포트폴리오 페이지"}
      />

      <Container>
        <Link href="/">
          <a>
            <MainImgBox
              layout="responsive"
              width={1371}
              height={599}
              src="/imgs/intromain.png"
              alt="포폴 썸네일"
            />
          </a>
        </Link>

        <MainLinkDesc>클릭 시 프로젝트로 이동합니다.</MainLinkDesc>

        <ProjectText>
          기존에 <Code>React</Code> 와 <Code>React-router</Code>를 사용하여
          포트폴리오를 제작했었습니다.{" "}
          <GoToGithub
            href="https://github.com/jaeeedev/portfolio"
            target={"_blank"}
            rel="noreferrer"
          >
            링크 (https://github.com/jaeeedev/portfolio)
          </GoToGithub>
          <br /> 이후 새로운 기술을 경험해보고 싶고 검색엔진 최적화도 하고 싶어
          넥스트와 타입스크립트를 기초적으로 공부하고 코드들을 옮겨보기로
          했습니다.
        </ProjectText>

        <ProjectImg
          src="/imgs/pfscroll.gif"
          alt="스크롤 움짤"
          layout="responsive"
          width={27}
          height={19}
        />

        <ProjectText>
          <br />
          스크롤 이벤트는 모두 <Code>IntersectionObserver API</Code>를
          사용했습니다. 스크롤 이벤트보다 성능상에 이점이 있고 뷰포트에 요소가
          보이는지를 기준으로 코드가 실행되기 떄문에 스크롤 거리를 계산하지
          않아도 되어 편리하다고 느꼈습니다. 섹션(내비게이션 메뉴)를 기준으로
          컴포넌트를 분리했습니다. 그리고 개별 섹션이 화면에 보이면 해당
          내비게이션 메뉴의 색상이 변경되는 방식으로 각 컴포넌트들의 로직은
          완전히 동일합니다. 때문에 커스텀 훅을 만들어 반복되는 코드를
          정리했습니다.
        </ProjectText>

        <ProjectText>
          프로젝트에 어떤 주요한 특징이 있는지와 회고를 보여주고 싶어 현재
          보고있는 이 페이지를 제작했습니다. 기존에는 리액트 라우터를 통해
          페이지 분리가 되어있었는데, 넥스트는 파일 기반의 라우팅을 제공하고
          있기 때문에 pages 폴더로 컴포넌트들을 옮겨주었습니다. 차이점이 크지는
          않아 금방 적용할 수 있었습니다.
        </ProjectText>

        <ProjectText>
          넥스트는 img 태그가 아닌 자체적인 <Code>Image</Code> 태그를 사용하고
          있습니다. 기존에 적용되었던 이미지는 반응형 페이지인 만큼 사진의
          비율을 유지하면서 줄어드는 형태였는데 넥스트로 넘어오면서 반응형
          이미지가 모두 원본 사이즈로 고정되어버리는 문제점이 있었습니다.
          Image는 사이즈를 명시하는 prop을 꼭 작성해주어야 하고 그 중 이미지의
          비율을 지정하여 반응형으로 나타내고 싶다면{" "}
          <Code>{`layout="responsive"`}</Code> 속성을 준 다음 width와 height로
          비율을 지정해주면 된다는 것을 알게 되었습니다. 포트폴리오는 이미지가
          많을 수 밖에 없는 만큼 이미지들이 모두 먹통일때는 상당히
          곤혹스러웠지만 다행히도 문제를 해결할 수 있었습니다.
        </ProjectText>

        <TextTitle>회고</TextTitle>
        <ProjectText>
          타입이 상대적으로 느슨한 자바스크립트를 계속 사용해오던 상태로
          타입스크립트를 적용하려다 보니 어려움을 많이 느꼈습니다. 원래는 새로운
          지식을 배우고 나면 충분히 익숙해진 뒤 프로젝트에 적용하던 학습
          패턴이었지만 이번에는 배우자마자 바로 적용해보자는 마음가짐으로
          시작했습니다. 바로 적용해보는것만큼 빠른 학습법은 없다고 다시금 느끼게
          되었습니다. 현재 포트폴리오는 데이터를 불러오지 않는 정적인
          페이지이다보니 넥스트에서 검색엔진 최적화 정도의 기능만 사용했다는
          아쉬움이 있습니다. 향후 더 많이 공부해보고 싶습니다.
        </ProjectText>
        <PrevNext
          prev={"seoulbundreact"}
          next={"false"}
          pText={"서울번드 리액트"}
          nText={"false"}
        />
      </Container>
    </div>
  );
}

export default Portfolio;
