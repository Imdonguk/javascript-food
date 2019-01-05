## 6. 검색자동완성

![autoComplete](../project_functional_demo/autoComplete.gif)

#### 기능설명

- 검색어를 입력하면 관련검색어가 화면에 노출된다.

- 관련검색어에 마우스오버시에 해당 검색어가 하이라이트되고, 클릭하면 검색창에 해당검색어가 입력된다.

- 키보드 ArrowDown버튼을 누르면 바로 밑에 검색어가 하이라이트되고 

  ArrowUp버튼을 누르면 위에 검색어가 하이라이트된다. Enter를 누르면 검색창에 해당검색어가 입력된다.



#### 동작설명

- 검색어 입력시에 해당 검색어에 맞는 URL로 API요청을 한다.
- 요청한 API를 템플릿를 통해 화면에 렌더링시킨다.
- mouseEvnet나 keyEvent ( ArrowDown, ArrowUp )시에 해당 검색어를 하이라이트 시킨다.



#### 구현시에 어려웠던 점

- 이벤트가 정말 많았다. mouseover, mouseleave, click, keyUp( ArrowUp, ArrowDown, Enter)

  한 동작에 여러이벤트가 중복으로 발생하다 보니깐 디버깅하기가 어려웠다. ( 그래도 디버깅이 최고다. )

- API요청을 많이하니깐 에러처리하는게 어려웠다.

  promise의 resolve, reject와 async & await에서는 try, catch문을 통해서 해결



#### 배우게 된 점

- 다양한 이벤트와 그 이벤트 구현경험
- promise, fetch, async & await를 통해서 비동기코드의 동기적 로직

