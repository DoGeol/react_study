# React Study

* 공부하면서 필요한 부분 메모

## 1. JSX

* 리엑트에서 HTML 대신 사용되는 문법
* 리엑트 사용 시 데이터 바인딩에서 유리
    ```
    // 기본 :: 중괄호 사용하여 변수를 대입 (href, id, className, src등 HTML 속성들에도 사용 가능)
    function App(){
        let data = '안녕하세요';
        return (
            <div className="App">
              <div className="black-nav">
                <div>개발 blog</div>
                <div>{ data }</div>
              </div>
            </div>
        )
    }
  
    // 스타일 직접 입력  :: {속성명 : '속성값'} // 속성명은용 CamelCase 사용
    const style_object = {
        color : 'red',
        fontSize : '30px'
    }
    <div style={ sytle_object }>스타일 입력</div>
    <div style={ {color : 'red', fontSize : '30px'} }>스타일 입력</div>
    ```

## 2. 데이터 바인딩

1. State
    * 사용하는 이유
        * React를 사용하여 웹 App 처럼 동작하게 하기 위함
        * state는 변경되면 HTML일 재렌더링 되어짐
    * 변수 대신에 쓰는 데이터 저장공간
        * 자주 변경되는 데이터를 저장
    * useState()를 사용하여 만듬
    * 문자, 숫자, Array, Object 모두 저장 가능
      ```
      /* Destructuring 문법을 사용하여 useState에 담겨있는 변수를 a,b에 저장한다. */
      /*
          useState를 사용하면 배열을 리턴하게 되는데, 2개의 인자를 가짐
          1. 첫번째 인자 : state 값
          2. 두번째 인자 : state 변경 함수
      */
      import React, { useState } from 'react'
      function test() {
        let [a,b] = useState('text');
      }
      ```
2. Props
    * 사용하는 이유
        * State는 컴포넌트간의 공유가 되지 않으므로, 부모 컴포넌트에서 자식 컴포넌트로 State를 전달해야함
    * 부모 컴포넌트에서 자식 컴포넌트로 파라미터 처럼 전달하여 사용
      ```
      let [test,setTest] = useState('테스트');
      
      <Test propsTest={test} />;
      
      function Test(props) {
        return ( <div>props.propsTest</div> );
      }
      ```

## 3.Component

* State로 상태 관리하면서 Props를 사용하여 각 컴포넌트간에 전달이 필요함
* 컴포넌트로 만들기 좋은 것들
    1. 반복되는 HTML
    2. 자주 변경되는 HTML UI
    3. 다른 페이지
   