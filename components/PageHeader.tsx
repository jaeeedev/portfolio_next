import styled from "styled-components";
import Link from "next/link";

const Inner = styled.div`
  padding: 5px 10px;
  border-bottom: 1px solid #ddd;
  z-index: 10;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  transition: all 0.4s;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const GoToMain = styled.span`
  display: block;
  padding: 10px;
  font-size: 22px;
  font-weight: 700;
  &:active {
    color: blue;
  }
  cursor: pointer;
`;

function PageHeader() {
  return (
    <header>
      <Link href="/">
        <Inner>
          <GoToMain>GO TO MAIN</GoToMain>
        </Inner>
      </Link>
    </header>
  );
}

export default PageHeader;
