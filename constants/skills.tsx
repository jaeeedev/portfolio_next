import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import ts from "../assets/images/ts.png";
import next from "../assets/images/next.png";

export const skills = [
  {
    title: "HTML",
    imgSrc: html,
    description: (
      <ul>
        <li>화면 마크업이 가능합니다.</li>
        <li>의미에 맞는 태그를 사용합니다.</li>
      </ul>
    ),
  },
  {
    title: "CSS",
    imgSrc: css,
    description: (
      <ul>
        <li>flex 속성을 사용하여 스타일링 합니다.</li>
        <li>미디어 쿼리를 통한 반응형 레이아웃 구현이 가능합니다.</li>
      </ul>
    ),
  },
  {
    title: "JavaScript",
    imgSrc: js,
    description: (
      <ul>
        <li>ES6 문법을 사용합니다.</li>
      </ul>
    ),
  },
  {
    title: "React",
    imgSrc: react,
    description: (
      <ul>
        <li>
          상태 관리 라이브러리(redux-toolkit, recoil, react-query) 사용 경험이
          있습니다.
        </li>
        <li>tailwind css, styled-components 사용 경험이 있습니다.</li>
      </ul>
    ),
  },
  {
    title: "TypeScript",
    imgSrc: ts,
    description: (
      <ul>
        <li>type, interface를 사용하여 타입을 분리할 수 있습니다.</li>
        <li>
          기본 자료형과 인덱스 시그니처, unknown 타입에 대해 알고 있습니다.
        </li>
      </ul>
    ),
  },
  {
    title: "Next.js",
    imgSrc: next,
    description: (
      <ul>
        <li>getStaticProps와 getServerSideProps의 차이를 알고 있습니다.</li>
        <li>현재 학습 중이며 일부 프로젝트에 적용되어 있습니다.</li>
      </ul>
    ),
  },
];
