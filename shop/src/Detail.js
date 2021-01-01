import {React, useContext, useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {stockContext} from "./App.js";

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${props => props.색상};
`;

let Alert = styled.div`
  background: #eeeeee;
  padding: 15px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  margin: auto;
`;

let AlertContent = styled.p`
  margin-bottom: 0;
`;

function Detail(props) {
    let {id} = useParams();
    let imgUrl = `https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`
    let history = useHistory();
    let product = props.shoes.find((pd) => pd.id === parseInt(id));
    let [isAlert, setIsAlert] = useState(true);
    let stock = useContext(stockContext);
    console.log('stock ::: ', stock);
    useEffect(() => {
        let timer = setTimeout(() => {
            setIsAlert(false);
        }, 3000);
        return clearTimeout(timer);
    }, [isAlert])

    return (
        <div className="container">
            <박스>
                <제목 색상="red">상세페이지</제목>
            </박스>
            {
                isAlert ?
                    (<Alert><AlertContent>재고가 얼마 남지 않았습니다.</AlertContent></Alert>)
                    : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={imgUrl} width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price}</p>
                    <StockInfo stock={props.stock[parseInt(id)]}/>
                    <button className="btn btn-danger" onClick={() => {
                        let test = [...props.stock];
                        test[parseInt(id)]--;
                        props.setStock(test);
                    }}>주문하기
                    </button>
                    <button className="btn btn-danger" onClick={() => {
                        // history.goBack();
                        history.push('/');
                    }}>뒤로가기
                    </button>
                </div>
            </div>
        </div>
    )
}

function StockInfo(props) {
    return (
        <p>재고 : {props.stock}</p>
    );
}

export default Detail;