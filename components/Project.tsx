import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectContents = styled.section`
  max-width: 1260px;
  margin: 30px auto;
  padding: 20px;
  padding-top: 80px;
`;

const Title = styled.h3`
  font-size: 35px;
  margin-bottom: 25px;
`;

const ProjectItemBox = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 60px;
  opacity: 1;
  transition: all 1.1s;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const ProjectLink = styled(Link)`
  margin-right: 10px;
`;

const ProjectImg = styled(Image)`
  display: block;
  background: white;
  object-fit: cover;
  transition: all 0.4s;

  @media screen and (max-width: 850px) {
  }
`;

const StyledA = styled.a.attrs({
  target: "_blank",
  rel: "noreferrer",
})`
  display: block;
  position: relative;
  width: 60%;
  min-height: 250px;
  height: fit-content;

  @media screen and (max-width: 550px) {
    min-height: 0;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

const ProjectText = styled.div`
  width: 40%;

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

const TextTitle = styled.span<{ mb?: string }>`
  display: block;
  margin-bottom: ${(props) => props.mb || "10px"};
  font-size: ${(props) => props.mb || "17px"};
  font-weight: 700;
`;

const TextDetail = styled.p<{ fz?: string }>`
  line-height: 1.5;
  font-size: ${(props) => props.fz || "15px"};
  margin-bottom: 10px;
  word-break: keep-all;
`;

