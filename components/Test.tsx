import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.section`
  max-width: 1260px;
  margin: 30px auto;
  padding: 20px;
  padding-top: 80px;
`;

function Test() {
  return (
    <>
      <Wrapper>
        <h3>테스트</h3>

        <div>
          <div></div>
          <div></div>
        </div>
      </Wrapper>
    </>
  );
}

export default Test;
