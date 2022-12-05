import styled from "styled-components";
import { BsGithub, BsGlobe2 } from "react-icons/bs";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import useObserve from "../utils/useObserve";

const ProjectContents = styled.section`
  max-width: 1260px;
  margin: 30px auto;
  padding: 20px;
  padding-top: 80px;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 25px;
  font-family: "Poppins", Pretendard, sans-serif;
`;

const ProjectItemBox = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 60px;
  opacity: 1;
  transition: all 1s;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }

  &:last-of-type {
    margin-bottom: 0;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //비율 유지하면서 이미지 줄임
`;

const StyledA = styled(Link).attrs({
  target: "_blank",
  rel: "noreferrer",
})`
  display: block;
  position: relative;
  width: 60%;
  height: 0;
  padding-bottom: 30%;
  overflow: hidden;
  //비율 유지하면서 이미지 줄임

  @media screen and (max-width: 550px) {
    min-height: 0;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    padding-bottom: 50%;
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

  a {
    margin-right: 10px;
  }
`;

const PjText = styled.p`
  font-size: 15px;
  margin-top: 7px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

function Project({ boldHandler }: { boldHandler: (value: number) => void }) {
  const ref = useObserve(boldHandler, 2);
  const projectRef = useRef<null | HTMLDivElement[]>([]);

  useEffect(() => {
    const projectHandler: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const ent = entry.target as HTMLDivElement;
        if (entry.isIntersecting) {
          ent.style.opacity = "1";
          ent.style.transform = "translateY(10px)";
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
  });

  return (
    <div>
      <ProjectContents ref={ref} id="3">
        <Title>PROJECT</Title>

        <ProjectItemBox
          ref={(el) => {
            if (el && projectRef.current) {
              projectRef.current[0] = el;
            }
          }}
        >
          <StyledA href="/pot">
            <ProjectImg
              src="/imgs/pot_main.png"
              alt="pot 썸네일"
              fill
              sizes="(max-width: 850px) 100%,
            60%"
            />
          </StyledA>

          <ProjectText>
            <TextTitle mb={"20px"}>Pot</TextTitle>
            <TextDetail>
              가상의 웹페이지를 퍼블리싱했습니다. 반응형으로 제작되었습니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>HTML, CSS, JavaScript, JQuery</TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <a
                href="https://github.com/jaeeedev/pot"
                target={"_blank"}
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
          <StyledA href="/pepsi">
            <ProjectImg
              src="/imgs/pepsimain.png"
              alt="펩시파인더 썸네일"
              fill
              sizes="(max-width: 850px) 100%,
              60%"
            />
          </StyledA>

          <ProjectText>
            <TextTitle mb={"20px"}>ZERO PEPSI FINDER</TextTitle>
            <TextDetail>
              현재 제로 펩시의 편의점별 할인 정보(1+1, 2+1)를 알려주는
              페이지입니다. 다크모드와 라이트모드를 지원합니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>
              React, TypeScript, Styled-components, JavaScript, Node.js, Express
            </TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <a
                href="https://github.com/jaeeedev/pepsi-finder"
                target={"_blank"}
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
          <StyledA href="/seoulbundreact">
            <ProjectImg
              src="/imgs/sbrmain.png"
              alt="서울번드 리액트 썸네일"
              fill
              sizes="(max-width: 850px) 100vw,
              50vw"
            />
          </StyledA>
          <ProjectText>
            <TextTitle mb={"20px"}>서울번드 리액트</TextTitle>
            <TextDetail>
              기존 자바스크립트 프로젝트를 조금 변경하여 리액트로 제작했습니다.
              로그인, 장바구니 기능 등이 구현되어 있습니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>
              React, React-router, Redux-toolkit, Styled-components, Firebase
            </TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <a
                href="https://github.com/jaeeedev/seoulbund"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
              <a
                href="https://dapper-pudding-d0dfcf.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <BsGlobe2 />
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
          <StyledA href="/portfolio">
            <ProjectImg
              src="/imgs/intromain.png"
              alt="포폴페이지 썸네일"
              fill
              sizes="(max-width: 850px) 100vw,
              50vw"
            />
          </StyledA>
          <ProjectText>
            <TextTitle mb={"20px"}>포트폴리오 페이지</TextTitle>
            <TextDetail>
              현재 포트폴리오 페이지입니다. 기존에 리액트-리액트 라우터로
              제작했던 페이지에 학습 목적으로 Next.js와 타입스크립트를
              적용했습니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>Next.js, TypeScript, Styled-components</TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
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
