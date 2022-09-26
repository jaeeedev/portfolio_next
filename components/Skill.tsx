import styled from "styled-components";
import { useRef, useEffect } from "react";
import { MouseEvent } from "react";
import useObserve from "../utils/useObserve";

const Wrapper = styled.section`
  background: #f3f3f3;
  padding-top: 5px;
  margin-top: 50px;
  @media screen and (max-width: 650px) {
    background: transparent;
  }
  @media screen and (min-width: 1500px) {
    margin-top: 280px;
  }
`;

const SkillContents = styled.section`
  max-width: 1260px;
  margin: 120px auto;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 35px;
  margin-bottom: 50px;
`;

const SkillBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SkillItem = styled.div`
  width: 50%;
  display: flex;
  margin-bottom: 70px;
  align-items: center;
  gap: 40px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const SkillImg = styled.img.attrs({ alt: "기술 이미지" })`
  width: 100px;
  height: 100px;
  display: block;
  transition: all 0.6s;
`;

const SkillText = styled.p`
  line-height: 1.6;
  font-size: 16px;
  word-break: keep-all;
`;

const SubSkillBox = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

function Skill({ boldHandler }: { boldHandler: (value: number) => void }) {
  const ref = useObserve(boldHandler, 1);

  function up(e: MouseEvent<HTMLImageElement>) {
    (e.target as HTMLImageElement).style.transform = "translateY(-4px)";
  }
  function down(e: MouseEvent<HTMLImageElement>) {
    (e.target as HTMLImageElement).style.transform = "translateY(0px)";
  }

  return (
    <Wrapper id="2" ref={ref}>
      <SkillContents>
        <Title>SKILL</Title>
        <SkillBox>
          <SkillItem>
            <SkillImg
              src="/imgs/html.png"
              onMouseEnter={up}
              onMouseLeave={down}
            />
            <SkillText>
              컨텐츠에 적절한 시맨틱 태그 사용
              <br />
              스타일링과 스크립트 작성에
              <br />
              필요한 마크업을 할 수 있음
            </SkillText>
          </SkillItem>
          <SkillItem>
            <SkillImg
              src="/imgs/css.png"
              onMouseEnter={up}
              onMouseLeave={down}
            />
            <SkillText>
              플렉스를 사용하여 스타일링 가능
              <br />
              미디어 쿼리를 통한 반응형 레이아웃 구현
            </SkillText>
          </SkillItem>
          <SkillItem>
            <SkillImg
              src="/imgs/js.png"
              onMouseEnter={up}
              onMouseLeave={down}
            />
            <SkillText>
              ES6 문법 사용
              <br />
              비동기적으로 API 요청을 할 수 있음
            </SkillText>
          </SkillItem>
          <SkillItem>
            <SkillImg
              src="/imgs/logo512.png"
              onMouseEnter={up}
              onMouseLeave={down}
            />
            <SkillText>
              스타일드 컴포넌트 사용
              <br />
              리액트 라우터를 통한 다중 페이지 구현
              <br />
              리덕스를 통한 전역 상태 관리 경험
            </SkillText>
          </SkillItem>

          <div style={{ width: "100%" }}>
            <Title>STUDYING</Title>

            <SkillBox>
              <SkillItem>
                <SkillImg
                  src="/imgs/ts.png"
                  onMouseEnter={up}
                  onMouseLeave={down}
                />
                <SkillText>
                  포트폴리오 페이지에 적용되어 있으며 현재 공부중입니다.
                </SkillText>
              </SkillItem>
              <SkillItem>
                <SkillImg
                  src="/imgs/nodejs.png"
                  onMouseEnter={up}
                  onMouseLeave={down}
                />
                <SkillText>
                  프로젝트(서울번드 리액트)에 적용되어 있으며 현재 공부중입니다.
                </SkillText>
              </SkillItem>
            </SkillBox>
          </div>
        </SkillBox>
      </SkillContents>
    </Wrapper>
  );
}

export default Skill;
