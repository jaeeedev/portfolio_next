import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const TitleHead = styled.div`
  margin-bottom: 20px;
  margin-top: 100px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;
`;

export const SkillsBox = styled.div`
  display: flex;
  gap: 7px;
`;
export const SkillBadge = styled.span`
  display: inline-block;
  font-size: 13px;
  background: #e9ecef;
  padding: 3px 7px;
  border-radius: 2px;
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
  padding-bottom: 50px;
`;

export const ProjectSpan = styled.span`
  display: block;
  color: #999;
  margin-bottom: 7px;
`;
export const ProjectTitle = styled.h1`
  font-size: 2.25rem;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
  margin-top: 0;
`;

export const ProjectText = styled.p`
  line-height: 1.6;
  margin-bottom: 15px;
`;

export const ProjectImg = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  flex: 1;
`;

export const MainImgBox = styled(Image).attrs({
  priority: true,
})`
  max-width: 800px;
  margin: 0 auto;
  display: block;
`;

export const MainLinkDesc = styled.p`
  font-size: 14px;
  color: #888;
  text-align: center;
  margin-bottom: 30px;
`;

export const Code = styled.code`
  background: #e9ecef;
  padding: 3px 5px;
  font-size: 14px;
  border-radius: 3px;
  cursor: default;
`;

export const TextTitle = styled.h3`
  font-size: 30px;
  font-weight: 800;
  margin: 10px 0;
  margin-top: 60px;
`;

export const GoToGithub = styled.a`
  color: #8b2b4b;
  text-decoration: underline;
`;
