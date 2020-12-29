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