# React
### Why?
- 복잡한 웹 앱(애플리케이션)에서 데이터와 화면간의 불일치 문제를 해결하기 위함. 

### 
- Component: 데이터와 화면을 하나로 묶은 재사용성 있는 코드조각
- Hook: ref 랑 setState 를 함수 컴포넌트에서도 사용가능하게
- 객체를 함부로 바꾸지 말아라
  - `<button onClick={() => this.state({liked: true})}> LIKE </button>`
- ref = {(c) => { this.input = c}}
- setState
  - setState() 마다 render() 함수가 다시 실행된다.
  - 비동기함수이다.

### Real DOM vs Virtual DOM
#### 예시
1. 만약 10개의 리스트가 있다.
2. 그 중에 한가지의 리스트만 Update 됨
    - Real DOM
        - 전체 리스트를 다시 Reload !
        - 매우 비싼 작업!
    - Virtual DOM
        - 그바뀐 한가지만 DOM 에서 바꾼다

#### HOW?
1. JSX(우선 HTML로 간단히 알아두기)를 렌더링한다.
    - 그러면 Virtual DOM 이 Update 됨
2. Virtual DOM이 이전 Virtual DOM에서 찍어둔 Snapshot과 비교해서 바뀐 부분을 찾음.
    - 이 과정을 diffing 이라 부름
3. 그 바뀐 부분만 Real DOM에서 바꿔준다.

### Create React App
#### Babel
- 구형 브라우저에서 최신 JS문법을 ES5로 돌 수 있게 변환 시켜주는 도구(트랜스파일러)
#### Webpack
- 여러 개의 js 파일을 하나 또는 소수의 파일로 묶는 도구
- 여러 html/js/css/이미지 파일들 한 번에 브라우저에 로딩하면 너무 느림 -> 웹팩으로 번들링.
- 웹팩은 src/** 만 처리하기 때문에 이미지는 public/** 이 아닌 src 에 위치시킨다. 
- 웹팩 안에 바벨 있음