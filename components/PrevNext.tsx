import styled from "styled-components";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

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
  prev: string;
  next: string;
  pText: string;
  nText: string;
}

function PrevNext({ prev, next, pText, nText }: PrevNextProps) {
  return (
    <Container>
      {prev !== "false" && (
        <Left>
          <StyledLink href={`/${prev}`}>
            <a>
              <BsArrowLeft style={{ fontSize: "22px" }} />
            </a>
          </StyledLink>
          <StyledLink href={`/${prev}`}>
            <a>
              <div>
                <PrevNextSpan>prev</PrevNextSpan>
                <h3>{pText}</h3>
              </div>
            </a>
          </StyledLink>
        </Left>
      )}

      {next !== "false" && (
        <Right>
          <StyledLink href={`/${next}`}>
            <a>
              <div>
                <PrevNextSpan>next</PrevNextSpan>
                <h3>{nText}</h3>
              </div>
            </a>
          </StyledLink>
          <StyledLink href={`/${next}`}>
            <a>
              <BsArrowRight style={{ fontSize: "22px" }} />
            </a>
          </StyledLink>
        </Right>
      )}
    </Container>
  );
}

export default PrevNext;
