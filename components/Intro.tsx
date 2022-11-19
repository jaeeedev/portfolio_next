import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import useObserve from "../utils/useObserve";

const IntroContents = styled.section`
  overflow: hidden;
  position: relative;
  max-width: 1260px;
  margin: 60px auto;
  display: flex;
  gap: 40px;
  align-items: center;
  padding-top: 80px;
  margin-bottom: 200px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 50px;
    align-items: flex-start;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1500px) {
    margin-top: 80px;
  }
`;

const SmallGreet = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 17px;
  border-radius: 2rem;
  padding: 6px 15px 5px 15px;
  background: #f1f1ff;
  color: #4869ff;
`;

const IntroGreetBox = styled.div`
  flex: 1.3;
  padding: 20px;
`;

const GreetText = styled.h2`
  font-size: 47px;
  font-weight: 700;
  word-break: keep-all;
  line-height: 1.2;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }

  &:last-of-type {
    margin-bottom: 25px;
  }
`;

const GreetDetail = styled.p`
  font-size: 17px;
  line-height: 1.8;
  word-break: keep-all;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const InfoBox = styled.div`
  flex: 1;
  margin-right: 20px;
  padding: 20px 25px;
  background: #f9f9fb;
  border-radius: 1rem;

  @media screen and (max-width: 700px) {
    width: 100vw;
    background: #f9f9fb;
    padding: 40px 20px;
  }
`;
const Info = styled.div`
  display: flex;
  line-height: 1.9;
  align-items: center;
`;

const InfoTitle = styled.span`
  min-width: 100px;
  margin-right: 20px;
  font-weight: 700;
  font-size: 20px;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
const InfoDetail = styled.span`
  font-size: 18px;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
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

const IconWrap = styled.a`
  .icon {
    transition: all 0.2s;
    font-size: 21px;
    transform: translateY(3px);
    &:hover {
      color: #4869ff;
    }
  }
`;

function Intro({ boldHandler }: { boldHandler: (value: number) => void }) {
  const ref = useObserve(boldHandler, 0);

  return (
    <div>
      <IntroContents ref={ref} id="1">
        {/* <DecoCircle /> */}
        <IntroGreetBox>
          <SmallGreet>안녕하세요! </SmallGreet>
          <GreetText>성장하는</GreetText>
          <GreetText>프론트엔드 개발자</GreetText>
          <GreetText>박지은입니다.</GreetText>
          <GreetDetail>
            <BsCheckCircleFill style={{ paddingTop: "3px" }} /> 사용자 관점에서
            생각하고 더 효율적인 방법을 고민합니다.
          </GreetDetail>
          <GreetDetail>
            <BsCheckCircleFill style={{ paddingTop: "3px" }} /> 새로운 기술을
            배우고 적용하는 데 즐거움을 느낍니다.
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
              <IconWrap
                href="https://github.com/jaeeedev"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="icon" />
              </IconWrap>
            </InfoDetail>
          </Info>
          <Info>
            <InfoTitle>블로그</InfoTitle>
            <InfoDetail>
              <IconWrap
                href="https://jaypa.tistory.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt className="icon" />
              </IconWrap>
            </InfoDetail>
          </Info>
        </InfoBox>
      </IntroContents>
    </div>
  );
}

export default Intro;
