import styled from "styled-components";
import { BsGithub, BsGlobe2 } from "react-icons/bs";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Title } from "../styles/common";
import useObserve from "../utils/useObserve";
import Pix from "../assets/images/pix-main.png";
import Conch from "../assets/images/conch-thumbnail.png";
import Pf from "../assets/images/pf-main.png";
import PotMain from "../assets/images/pot_main.png";

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
          <StyledLink href="/pot">
            <ProjectImg
              src={PotMain}
              alt="pot 썸네일"
              fill
              sizes="(max-width: 850px) 100%,
            60%"
            />
          </StyledLink>

          <div className="item_text">
            <span className="item_title">Pot</span>
            <p className="item_detail">
              가상의 웹페이지를 퍼블리싱했습니다. 반응형으로 제작되었습니다.
            </p>

            <span className="item_title">사용 기술</span>
            <p className="item_detail">HTML, CSS, JavaScript, JQuery</p>

            <span className="item_title">보러 가기</span>
            <p className="item_detail">
              <a
                href="https://github.com/jaeeedev/pot"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsGithub size={24} />
              </a>
              <a
                href="https://jaeeedev.github.io/pot/"
                target="_blank"
                rel="noreferrer"
              >
                <BsGlobe2 size={24} />
              </a>
            </p>
          </div>
        </ProjectItemBox>

        <ProjectItemBox
          ref={(el) => {
            if (el && projectRef.current) {
              projectRef.current[1] = el;
            }
          }}
        >
          <StyledLink href="/pix">
            <ProjectImg
              src={Pix}
              alt="Pix 썸네일"
              fill
              sizes="(max-width: 850px) 100%,
              60%"
            />
          </StyledLink>

          <div className="item_text">
            <span className="item_title">pix</span>
            <p className="item_detail">
              폰케이스를 파는 쇼핑몰이 컨셉입니다. 간단하게 쇼핑몰을
              구현했습니다. firebase를 통한 로그인, 회원가입, 상품 업로드,
              장바구니 추가 기능을 구현했습니다.
            </p>

            <span className="item_title">사용 기술</span>
            <p className="item_detail">
              React, TypeScript, Tailwind CSS, Firebase, Recoil, React-Query
            </p>

            <span className="item_title">보러 가기</span>
            <p className="item_detail">
              <a
                href="https://github.com/jaeeedev/pix"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsGithub size={24} />
              </a>
              <a
                href="https://pix-liart.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsGlobe2 size={24} />
              </a>
            </p>
          </div>
        </ProjectItemBox>

        <ProjectItemBox
          ref={(el) => {
            if (el && projectRef.current) {
              projectRef.current[2] = el;
            }
          }}
        >
          <StyledLink href="/conch">
            <ProjectImg
              src={Conch}
              alt="마법의 소라고둥 썸네일"
              fill
              sizes="(max-width: 850px) 100vw,
              50vw"
            />
          </StyledLink>
          <div className="item_text">
            <span className="item_title">마법의 소라고둥</span>
            <p className="item_detail">
              스폰지밥에 나오는 마법의 소라고둥을 구현했습니다. framer-motion을
              이용해 드래그, 클릭에 따른 효과를 구현했습니다.
            </p>

            <span className="item_title">사용 기술</span>
            <p className="item_detail">
              Next.js, TypeScript, Tailwind CSS, framer-motion
            </p>

            <span className="item_title">보러 가기</span>
            <p className="item_detail">
              <a
                href="https://github.com/jaeeedev/magical-conch"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={24} />
              </a>
              <a
                href="https://magical-conch-wheat.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsGlobe2 size={24} />
              </a>
            </p>
          </div>
        </ProjectItemBox>

        <ProjectItemBox
          ref={(el) => {
            if (el && projectRef.current) {
              projectRef.current[3] = el;
            }
          }}
        >
          <StyledLink href="/portfolio">
            <ProjectImg
              src={Pf}
              alt="포폴페이지 썸네일"
              fill
              sizes="(max-width: 850px) 100vw,
              50vw"
            />
          </StyledLink>
          <div className="item_text">
            <span className="item_title">포트폴리오 페이지</span>
            <p className="item_detail">
              현재 포트폴리오 페이지입니다. 개인 정보와 프로젝트들이 기록되어
              있습니다.
            </p>

            <span className="item_title">사용 기술</span>
            <p className="item_detail">
              Next.js, TypeScript, Styled-components
            </p>

            <span className="item_title">보러 가기</span>
            <p className="item_detail">
              <a
                href="https://github.com/jaeeedev/portfolio_next"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={24} />
              </a>
            </p>
          </div>
        </ProjectItemBox>
      </ProjectContents>
    </div>
  );
}

export default Project;

const ProjectContents = styled.section`
  max-width: 1260px;
  margin: 30px auto;
  padding: 20px;
  padding-top: 80px;
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

  .item_text {
    width: 40%;

    @media screen and (max-width: 850px) {
      width: 100%;
    }
  }

  .item_detail {
    line-height: 1.5;
    font-size: 15px;
    margin-bottom: 10px;
    word-break: keep-all;

    a {
      margin-right: 10px;
    }
  }

  .item_title {
    display: block;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
  }
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

const StyledLink = styled(Link).attrs({
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
