import React from "react";
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${props => props.색상};
`;

function Detail(props) {
    let {id} = useParams();
    let imgUrl = `https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`
    let history = useHistory();
    let product = props.shoes.find((pd) => pd.id === parseInt(id));
    return (
        <div className="container">
            <박스>
                <제목 색상="red">상세페이지</제목>
            </박스>
            <div className="row">
                <div className="col-md-6">
                    <img src={imgUrl} width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price}</p>
                    <button className="btn btn-danger">주문하기</button>
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

export default Detail;