import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import useObserve from "../utils/useObserve";
import { BsCheckCircleFill } from "react-icons/bs";

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

const StyledA = styled.a.attrs({
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
        <PjText>
          <BsCheckCircleFill style={{ paddingTop: "3px" }} /> 이미지를 클릭하면
          해당 프로젝트 페이지로 이동합니다.
        </PjText>
        <PjText>
          <BsCheckCircleFill style={{ paddingTop: "3px" }} /> <CgNotes />{" "}
          아이콘을 클릭하면 상세 설명 페이지로 이동합니다.
        </PjText>

        <ProjectItemBox
          ref={(el) => {
            if (el && projectRef.current) {
              projectRef.current[0] = el;
            }
          }}
        >
          <StyledA href="https://pepsi-finder.herokuapp.com/">
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
              제로 펩시의 편의점별 할인 정보(1+1, 2+1)를 알려주는 페이지입니다.
              다크모드와 라이트모드를 지원합니다.
              <br />
              (헤로쿠 배포로 인해 초기 접속 시 딜레이가 있을 수 있습니다.)
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>
              React, TypeScript, Styled-components, JavaScript, Node.js
            </TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <ProjectLink href="/pepsi" target={"_blank"} rel="noreferrer">
                <CgNotes />
              </ProjectLink>

              <ProjectLink
                href="https://github.com/jaeeedev/pepsi-finder"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsGithub />
              </ProjectLink>
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
          <StyledA href="https://jaeeedev.github.io/work">
            <ProjectImg
              src="/imgs/sbmain.png"
              alt="서울번드 썸네일"
              fill
              sizes="(max-width: 850px) 100vw,
              50vw"
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
                <CgNotes />
              </ProjectLink>

              <BsGithub />
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
          <StyledA href="https://reactsbr.herokuapp.com/">
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
              로그인, 장바구니, 서치 기능 등을 구현했습니다. (헤로쿠 배포로 인해
              초기 접속 시 딜레이가 있을 수 있습니다.)
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>
              React, React-router, Redux-toolkit, Styled-components, Express,
              MongoDB
            </TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <ProjectLink
                href="seoulbundreact"
                target="_blank"
                rel="noreferrer"
              >
                <CgNotes />
              </ProjectLink>

              <BsGithub />
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
          <StyledA href="https://portfolio-next-rxye.vercel.app/">
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
              현재 포트폴리오 페이지입니다. 공부하는 목적으로 Next.js와
              타입스크립트로 제작되었습니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>Next.js, TypeScript, Styled-components</TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <ProjectLink href="portfolio" target="_blank" rel="noreferrer">
                <CgNotes />
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
