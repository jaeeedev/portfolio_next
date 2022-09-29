import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import useObserve from "../utils/useObserve";

const IntroContents = styled.section`
  position: relative;
  max-width: 1260px;
  margin: 60px auto;
  display: flex;
  gap: 40px;
  align-items: center;
  padding-top: 80px;
  margin-bottom: 200px;
  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 50px;
    align-items: flex-start;
  }
  @media screen and (min-width: 1500px) {
    margin-top: 80px;
  }
`;

const IntroGreetBox = styled.div`
  flex: 1.3;
  padding: 20px;
`;

const GreetText = styled.h2`
  font-size: 47px;
  font-weight: 700;
  word-break: keep-all;
`;

const GreetDetail = styled.p`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.4;
  word-break: keep-all;
`;

const InfoBox = styled.div`
  flex: 1;
  padding: 0 20px;
  @media screen and (max-width: 650px) {
    width: 100vw;
    background: #f3f3f3;
    padding: 40px 20px;
  }
`;
const Info = styled.div`
  display: flex;
  line-height: 1.7;
  align-items: center;
`;
const InfoTitle = styled.span`
  min-width: 100px;
  margin-right: 20px;
  font-weight: 700;
  font-size: 20px;
`;
const InfoDetail = styled.span`
  font-size: 18px;
`;

const DecoCircle = styled.div`
  position: absolute;
  top: -40px;
  left: -220px;
  width: 350px;
  height: 350px;
  border: 1px double blue;
  border-radius: 50%;
  background: blue;
  z-index: -1;
  transition: all 0.5s;
`;

const HoverText = styled.span`
  font-size: 47px;
  font-weight: 700;
`;

function Intro({ boldHandler }: { boldHandler: (value: number) => void }) {
  const ref = useObserve(boldHandler, 0);

  return (
    <div>
      <IntroContents ref={ref} id="1">
        <DecoCircle />
        <IntroGreetBox>
          <GreetText>안녕하세요</GreetText>
          <HoverText>성장하는</HoverText>
          <GreetText>프론트엔드 개발자</GreetText>
          <GreetText>박지은입니다.</GreetText>
          <GreetDetail>
            코드를 통한 결과물을 빠르게 눈으로 확인할 수 있는 프론트엔드에
            재미를 느끼고 개발을 시작하게 되었습니다. 항상 더 잘하고 싶은
            마음으로 공부하고 있습니다.
            <br />
          </GreetDetail>
        </IntroGreetBox>

        <InfoBox>
          <Info>
            <InfoTitle>이름</InfoTitle>
            <InfoDetail>박지은</InfoDetail>
          </Info>
          <Info>
            <InfoTitle>생년월일</InfoTitle>
            <InfoDetail>1997.06.13</InfoDetail>
          </Info>
          <Info>
            <InfoTitle>학력</InfoTitle>
            <InfoDetail>부경대학교 경영학부 졸업</InfoDetail>
          </Info>
          <Info>
            <InfoTitle>연락처</InfoTitle>
            <InfoDetail>010-2502-4223</InfoDetail>
          </Info>
          <Info>
            <InfoTitle>이메일</InfoTitle>
            <InfoDetail>wldms1107@gmail.com</InfoDetail>
          </Info>
          <Info>
            <InfoTitle>깃허브</InfoTitle>
            <InfoDetail>
              <a
                href="https://github.com/jaeeedev"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub
                  style={{ fontSize: "23px", transform: "translateY(5px)" }}
                />
              </a>
            </InfoDetail>
          </Info>
        </InfoBox>
      </IntroContents>
    </div>
  );
}

export default Intro;
