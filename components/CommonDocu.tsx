import { NextSeo } from "next-seo";
import PageHeader from "./PageHeader";
import { Container, TitleHead } from "../styles/common";
import List from "../components/List";
import { useRouter } from "next/router";

interface Props {
  arr: string[] | undefined;
  title: string;
}

function CommonDocu({ arr, title }: Props) {
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
          <span className="post_span">프로젝트 설명</span>
          <h1 className="post_title">{title}</h1>
          <div className="post_skills">
            {arr?.map((el) => (
              <span className="skill" key={el}>
                {el}
              </span>
            ))}
          </div>
        </TitleHead>
        <List />
      </Container>
    </>
  );
}

export default CommonDocu;
