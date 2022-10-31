## 박지은 포트폴리오

![pfheader](https://user-images.githubusercontent.com/72128840/196480250-a0323f70-ed07-4246-b5a5-22b8cb016b17.gif)

### 개요

포트폴리오 페이지입니다. 개인 정보가 기재된 메인 페이지와 프로젝트의 상세 내용, 회고가 담긴 서브 페이지들로 구성되어 있습니다. 
반응형으로 제작되었습니다. 기존 `리액트`와 `리액트 라우터` 로 제작된 페이지를 `넥스트` +  `타입스크립트` 조합으로 변경했습니다.

### 배포 링크

[배포 페이지](https://jaeeedev.com)

[포트폴리오 내 설명 페이지](https://www.jaeeedev.com/portfolio)


### 🛠사용 기술

<img src="https://img.shields.io/badge/Next.js-000000?style=flat-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-badge&logo=TypeScript&logoColor=white"> 
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-badge&logo=styled-components&logoColor=white">


### 설명   

+ **메인 페이지**       
![pfscroll](https://user-images.githubusercontent.com/72128840/197408016-0837396d-baa3-45bd-a676-b9e82d3a67fd.gif)
    
좁은 화면에서도 볼 수 있도록 반응형으로 구현했습니다. 일정 픽셀 이하로 좁아질 경우 메뉴가 버튼으로 변경되고 클릭하면 메뉴들이 내려옵니다.
`Intersection Observer`을 사용하여 섹션 별로 요소를 관찰합니다. 그래서 특정 섹션이 나타나면 그에 해당하는 메뉴 텍스트가 파란색으로 변경됩니다.



              
+ **서브 페이지** (프로젝트 설명 페이지)      
![무제1](https://user-images.githubusercontent.com/72128840/197406598-fb24966d-3f6f-43e1-bba6-136a06c05776.gif)

페이지에 대한 사진, 설명, 회고가 담긴 페이지를 넣었습니다. 상단에 있는 리스트나 페이지 최하단의 이전글/다음글 보기 링크를 통해 다른 글로 이동할 수 있습니다.


### 문제 해결? 


![null_prob](https://user-images.githubusercontent.com/72128840/197415635-af45b7ba-3590-4aea-a694-985566858fab.png)

`useRef`를 배열로 관리하기 위한 코드에서 오류가 발생했습니다.

```
<ProjectItemBox
          ref={(el) => {
              projectRef.current[3] = el;
          }}
        >
        ...
</ProjectItemBox>
```

단순히 이렇게 할당하는 코드를 작성하게 되면 `Object is possbly null` 이라는 문구가 떴습니다. 일단 에러 문구로 생각해 보았을 때, 해당 코드 블록 내에서 사용하는 객체들이 없다는 얘기겠구나 싶어 아래 코드로 수정해서 문제를 해결했습니다.


```
<ProjectItemBox
          ref={(el) => {
            if (el && projectRef.current) {
              projectRef.current[3] = el;
            }
          }}
        >
        ...
</ProjectItemBox>
```

그리고 `useRef`에 대해 자세히 알아보니 컴포넌트의 렌더링 이전에는 `current`의 초기값이 `null`로 설정된다고 합니다. 그렇기 때문에 이런 문제가 발생한 것 같습니다. `useRef`는 자주 쓰는 훅 중 하나지만 많이 사용한다고 해서 잘 아는게 아니구나 다시한번 생각하게 되는 계기였습니다. 

```
//전
const projectRef = useRef<any>([]);

//후
const projectRef = useRef<null | HTMLDivElement[]>([]);

```

그리고
이 코드를 해결하면서 마지막 any 타입을 걷을 수 있었습니다. 옵셔널 체이닝 문법(`?.`)을 이용하면 if 문법보다 더 짧게 코드를 쓸 수 있다는 것도 배웠습니다.




### Next.js와 TypeScript 첫 사용 소감?

타입스크립트를 처음 적용하려고 할 때 고민했던 것은 일일이 타입을 지정해줘야 한다면 손가락이 피곤하지 않을까..? 였습니다.    
하지만 타입스크립트는 **타입 추론** 이라는 기능을 가지고 있어 값을 보고 변수의 타입을 알아서 지정합니다. 이 기능이 가장 마음에 들었습니다.   
그리고 이번에는 빨리 배울 목적으로 강의를 한번 씩만 듣고 무작정 코드를 고치고 오류를 보면 구글링하며 하나씩 해결해나가는 방식으로 진행해보았는데, 콘솔에 30줄씩 떠 있는 오류를 하나하나씩 없애가는 과정에서 희열도 느꼈고 에러를 겁내지 않는 마인드도 생겼다고 생각합니다.


의도하진 않았지만 넥스트에서 제공하는 Image태그를 이용하면 이미지 최적화를 자동으로 지원한다고 합니다.   
또한 저는 작동 화면을 보여주기 위해 움짤을 만들었는데 gif 확장자는 용량을 많이 차지해 복잡한 페이지에는 적합하지 않다고 들었습니다.    
코드 자체에도 집중해야겠지만 용량을 크게 차지하는 이미지의 최적화에 대해서도 더 고민해 볼 수 있는 계기였습니다.
