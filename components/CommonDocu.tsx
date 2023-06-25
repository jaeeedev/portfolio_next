import { NextSeo } from "next-seo";
import PageHeader from "./PageHeader";
import {
  Container,
  TitleHead,
  ProjectSpan,
  ProjectTitle,
  SkillsBox,
  SkillBadge,
} from "../styles/common";
import List from "../components/List";
import { useRouter } from "next/router";

function CommonDocu({ arr, title }: { arr: string[]; title: string }) {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={`Jieun Portfolio | ${title}`}
        description={`프론트엔드 박지은 포트폴리오 | ${title}`}
        openGraph={{
          type: "website",
          url: `https://www.jaeeedev.com${router.pathname}`,
          title: `Jieun Portfolio | ${title}`,
          description: `프론트엔드 박지은 포트폴리오 | ${title}`,
          images: [
            {
              url: "/imgs/intromain.png",
              width: 800,
              height: 400,
            },
          ],
        }}
      />
      <PageHeader />
      <Container>
        <TitleHead>
          <ProjectSpan>프로젝트 설명</ProjectSpan>
          <ProjectTitle>{title}</ProjectTitle>
          <SkillsBox>
            {arr.map((el) => (
              <SkillBadge key={el}>{el}</SkillBadge>
            ))}
          </SkillsBox>
        </TitleHead>
        <List />
      </Container>
    </>
  );
}

export default CommonDocu;
