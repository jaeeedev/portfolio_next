import styled from "styled-components";
import Image from "next/image";
import useObserve from "../utils/useObserve";

const Wrapper = styled.div`
  background: #f9f9fb;
`;

const Contents = styled.section`
  max-width: 1260px;
  margin: 30px auto;
  padding: 20px;
  padding-top: 80px;

  @media screen and (max-width: 700px) {
    margin-top: 0;
  }
`;

const OneLine = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const SkillBox = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 30px 20px;
  display: flex;
  gap: 30px;
  flex: 1;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 1px 1px 0.5px -5px rgba(0, 0, 0, 0.05),
      1.8px 1.8px 1.8px -5px rgba(0, 0, 0, 0.03),
      2.9px 2.8px 4.4px -5px rgba(0, 0, 0, 0.022),
      5.2px 5.1px 9.4px -5px rgba(0, 0, 0, 0.018),
      12.5px 12.2px 19.3px -5px rgba(0, 0, 0, 0.015),
      48px 47px 47px -5px rgba(0, 0, 0, 0.012);
  }
`;

const ImgBox = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;
const Img = styled(Image).attrs({
  width: 100,
  height: 100,
})``;

const SkillDesc = styled.div`
  word-break: keep-all;
`;

const SkillImgBox = styled.div`
  display: flex;
  align-items: center;
`;

const SkillList = styled.li`
  list-style: none;
  line-height: 1.5;
  margin-bottom: 3px;
`;

const Status = styled.span<{ st?: boolean }>`
  //상태 프롭따라 색상 다름
  display: inline-block;
  padding: 4px 10px;
  background: ${(props) => (props.st ? "#fff6f6" : "#f1f1ff")};
  color: ${(props) => (props.st ? "#f1556f " : "#4869ff")};
  border-radius: 1rem;
  margin: 7px 0 9px 0;
  font-size: 14px;
  font-weight: 500;
`;

const SkillTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
`;

const MainTitle = styled.h2`
  font-family: "Poppins", Pretendard, sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

function Skill({ boldHandler }: { boldHandler: (value: number) => void }) {
  const ref = useObserve(boldHandler, 1);

  return (
    <Wrapper id="2" ref={ref}>
      <Contents>
        <MainTitle>SKILL</MainTitle>

        <OneLine>
          <SkillBox>
            <SkillImgBox>
              <ImgBox>
                <Img alt="html 로고" src="/imgs/html.png" />
              </ImgBox>
            </SkillImgBox>
            <SkillDesc>
              <SkillTitle>HTML</SkillTitle>
              <Status>사용중입니다.</Status>
              <ul>
                <SkillList>화면 마크업이 가능합니다.</SkillList>
                <SkillList>의미에 맞는 태그를 사용합니다.</SkillList>
              </ul>
            </SkillDesc>
          </SkillBox>

          <SkillBox>
            <SkillImgBox>
              <ImgBox>
                <Img alt="css 로고" src="/imgs/css.png" />
              </ImgBox>
            </SkillImgBox>
            <SkillDesc>
              <SkillTitle>CSS</SkillTitle>
              <Status>사용중입니다.</Status>
              <ul>
                <SkillList>flex 속성을 사용하여 스타일링 합니다.</SkillList>
                <SkillList>
                  미디어 쿼리를 통한 반응형 레이아웃 구현이 가능합니다.
                </SkillList>
              </ul>
            </SkillDesc>
          </SkillBox>
        </OneLine>
        <OneLine>
          <SkillBox>
            <SkillImgBox>
              <ImgBox>
                <Img alt="자바스크립트 로고" src="/imgs/js.png" />
              </ImgBox>
            </SkillImgBox>
            <SkillDesc>
              <SkillTitle>JavaScript</SkillTitle>
              <Status>사용중입니다.</Status>
              <ul>
                <SkillList>ES6 문법을 사용합니다.</SkillList>
                <SkillList>
                  api를 요청하고 응답을 받아 처리한 경험이 있습니다.
                </SkillList>
              </ul>
            </SkillDesc>
          </SkillBox>

          <SkillBox>
            <SkillImgBox>
              <ImgBox>
                <Img
                  alt="리액트 로고"
                  src="/imgs/logo512.png"
                  width={100}
                  height={100}
                />
              </ImgBox>
            </SkillImgBox>
            <SkillDesc>
              <SkillTitle>React</SkillTitle>
              <Status>사용중입니다.</Status>
              <ul>
                <SkillList>
                  리덕스-툴킷, 리액트 라우터 사용 경험이 있습니다.
                </SkillList>
                <SkillList>
                  스타일드 컴포넌트로 스타일링이 가능합니다.
                </SkillList>
              </ul>
            </SkillDesc>
          </SkillBox>
        </OneLine>
        <OneLine>
          <SkillBox>
            <SkillImgBox>
              <ImgBox>
                <Img alt="타입스크립트 로고" src="/imgs/ts.png" />
              </ImgBox>
            </SkillImgBox>
            <SkillDesc>
              <SkillTitle>TypeScript</SkillTitle>
              <Status st={true}>공부중입니다.</Status>
              <ul>
                <SkillList>점진적으로 적용해가는 단계입니다.</SkillList>
                <SkillList>
                  현재 페이지, 프로젝트 일부에 적용되어 있습니다.
                </SkillList>
              </ul>
            </SkillDesc>
          </SkillBox>

          <SkillBox>
            <SkillImgBox>
              <ImgBox>
                <Img alt="노드js 로고" src="/imgs/nodejs.png" />
              </ImgBox>
            </SkillImgBox>
            <SkillDesc>
              <SkillTitle>Node.js</SkillTitle>
              <Status st={true}>공부중입니다.</Status>
              <ul>
                <SkillList>점진적으로 적용해가는 단계입니다.</SkillList>
                <SkillList>프로젝트 일부에 적용되어 있습니다.</SkillList>
              </ul>
            </SkillDesc>
          </SkillBox>
        </OneLine>
      </Contents>
    </Wrapper>
  );
}

export default Skill;
