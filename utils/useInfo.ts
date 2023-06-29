import { projects } from "../constants/projects";
import { useRouter } from "next/router";

const useInfo = () => {
  const { query } = useRouter();
  const currentPath = "/" + query.project;
  const projectInfo = projects.find((project) => project.link === currentPath);

  return projectInfo;
};

export default useInfo;
