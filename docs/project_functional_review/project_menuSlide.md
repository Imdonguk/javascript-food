## 4. MenuSlide ( 상품리스트 )

![menuSlide](../project_functional_demo/menuSlide.gif)

#### 기능

- 유한한 컨텐츠를 무한슬라이딩한다.



#### 특징

- tabUI에서 썻던 template과 똑같은 template을 적용
- content의 수가 몇 개일지 모른다는 가정하에 구현
- content의 수가 4의배수로 딱 떨어지지 않을 시에도 동작되게 구현



#### 동작설명

content의 수가 8개라고 가정하에 설명하겠다.

- 제일먼저 API를 가져와서 변수에 데이터를 저장한다.

- 화면에 모든 데이터를 렌더링 시켜준다.

  ```
  //1번부터 8번까지 있다면 
  5 6 7 8 1 2 3 4 5 6 7 8 1 2 3 4
  //이렇게 렌더링 시켜줍니다. 쉽게 4단위로 묶겠습니다.
  2-1번 1번 2번 1-1번
  ```

  맨 뒤의 컨텐츠와 맨 앞에 있는 컨텐츠를 추가로 렌더링 시켜줍니다.

- 컨텐츠의 위치값을 계산한다.

  위에서 처럼 2-1번 1번 2번 1-1번이 있다면 

  2-1번을 minPosition, 1번을 firstContent, 2번을 lastContent, 1-1을 maxPosition라는 변수들에 값을 저장해주고,

  현재의 positionX의 값이 maxPosition이나 minPosition일 때 애니메이션이 끝난 후에 Position값을 변경해준다.

  화면에는 이렇게 보여지게 된다.

  ```html
  1번 //처음로드할 때
  2번 //click nextContent
  1-1번 > 1번 //click nextCotnent
  2번 // click nextButton 
  ```

  2번에서 1-1번이 되고 애니메이션시간이 끝나게 되면 1번으로 포지션값이 한번 더 변하게 되고,

  이렇게 동작함으로써 무한으로 슬라이드 동작을 할 수가 있다.
