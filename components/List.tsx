import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  background: #f3f3f3;
  padding: 30px;
  margin-bottom: 40px;
`;

const Li = styled.li`
  font-weight: ${({ bold }: { bold: boolean }) => bold && "700"};
  font-size: ${({ bold }) => bold && "17px"};
  margin-left: 20px;
  padding: 5px 0;
`;

const ListTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

const ListLink = styled(Link)`
  text-decoration: none;
  padding: 5px 0;
  display: block;
`;

function List() {
  const router = useRouter();
  const param = router.pathname.replace("/", "");
  const opt = { textDecoration: "none", padding: "5px 0", display: "block" };

  return (
    <Container>
      <ListTitle>프로젝트 목록</ListTitle>
      <ol>
        <Li bold={param === "pepsi"}>
          <ListLink href="/pepsi">ZERO PEPSI FINDER</ListLink>
        </Li>
        <Li bold={param === "seoulbund"}>
          <ListLink href="/seoulbund">서울번드</ListLink>
        </Li>
        <Li bold={param === "seoulbundreact"}>
          <ListLink href="/seoulbundreact">서울번드 리액트</ListLink>
        </Li>
        <Li bold={param === "portfolio"}>
          <ListLink href="/portfolio">포트폴리오 페이지</ListLink>
        </Li>
      </ol>
    </Container>
  );
}

export default List;
