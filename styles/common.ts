import styled from "styled-components";
import Image from "next/image";

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 25px;
  font-family: "Poppins", Pretendard, sans-serif;

  p {
    padding-top: 1rem;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const TitleHead = styled.div`
  margin-bottom: 20px;
  margin-top: 100px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;

  .post_span {
    display: block;
    color: #999;
    margin-bottom: 7px;
  }

  .post_title {
    font-size: 2.25rem;
    letter-spacing: 0.02em;
    margin-bottom: 10px;
    margin-top: 0;
  }

  .post_skills {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;

    .skill {
      display: inline-block;
      font-size: 13px;
      font-weight: 500;
      background: #e9ecef;
      padding: 4px 7px;
      border-radius: 2px;
    }
  }
`;

export const SkillsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  margin: 25px 0;

  a {
    display: inline-block;
    color: blue;
    margin: 0 0.2rem;
  }
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

export const LinksContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;
export const ImgContainer = styled.div`
  margin: 0 auto;
  display: block;
  position: relative;
  width: 90%;
  height: fit-content;

  video {
    display: block;
    width: 90%;
    margin: 0 auto;
  }

  .sm_video {
    display: block;
    width: 60%;
  }
`;

export const Img = styled(Image)`
  display: block;
  object-fit: cover;
  width: 100%;
  height: auto;
  position: relative !important;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
`;
