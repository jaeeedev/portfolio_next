import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { projects } from "../constants/projects";

const Container = styled.div`
  background: #f3f3f3;
  padding: 30px;
  border-radius: 0.5rem;
`;

const Li = styled.li`
  font-weight: ${({ bold }: { bold: boolean }) => (bold ? "800" : "500")};
  font-size: ${({ bold }) => (bold ? "18px" : "17px")};
  margin-left: 0.5rem;
  padding: 1px 0;
`;

const ListTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 20px;
`;

const ListLink = styled(Link)`
  text-decoration: none;
  padding: 5px 0;
  display: inline-block;
`;

function List() {
  const { query } = useRouter();
  const currentPath = "/" + query.project;

  return (
    <Container>
      <ListTitle>프로젝트 목록</ListTitle>
      <ol>
        {projects.map((project) => (
          <Li key={project.index} bold={currentPath === project.link}>
            <ListLink href={project.link}>{project.title}</ListLink>
          </Li>
        ))}
      </ol>
    </Container>
  );
}

export default List;
