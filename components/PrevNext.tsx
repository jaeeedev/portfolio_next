import styled from "styled-components";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { projects } from "../constants/projects";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  border-top: 1px solid #ccc;
  padding: 20px;
  gap: 30px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`;

const PrevNextSpan = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

interface PrevNextProps {
  index: number;
}

function PrevNext({ index }: PrevNextProps) {
  const prevInfo = projects.find((project) => index - 1 === project.index);
  const nextInfo = projects.find((project) => index + 1 === project.index);

  return (
    <Container>
      {prevInfo && (
        <Left>
          <StyledLink href={prevInfo.link}>
            <BsArrowLeft size={22} />
          </StyledLink>
          <StyledLink href={prevInfo.link}>
            <div>
              <PrevNextSpan>prev</PrevNextSpan>
              <h3>{prevInfo?.title}</h3>
            </div>
          </StyledLink>
        </Left>
      )}

      {nextInfo && (
        <Right>
          <StyledLink href={nextInfo.link}>
            <div>
              <PrevNextSpan>next</PrevNextSpan>
              <h3>{nextInfo?.title}</h3>
            </div>
          </StyledLink>
          <StyledLink href={nextInfo.link}>
            <BsArrowRight size={22} />
          </StyledLink>
        </Right>
      )}
    </Container>
  );
}

export default PrevNext;
