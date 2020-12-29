import React, {useState} from "react";
import './App.css';

function App() {
    /* Destructuring 문법을 사용하여 useState에 담겨있는 변수를 a,b에 저장한다. */
    /*
        useState를 사용하면 배열을 리턴하게 되는데, 2개의 인자를 가짐
        1. 첫번째 인자 : state 값
        2. 두번째 인자 : state 변경 함수
    */
    let [title, setTitle] = useState(['남자 코트 추천', '강남 고기 맛집', '글 제목 테스트01']);
    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 블로그</div>
            </div>
            <div className="list">
                <h3> {title[0]} </h3>
                <p>2월 21일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3> {title[1]} </h3>
                <p>2월 20일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3> {title[2]} </h3>
                <p>2월 19일 발행</p>
                <hr/>
            </div>
        </div>
    );
}

export default App;
