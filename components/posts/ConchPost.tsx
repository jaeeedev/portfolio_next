import React from "react";
import { ProjectText, ImgContainer, Img, TextTitle } from "../../styles/common";
import ConchMain from "../../assets/images/magicalConch.png";
import String from "../../assets/images/string.gif";

const ConchPost = () => {
  return (
    <div>
      <ImgContainer>
        <video
          src={require("../../assets/images/conch-result.mp4")}
          autoPlay
          muted
          playsInline
          loop
        />
      </ImgContainer>

      <TextTitle>개요</TextTitle>
      <ProjectText>
        스폰지밥에 나오는 마법의 소라고둥을 만들었습니다. 질문할 내용을
        타이핑하고 줄을 당기면 폼이 제출되면서 랜덤한 답변이 출력됩니다. 답변은
        영화 화면처럼 만들었고 이미지로 저장할 수 있습니다.
      </ProjectText>

      <ImgContainer>
        <Img src={String} alt="줄 당기는 gif" />
      </ImgContainer>

      <ImgContainer>
        <video
          src={require("../../assets/images/conch-help.mp4")}
          autoPlay
          muted
          playsInline
          loop
        />
      </ImgContainer>
      <ProjectText>
        간단한 프로젝트기 떄문에 재미있는 요소들이 필요하겠다고 생각했습니다.
        그래서 framer-motion을 이용해 드래그, 클릭에 따른 애니메이션을
        적용했습니다.
      </ProjectText>

      <TextTitle>문제 해결</TextTitle>
      <ProjectText>
        줄 위에 소라고둥 이미지가 올려진 형태기 때문에 줄이 아닌 소라고둥
        이미지가 드래그되는 문제가 있었습니다. framer-motion의 useDragControls
        훅을 통해 소라고둥의 위에 임의의 요소를 만들고 줄과 연결하여 드래그가
        되도록 만들었습니다. 그리고 개발 도구의 디바이스 모드에서 확인했을 때
        줄이 당겨지지 않는 문제를 확인했습니다. 알아보니 터치 스크린에서
        useDragControls를 지원하기 위해서는 css에 touch-action: none; 속성을
        적용해 주어야 했습니다.
        <a href="https://jaypa.tistory.com/45">블로그 문제해결 기록</a>
      </ProjectText>

      <ProjectText>
        framer-motion을 처음 사용해본 프로젝트입니다. 낯선 라이브러리를 사용하기
        위해 공식문서를 열심히 읽어보고 예제 코드를 한줄한줄 바꿔보면서 이해하는
        시간을 가졌습니다. 시각적인 효과를 주는 게 생각보다 어렵다고 느낀 동시에
        재미도 컸던 프로젝트입니다.
      </ProjectText>
    </div>
  );
};

export default ConchPost;
