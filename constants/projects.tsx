import ConchPost from "../components/posts/ConchPost";
import PfPost from "../components/posts/PfPost";
import PixPost from "../components/posts/PixPost";
import PotPost from "../components/posts/PotPost";

export const projects = [
  {
    index: 0,
    title: "pot",
    link: "/pot",
    description:
      "가상의 웹페이지를 퍼블리싱했습니다. 반응형으로 제작되었습니다.",
    githubLink: "https://github.com/jaeeedev/pot",
    deployLink: "https://jaeeedev.github.io/pot/",
    skills: ["HTML", "CSS", "JavaScript"],
    post: <PotPost />,
  },
  {
    index: 1,
    title: "pix",
    description:
      "폰케이스를 파는 쇼핑몰이 컨셉입니다. 간단하게 쇼핑몰을 구현했습니다. firebase를 통한 로그인, 회원가입, 상품 업로드, 장바구니 추가 기능을 구현했습니다.",
    link: "/pix",
    githubLink: "https://github.com/jaeeedev/pix",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Recoil",
      "React-Query",
    ],
    post: <PixPost />,
  },
  {
    index: 2,
    title: "마법의 소라고둥",
    description:
      "스폰지밥에 나오는 마법의 소라고둥을 구현했습니다. framer-motion을 이용해 드래그, 클릭에 따른 효과를 구현했습니다.",
    link: "/conch",
    githubLink: "https://github.com/jaeeedev/magical-conch",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "framer-motion"],
    post: <ConchPost />,
  },
  {
    index: 3,
    title: "포트폴리오 페이지",
    description:
      "현재 포트폴리오 페이지입니다. 개인 정보와 프로젝트들이 기록되어 있습니다.",
    link: "/portfolio",
    githubLink: "https://github.com/jaeeedev/portfolio_next",
    skills: ["Next.js", "TypeScript", "Styled-components"],
    post: <PfPost />,
  },
];
