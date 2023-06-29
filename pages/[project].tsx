import PrevNext from "../components/PrevNext";
import { useEffect } from "react";
import { Container } from "../styles/common";
import CommonDocu from "../components/CommonDocu";
import useInfo from "../utils/useInfo";

function Project() {
  useEffect(() => {
    // window.scrollTo({ top: 0 });
  }, []);

  const projectInfo = useInfo();
  if (!projectInfo) return <></>;

  return (
    <div>
      <CommonDocu title={projectInfo.title} arr={projectInfo.skills} />
      <Container>
        {projectInfo.post}
        {projectInfo && <PrevNext index={projectInfo.index} />}
      </Container>
    </div>
  );
}

export default Project;
