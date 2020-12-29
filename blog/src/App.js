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
    let [clickTitle, setClickTitle] = useState(0);
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
            {
                title.map((val, idx) => {
                    return (
                        <div className="list">
                            <h3 onClick={() => {
                                setIsModal(!isModal);
                                setClickTitle(idx);
                            }}> {val} <span onClick={() => setLike(like++)}>👍</span> {like} </h3>
                            <p>2월 21일 발행</p>
                            <hr/>
                        </div>
                    )
                })
            }
            <button onClick={changeTitle}> 첫번재 글 제목 변경</button>
            <button onClick={() => {
                // setIsModal(!modal);
                if (isModal) {
                    setIsModal(false);
                } else {
                    setIsModal(true);
                }
            }}> 모달창 열고/닫기
            </button>
            {
                isModal
                    ? <Modal modalTitle={title} modalTitleNum={clickTitle}/>
                    : null
            }
        </div>
    );
}

function Modal(props) {
    console.log(props)
    return (
        <div className="modal">
            <h2>{props.modalTitle[props.modalTitleNum]}</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
