# React Study - Shop

## 1. React Router

* 페이지를 추가하고 싶으면 React Router Dom을 사용
* react-router-dom
    1. BrowserRouter vs HashRouter
        * BrowserRouter : 기본 설정 *(서버 설정하여 잘못된 접근 페이지 설정등 필요)
        * HashRouter    : 서버에 잘못된 정보를 요청하지 않도록 하기 위해 사용

    2. index.js에서 App을 BrowserRouter등의 태그를 감싸고
    3. Apps.js에서 Route Tag를 사용하여 URL을 라우팅하여 사용
    4. useHistory 훅을 사용하여 뒤로가기 구현 가능
    5. Link 훅을 사용하여 href 대신에 사용 가능  
       `<div><Link to="/">Home</Link></div>`
    6. Switch 훅을 사용하여 Switch 태그를 감싸면 하나의 Router만 보여줌 (중복 방지)
        * 다만 중복 될 경우 제일 위의 라우터가 보여짐
    7. useParams 훅을 사용하면 파라미터의 값을 받아 올 수 있음

## 2. styled-components

* class 중복을 방지하기 위한 CSS in js
    * 장점
        1. 파일 안에 선언으로 컴포넌트명이 겹쳐도 css 이슈가 생기지 않음
        2. 파일 안에 관리되므로, css 수정이 필요할때 컴포넌트를 찾으면 됌
    * 단점
        1. css 아키텍쳐를 잘 만들 수 있으면 오히려 관리가 어려울 수 있음
        2. 컴포넌트마다 css 선언을 해야함
    * 사용법
        ```
        let 박스 = styled.div`
            padding: 20px;
        `;
        
        let 제목 = styled.h4`
            font-size: 25px;
            color: ${ props => props.색상 };  // 태그에서 props로 값을 전달 받을 수 있음
        `;
      
        <박스>
            <제목 색상="red">상세페이지</제목>     // props 색상 > red 전달
        </박스>
        ```

## 3. Lifecycle

* class 방식
    ```
    class Lifecycle extends React.Component {
        componentDidMount() {};             // 컴포넌트가 Mount 되었을 때 실행되는 코드 (ex. Ajax)
        componentWillUnMount() {};          // 컴포넌트가 Unmount 되었을 때 실행되는 코드
    }
    ```
* function 방식
    ```
    function Lifecycle() {
        useEffect( () => {} );              // 컴포넌트가 Mount, Update 되었을 때 실행되는 코드
        return function UnMountFunc() {};   // 컴포넌트가 Unmount 되었을 때 실행되는 코드       
    }
    ```
    * `useEffect(()=>{},[]);`에서 함수 끝에 매개변수를 넣을 수 있는 데, 이 부분에 빈배열을 넣을 수 있음
        * 빈 배열을 넣을 경우 최초 실행되고 이후 Update에 영향을 받지 않음
        * 배열 안에 State를 넣으면 해당 State가 업데이트 될 때만 useEffect가 실행 됌

## 4. Context API

* 중첩 된 컴포넌트에 props를 전달할 때 유용한 API
    * redux를 사용해도 같은 효과를 갖음
    * react에서 공식적으로 지원하는 기능
        ```
        let testContext = React.createContext();
       
        // 1. 전달하고자 하는 컴포넌트를 태그로 감싸고, 넘기는 State를 value값에 넣어줌
        <testContext.Provider value={State}>
            <Component> 전달하고자 하는 컴포넌트 <Component>
        </testContext.Provider>
      
        // 2. 전달받은 컴포넌트에서 useContext로 전달받아서 사용, 하위용 컴포넌트에서도 동일하게 사
        import {useContext} from 'react';
        let state = useContext(testContext);
        ```
    * 만약 js파일로 분리해서 사용한다면 Context를 export하고, js파일에 import하여 사용하면 됌
