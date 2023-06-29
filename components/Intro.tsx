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

const IntroGreetBox = styled.div`
  flex: 1.3;
  padding: 20px;

  span {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 17px;
    border-radius: 2rem;
    padding: 6px 15px 5px 15px;
    background: #f1feff;
    color: #4869ff;
    mix-blend-mode: multiply;
  }

  .greet_main-text {
    margin-top: 0.5rem;
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
  }

  .greet_detail-text {
    margin: 1rem 0;
    font-size: 17px;
    line-height: 1.8;
    word-break: keep-all;
    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
`;

const InfoBox = styled.div`
  flex: 1;
  position: relative;
  margin-right: 20px;
  padding: 20px 25px;
  background: transparent;
  border-radius: 1rem;
  box-shadow: 1px 1px 0.5px -5px rgba(0, 0, 0, 0.05),
    1.8px 1.8px 1.8px -5px rgba(0, 0, 0, 0.03),
    2.9px 2.8px 4.4px -5px rgba(0, 0, 0, 0.022),
    5.2px 5.1px 9.4px -5px rgba(0, 0, 0, 0.018),
    12.5px 12.2px 19.3px -5px rgba(0, 0, 0, 0.015),
    48px 47px 47px -5px rgba(0, 0, 0, 0.012);

  @media screen and (max-width: 700px) {
    width: 100vw;
    background: #f9f9fb;
    mix-blend-mode: soft-light;
    padding: 40px 20px;
  }

  .info {
    display: flex;
    line-height: 1.9;
    align-items: center;
  }

  &::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #f9f9fb;
    mix-blend-mode: soft-light;
    border-radius: 1rem;
    z-index: -1;
  }

  .info_title {
    min-width: 100px;
    margin-right: 20px;
    font-weight: 700;
    font-size: 20px;

    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
  }

  .info_detail {
    font-size: 18px;

    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
`;

const DecoCircle = styled.div`
  position: absolute;
  top: 20%;
  left: 30%;
  width: 350px;
  height: 350px;
  border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
  filter: blur(3rem);
  background-image: linear-gradient(rgba(186, 255, 230, 0.85), #9bcaff);
  animation: rotate 50s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite;
  z-index: -1;
  transition: all 0.5s;
  overflow: hidden;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
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

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  overflow-x: hidden;
`;

function Intro({ boldHandler }: { boldHandler: (value: number) => void }) {
  const ref = useObserve(boldHandler, 0);

  return (
    <Wrapper>
      <DecoCircle />
      <IntroContents ref={ref} id="1">
        <IntroGreetBox>
          <span>안녕하세요! </span>
          <h1 className="greet_main-text">
            성장하는
            <br />
            프론트엔드 개발자
            <br />
            박지은입니다.
          </h1>
          <p className="greet_detail-text">
            <BsCheckCircleFill style={{ paddingTop: "3px" }} /> 사용자 관점에서
            생각하고 더 효율적인 방법을 고민합니다.
            <br />
            <BsCheckCircleFill style={{ paddingTop: "3px" }} /> 새로운 기술을
            배우고 적용하는 데 즐거움을 느낍니다.
          </p>
        </IntroGreetBox>

        <InfoBox>
          <div className="info">
            <span className="info_title">이름</span>
            <span className="info_detail">박지은</span>
          </div>
          <div className="info">
            <span className="info_title">생년월일</span>
            <span className="info_detail">1997.06.13</span>
          </div>
          <div className="info">
            <span className="info_title">연락처</span>
            <span className="info_detail">010-2502-4223</span>
          </div>
          <div className="info">
            <span className="info_title">이메일</span>
            <span className="info_detail">wldms1107@gmail.com</span>
          </div>
          <div className="info">
            <span className="info_title">깃허브</span>
            <span className="info_detail">
              <IconWrap
                href="https://github.com/jaeeedev"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="icon" />
              </IconWrap>
            </span>
          </div>
          <div className="info">
            <span className="info_title">블로그</span>
            <span className="info_detail">
              <IconWrap
                href="https://jaypa.tistory.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt className="icon" />
              </IconWrap>
            </span>
          </div>
        </InfoBox>
      </IntroContents>
    </Wrapper>
  );
}

export default Intro;
