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
    let [like, setLike] = useState(0);
    let changeTitle = () => {
        let titleArr = [...title];
        console.log(titleArr);
        titleArr[0] = '여자 코트 추천';
        setTitle(titleArr);
    }
    let [isModal, setIsModal] = useState(false);
    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 블로그</div>
            </div>
            <div className="list">
                <h3> {title[0]} <span onClick={() => setLike(like++)}>👍</span> {like} </h3>
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
            <button onClick={changeTitle}> 첫번재 글 제목 변경</button>
            <button onClick={() => {
                // setIsModal(!modal);
                if (isModal) {
                    setIsModal(false);
                } else {
                    setIsModal(true);
                }
            }}> 모달창 등장
            </button>
            {
                isModal
                    ? <Modal/>
                    : null
            }
        </div>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h2>글제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