const PjText = styled.p`
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

function Project({ boldHandler }: { boldHandler: (value: number) => void }) {
  const projectRef = useRef<null | HTMLDivElement[]>([]);

  useEffect(() => {
    const projectHandler: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const ent = entry.target as HTMLDivElement;
        if (entry.isIntersecting) {
          ent.style.opacity = "1";
          ent.style.transform = "translateY(10px)";
          boldHandler(2);
        } else {
          ent.style.opacity = "0";
          ent.style.transform = "translateY(0)";
        }
      });
    };

    const observer = new IntersectionObserver(projectHandler, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    projectRef.current?.forEach((project) => {
      if (project) {
        observer.observe(project);
      }
    });
  }, [projectRef]);

  return (
    <div>
      <ProjectContents id="3">
        <Title>PROJECT</Title>
        <PjText>✔ 이미지를 클릭하면 해당 프로젝트 페이지로 이동합니다.</PjText>
        <PjText>
          ✔ <CgNotes /> 아이콘을 클릭하면 상세 설명 페이지로 이동합니다.
        </PjText>

        <ProjectItemBox
          ref={(el) => {
            if (el && projectRef.current) {
              projectRef.current[0] = el;
            }
          }}
        >
          <StyledA href="https://jaeeedev.github.io/todo">
            <ProjectImg
              src="/imgs/todomain.gif"
              alt="투두리스트 썸네일"
              layout="responsive"
              width={2}
              height={1}
            />
          </StyledA>

          <ProjectText>
            <TextTitle mb={"20px"}>투두리스트</TextTitle>
            <TextDetail>
              가장 기초가 되는 글쓰기, 수정, 삭제 기능 구현을 공부하기 위해
              제작하였습니다. 배열과 map 메서드를 사용하여 데이터를 저장,
              출력하고 로컬 스토리지를 사용하여 체크 여부와 텍스트가 저장됩니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>HTML, CSS, JS</TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <ProjectLink href="/todolist" rel="noreferrer">
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "10px" }}
                >
                  <CgNotes />
                </a>
              </ProjectLink>

              <a
                href="https://github.com/jaeeedev/todo"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </TextDetail>
          </ProjectText>
        </ProjectItemBox>

        <ProjectItemBox
          ref={(el) => {
            if (el && projectRef.current) {
              projectRef.current[1] = el;
            }
          }}
        >
          <StyledA href="https://jaeeedev.github.io/pot">
            <ProjectImg
              src="/imgs/pot01.jpg"
              alt="pot 썸네일"
              layout="responsive"
              width={2}
              height={1}
            />
          </StyledA>

          <ProjectText>
            <TextTitle mb={"20px"}>pot</TextTitle>
            <TextDetail>
              가상의 웹사이트를 기획하여 퍼블리싱한 웹페이지입니다. 반응형으로
              제작되었습니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>HTML, CSS, JS, jQuery</TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <ProjectLink href="/pot" target={"_blank"} rel="noreferrer">
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "10px" }}
                >
                  <CgNotes />
                </a>
              </ProjectLink>

              <a
                href="https://github.com/jaeeedev/pot"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </TextDetail>
          </ProjectText>
        </ProjectItemBox>
        <ProjectItemBox
          ref={(el) => {
            if (el && projectRef.current) {
              projectRef.current[2] = el;
            }
          }}
        >
          <StyledA href="https://jaeeedev.github.io/work">
            <ProjectImg
              src="/imgs/sbmain.png"
              alt="서울번드 썸네일"
              layout="responsive"
              width={2}
              height={1}
            />
          </StyledA>
          <ProjectText>
            <TextTitle mb={"20px"}>서울번드</TextTitle>
            <TextDetail>
              쇼핑몰 제작 프로젝트입니다. 반응형으로 제작되었습니다. 메인, 제품
              상세, 장바구니 페이지를 제작하였습니다. 리뷰 작성과 장바구니
              기능을 구현했습니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>HTML, CSS, JS</TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <ProjectLink href="/seoulbund" target={"_blank"} rel="noreferrer">
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "10px" }}
                >
                  <CgNotes />
                </a>
              </ProjectLink>

              <a
                href="https://github.com/jaeeedev/work"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </TextDetail>
          </ProjectText>
        </ProjectItemBox>
        <ProjectItemBox
          ref={(el) => {
            if (el && projectRef.current) {
              projectRef.current[3] = el;
            }
          }}
        >
          <StyledA href="https://reactsbr.herokuapp.com/">
            <ProjectImg
              src="/imgs/sbrmain.png"
              alt="서울번드 리액트 썸네일"
              layout="responsive"
              width={2}
              height={1}
            />
          </StyledA>
          <ProjectText>
            <TextTitle mb={"20px"}>서울번드 리액트</TextTitle>
            <TextDetail>
              기존 자바스크립트 프로젝트를 조금 변경하여 리액트로 제작했습니다.
              로그인, 장바구니, 서치 기능 등을 구현했습니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>
              React, React-router, Redux-toolkit, Styled-components, Node.js,
              MongoDB
            </TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <ProjectLink
                href="seoulbundreact"
                target="_blank"
                rel="noreferrer"
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "10px" }}
                >
                  <CgNotes />
                </a>
              </ProjectLink>
              <a
                href="https://github.com/jaeeedev/seoulbund"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </TextDetail>
          </ProjectText>
        </ProjectItemBox>
        <ProjectItemBox
          ref={(el) => {
            if (el && projectRef.current) {
              projectRef.current[4] = el;
            }
          }}
        >
          <StyledA href="https://portfolio-next-rxye.vercel.app/">
            <ProjectImg
              src="/imgs/intromain.png"
              alt="포폴페이지 썸네일"
              layout="responsive"
              width={2.2}
              height={1}
            />
          </StyledA>
          <ProjectText>
            <TextTitle mb={"20px"}>포트폴리오 페이지</TextTitle>
            <TextDetail>
              현재 포트폴리오 페이지입니다. 공부하는 목적으로 Next.js와
              타입스크립트로 제작되었습니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>Next.js, TypeScript, Styled-components</TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <ProjectLink href="portfolio" target={"_blank"} rel="noreferrer">
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "10px" }}
                >
                  <CgNotes />
                </a>
              </ProjectLink>
              <a
                href="https://github.com/jaeeedev/portfolio_next"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </TextDetail>
          </ProjectText>
        </ProjectItemBox>
      </ProjectContents>
    </div>
  );
}

export default Project;
