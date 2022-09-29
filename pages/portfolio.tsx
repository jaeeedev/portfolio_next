import PrevNext from "../components/PrevNext";
import Link from "next/link";
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
          <br /> 이후 새로운 기술을 경험해보고 싶어 넥스트와 타입스크립트를
          기초적으로 공부하고 코드들을 옮겨보기로 했습니다.
        </ProjectText>

        <ProjectImg
          src="/imgs/pfpro.png"
          alt="포폴 이미지"
          layout="responsive"
          width={13}
          height={8}
        />

        <ProjectText>
          인트로듀스, 스킬, 프로젝트, 컨택트의 네가지 섹션으로 페이지를
          구성했습니다. 간편하게 이동할 수 있도록 헤더에 내비게이션 링크를
          두었고 모바일 화면에서는 햄버거 버튼을 누르면 나타나도록 수납해
          두었습니다.
        </ProjectText>

        <ProjectImg
          src="/imgs/pfheader.gif"
          alt="헤더 gif"
          layout="responsive"
          width={13}
          height={6}
        />

        <ProjectText>
          헤더 정중앙에 로고를 놓는것이 멋있다고 생각해와서 취향과 편의성을
          동시에 충족할 방법을 고민하다 처음 접속했을 때만 정중앙에 로고를
          배치하고 스크롤을 내리면 내비게이션 링크들이 나타나도록 만들었습니다.
          이 부분은 스크롤 이벤트를 사용했는데 넥스트로 옮겨오는 과정에서{" "}
          <Code>window is not defined</Code> 오류가 발생했습니다. 스크롤
          이벤트는 보통 window에 붙여서 사용하는데 (window.addEventListener)
          넥스트는 서버에서 프리렌더링을 실행하여 window객체를 읽을 수 없기
          때문입니다. 이 문제는 useEffect 훅을 이용하여 모든 돔이 생성된 이후
          스크롤 이벤트가 실행되도록 수정하여 해결할 수 있었습니다.
        </ProjectText>

        <ProjectImg
          src="/imgs/pfscroll.gif"
          alt="스크롤 gif"
          layout="responsive"
          width={27}
          height={19}
        />

        <ProjectText>
          <br />
          헤더를 제외한 모든 스크롤 이벤트에{" "}
          <Code>IntersectionObserver API</Code>를 사용했습니다. 스크롤
          이벤트보다 성능상에 이점이 있고 뷰포트에 요소가 보이는지를 기준으로
          코드가 실행되기 떄문에 스크롤 거리를 계산하지 않아도 되어 편리하다고
          느꼈습니다.
          <br />각 섹션들을 기준으로 컴포넌트를 분리했습니다. 그리고 개별 섹션이
          화면에 보이면 해당 내비게이션 메뉴의 색상이 파랗게 변경되는 방식으로
          현재 위치를 나타내도록 만들었습니다. 이 과정에서 각 컴포넌트들의
          로직은 완전히 동일합니다. 때문에 커스텀 훅을 만들어 반복되는 코드를
          정리했습니다.
        </ProjectText>

        <ProjectText>
          프로젝트에 어떤 주요한 특징이 있는지와 회고를 보여주고 싶어 현재
          보고있는 이 페이지를 제작했습니다. 기존에는 리액트 라우터를 통해
          페이지 분리가 되어있었는데, 넥스트는 파일 기반의 라우팅을 제공하고
          있기 때문에 pages 폴더로 컴포넌트들을 옮겨주었습니다.
        </ProjectText>

        <ProjectText>
          넥스트는 img 태그가 아닌 자체적인 <Code>Image</Code> 태그를 사용하고
          있습니다. 기존에 적용되었던 이미지는 반응형 페이지인 만큼 사진의
          비율을 유지하면서 줄어드는 형태였는데 넥스트로 넘어오면서 반응형
          이미지가 모두 원본 사이즈로 고정되어버리는 문제점이 있었습니다.
          Image는 사이즈를 명시하는 prop을 꼭 작성해주어야 하고 그 중 이미지의
          비율을 지정하여 반응형으로 나타내고 싶다면{" "}
          <Code>{`layout="responsive"`}</Code> 속성을 준 다음 width와 height로
          비율을 지정해주면 된다는 것을 알게 되었습니다. 이미지를 많이 사용했던
          만큼 이미지들이 모두 먹통일때는 상당히 곤혹스러웠지만 다행히도 문제를
          해결할 수 있었습니다.
        </ProjectText>

        <TextTitle>회고</TextTitle>
        <ProjectText>
          파란색을 좋아해서 파란색과 회색을 주로 사용하여 디자인했습니다. 디자인
          감각이 좋지 않아 최대한 깔끔해보이도록 제작했습니다. 화려한
          그래픽보다는 글자가 주를 이루는 페이지기 때문에 단조로움을 해결하기
          위해 헤더를 반투명하게 만들고 백드롭 블러 효과를 주었습니다.
          <br />
          웹페이지를 개발하고 다른 사람들에게 보여주었을 때 어떤 기능이 있는지
          잘 모르는 경우가 많다고 느꼈습니다. 그래서 포트폴리오 페이지를
          만든다면 시각적인 자료들을 많이 활용해야겠다고 느꼈습니다. 동작 과정을
          보여주고 싶은 부분들을 캡쳐 후 gif 파일로 만들어 첨부했습니다.
          <br />
          <br />
          개발 이야기로 넘어가보면 타입이 상대적으로 느슨한 자바스크립트를 계속
          사용해오던 상태에서 타입스크립트를 적용하려다 보니 어려움을 많이
          느꼈습니다. 원래는 새로운 지식을 배우고 나면 충분히 익숙해진 뒤
          프로젝트에 적용하던 학습 패턴이었지만 이번에는 배우자마자 바로
          적용해보자는 마음가짐으로 시작했습니다. 타입스크립트 강의를 한번 쭉
          듣고나서 기존 포트폴리오 코드를 고치기 시작했습니다. 한 줄 치면 오류가
          나고 그다음줄 치면 다시 오류가 나는 상황의 반복이었지만 많은 에러를
          발견하면서 자꾸 빼먹는 실수도 줄여나가고 타입스크립트의 아주 기본적인
          부분부터 익숙해지기 시작했습니다. 역시 바로 적용해보는것만큼 빠른
          학습법은 없다고 다시금 느끼게 되었습니다. 현재 포트폴리오는 데이터를
          불러오지 않는 페이지이다보니 넥스트에서 검색엔진 최적화 정도의 기능만
          사용했다는 아쉬움이 있습니다. 향후 더 많이 사용해볼 계획입니다.
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
