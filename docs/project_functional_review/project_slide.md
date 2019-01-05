## 3. MainSlide & SubSlide

![sdlie](../project_functional_demo/mainSlide.gif)

#### 기능설명

- CSS transition과 JS requestAnimationFrame 두가지 방법으로 애니메이션 구현

- next버튼을 누르면 다음컨텐츠를 보여주고 밑에 dots를 클릭하면 해당 content를 보여준다.
- 마지막 content에서 nextButton을 클릭하면 맨 첫번째 content를 보여준다.



이 프로젝트에서 중점에 두었던 점은 '어떻게 해서 mainSlide와 subSlide을 같이 사용할까'였다.

기능은 똑같은데 애니메이션 효과만 달랐다.

CSS만 다르게 주고, 같은 클래스를 재사용하자는 결론을 냈다.



#### 동작설명

우선 li태그가 3개 있다. 

```html
<li>1번</li>
<li>currentContent</li> /*화면에 노출되는 content*/
<li>3번</li>
```



<b>nextContentButton 클릭시의 동작</b>

1. 마지막 li태그에 다음으로 화면에 content를 rendering해준다.

```html
<li></li>
<li>currentContent</li> /*화면에 노출되는 content*/
<li>nextContent</li>
```

1. 맨 첫번째 있던 li태그를 맨 뒤로 옮겨버린다.
   - 첫번째 li태그는 3번이 되고 
   - 두번째 li태그는 1번이 되며
   - 세번째 li태그는 2번이 되어 화면에 보여지게 된다. 

```html
<li>currentContent</li> 
<li>nextContent</li> /*화면에 노출되는 content*/
<li></li>
```

previousContentButton클릭시엔 동작은 반대다.

이렇게 한다면 content가 무한개가 있어도, li태그 3개만으로 무한적으로 슬라이드효과를 줄 수 있다.



#### 배우게 된점

1. animation 구현 경험
2. 슬라이드 구현 경험

