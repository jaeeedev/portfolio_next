import { NextSeo } from "next-seo";
import PageHeader from "./PageHeader";
import {
  Container,
  TitleHead,
  ProjectSpan,
  ProjectTitle,
  SkillsBox,
  SkillBadge,
} from "../styles/styled-components";
import List from "../components/List";

function CommonDocu({ arr, title }: { arr: string[]; title: string }) {
  return (
    <>
      <NextSeo
        title={`Jieun Portfolio | ${title}`}
        description={`프론트엔드 박지은 포트폴리오 | ${title}`}
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
