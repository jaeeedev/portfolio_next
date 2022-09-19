import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  background: #f3f3f3;
  padding: 30px;
  margin-bottom: 40px;
`;

const Li = styled.li`
  font-weight: ${({ bold }: { bold: boolean }) => bold && "700"};
  font-size: ${({ bold }) => bold && "17px"};
  margin-left: 20px;
  padding: 3px 0;
`;

const ListTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

function List() {
  const [current, setCurrent] = useState<string>("");
  const router = useRouter();
  const param = router.pathname.replace("/", "");
  useEffect(() => {
    setCurrent(param);
  }, [current, param]);

  const opt = { textDecoration: "none", padding: "5px 0", display: "block" };

  return (
    <Container>
      <ListTitle>프로젝트 목록</ListTitle>
      <ol>
        <Li bold={current === "todolist"}>
          <Link href="/todolist" style={opt}>
            투두리스트
          </Link>
        </Li>
        <Li bold={current === "pot"}>
          <Link href="/pot" style={opt}>
            pot
          </Link>
        </Li>
        <Li bold={current === "seoulbund"}>
          <Link href="/seoulbund" style={opt}>
            서울번드
          </Link>
        </Li>
        <Li bold={current === "seoulbundreact"}>
          <Link href="/seoulbundreact" style={opt}>
            서울번드 리액트
          </Link>
        </Li>
        <Li bold={current === "portfolio"}>
          <Link href="/portfolio" style={opt}>
            포트폴리오 페이지
          </Link>
        </Li>
      </ol>
    </Container>
  );
}

export default List;
