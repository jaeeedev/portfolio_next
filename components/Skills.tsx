import styled from "styled-components";
import Image from "next/image";
import useObserve from "../utils/useObserve";
import { skills } from "../constants/skills";

const Wrapper = styled.div`
  background: #f9f9fb;
  background-size: 20px, 60px, 20px 20px, 60px 60px;
  background-image: linear-gradient(90deg, #00000004 1px, transparent 1px),
    linear-gradient(90deg, #00000004 1px, transparent 1px),
    linear-gradient(#00000004 1px, transparent 1px),
    linear-gradient(#00000004 1px, transparent 1px);
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

const Test = styled.div`
  word-break: keep-all;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  .skill_box {
    width: 100%;
    background: white;
    border-radius: 1rem;
    padding: 30px 20px;
    display: flex;
    align-items: center;
    gap: 30px;
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
  }

  .skill_title {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
  }

  .skill_img {
    width: 100px;
    height: 100px;
    position: relative;

    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
    }
  }

  ul {
    li {
      list-style: none;
      line-height: 1.5;
      margin-bottom: 3px;
    }
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

  .skill_box {
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
  }

  .skill {
    display: grid;
    gap: 1rem;
    grid-template-rows: repeat(2, minmax(595px));
  }

  .skill_img-box {
    width: 100px;
    height: 100px;
    position: relative;
  }

  .skill_list {
    li {
      list-style: none;
      line-height: 1.5;
      margin-bottom: 3px;
    }
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

const SkillImgBox = styled.div`
  display: flex;
  align-items: center;
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

function Skills({ boldHandler }: { boldHandler: (value: number) => void }) {
  const ref = useObserve(boldHandler, 1);

  return (
    <Wrapper id="2" ref={ref}>
      <Contents>
        <MainTitle>SKILL</MainTitle>

        <Test>
          {skills.map((skill) => (
            <div className="skill_box" key={skill.title}>
              <div className="skill_img">
                <Image
                  alt="html 로고"
                  src={skill.imgSrc}
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <div className="skill_title">{skill.title}</div>
                <Status st={true}>ddd</Status>
                {skill.description}
              </div>
            </div>
          ))}
        </Test>
      </Contents>
    </Wrapper>
  );
}

export default Skills;
