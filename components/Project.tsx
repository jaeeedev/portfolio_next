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
              <a
                href="https://jaeeedev.github.io/pot/"
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
            <TextTitle mb={"20px"}>마법의 소라고둥</TextTitle>
            <TextDetail>
              스폰지밥에 나오는 마법의 소라고둥을 만들었습니다. 질문에 대해
              랜덤하게 답을 하고 결과물은 사진으로 저장할 수 있습니다. 재미를
              위한 인터랙션을 추가했습니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>Next.js, TypeScript, Recoil, framer-motion</TextDetail>

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
            <TextTitle mb={"20px"}>pix</TextTitle>
            <TextDetail>
              간단한 쇼핑몰을 구현했습니다. firebase auth, firestore, storage를
              통해 회원가입, 로그인, 장바구니, 제품 추가 기능을 구현하고 캐싱과
              낙관적 업데이트를 위해 리액트 쿼리를 사용했습니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>
              React, TypeScript, React-router, Recoil, Tailwind CSS, Firebase,
              React-Query
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
              현재 포트폴리오 페이지입니다. 개인 정보와 프로젝트들이 기록되어
              있습니다.
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
