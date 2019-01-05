## html, css 구조설계 및 스타일적용

![layer(/Users/woogie/Desktop/bmc/layer(1).png)](../project_functional_demo/layer(1).png)

기능은 없지만 html, css만을 사용해서 구조설계와 스타일을 적용했다.

1. 우선 크게크게 layer를 나눴다.(user-menu-wrap, head-wrap, nav-wrap, mainslide-wrap, best-seller-wrap등)

2. 규칙을 적용

   처음에는 재사용을 생각하지 않고, CSS 클래스명을 통해서 바로 수정할 곳을 잘 찾아가는게 중요하다고 생각했다.

   header-wrap부분을 예로 들어보겠다.

   ```css
   .header-wrap{
       ...
   }
   .header-wrap .header{
       ...
   }
   .header-wrap .header .searchbar{
       ...
   }
   .header-wrap .header .logo{
       ...
   }
   ```

   > 어디에 어떤 스타일이 어떻게 적용됐는지 쉽게 알 수 있게 하자

   여기에 중점을 두고 구현했다.

