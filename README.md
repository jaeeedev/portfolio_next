# 개인 포트폴리오

![pf-main](https://github.com/jaeeedev/pix/assets/72128840/9f58d261-e36a-4006-a872-741c734bdeac)

## 개요

포트폴리오 페이지입니다. 반응형으로 제작되었습니다. 개인 정보가 기재된 메인 페이지와 프로젝트의 상세 내용, 후기가 담긴 서브 페이지로 구성되어 있습니다. vercel로 배포되었습니다.

## 배포 링크

[배포 페이지](https://jaeeedev.com)

## 사용 기술

- Next.js 13 (Page Router)
- TypeScript
- Styled Component

## 설명

- **메인 페이지**  
   ![pfscroll](https://user-images.githubusercontent.com/72128840/197408016-0837396d-baa3-45bd-a676-b9e82d3a67fd.gif)

  좁은 화면에서도 볼 수 있도록 반응형으로 구현했습니다. 일정 픽셀 이하로 좁아질 경우 메뉴가 버튼으로 변경되고 클릭하면 메뉴들이 내려옵니다.
  `Intersection Observer`을 사용하여 섹션 별로 요소를 관찰합니다. 그래서 특정 섹션이 나타나면 그에 해당하는 메뉴 텍스트가 파란색으로 변경됩니다.

  ![pf-skill](https://github.com/jaeeedev/pix/assets/72128840/c72b1fb6-de16-4614-8e60-6e93846f60cf)

  skills는 `display:grid` 속성으로 나열했습니다. 기존에는 한줄 한줄씩 컴포넌트를 나누어 flex로 구현했지만 코드가 길어져 grid로 변경했습니다.

- **서브 페이지** (프로젝트 설명 페이지)

  ![pf-sub](https://github.com/jaeeedev/pix/assets/72128840/4e73cde2-3bf2-45ae-9a69-b2991c32f537)

  프로젝트에 대한 설명과 사진, 느낀 점을 기록했습니다.

  ```
  // 기존 방식
   - pages
    - pot.tsx
    - portfolio.tsx
    ...


  // 변경한 방식
  - pages
    - [project].tsx
  ```

  ```tsx
  // [project].tsx
  <div>
    <CommonDocu title={projectInfo.title} arr={projectInfo.skills} />
    <Container>
      {projectInfo.post}
      {projectInfo && <PrevNext index={projectInfo.index} />}
    </Container>
  </div>
  ```

초기에는 각 프로젝트 페이지를 별도의 파일로 만들어 포트폴리오를 구성했습니다. 하지만 포트폴리오에 싣는 프로젝트들이 계속 변경되었고, 반복되는 요소들을 일일이 작성하는 과정이 비효율적이라고 판단하여 객체에 데이터를 모아 뿌려주는 방식으로 변경하고 라우팅 방식도 동적으로 변경했습니다.

## 느낀 점

학습 목적으로 포트폴리오를 제작하는데 Next.js를 사용해 보았습니다.  
Next.js는 여러 가지 이점을 제공하여 매우 유용했습니다. 서버 사이드 렌더링을 통해 페이지의 로딩 속도를 줄일 수 있었고, 포트폴리오의 많은 이미지들을 Image 태그를 통해 자동으로 최적화할 수 있었습니다. 또한, Link 태그의 프리페칭 덕분에 적은 딜레이로 서브 페이지에 이동할 수 있었습니다.
