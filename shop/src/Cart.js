import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from "react-redux";
import styled from "styled-components";

let Alert = styled.div`
  background: #f6e7bc;
  padding: 15px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  margin: auto;
`;

let AlertContent = styled.p`
  margin-bottom: 0;
`;

function Cart(props) {
    return (
        <div>
            <Table responsive="md">
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.state.map((val, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{val.id + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.quantity}</td>
                                <td>
                                    <button onClick={() => {
                                        props.dispatch({type: 'decrease', id: val.id})
                                    }}>-
                                    </button>
                                    <button onClick={() => {
                                        props.dispatch({type: 'increase', id: val.id})
                                    }}>+
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
            {
                props.isAlert
                    ? (
                        <Alert>
                            <AlertContent>지금 구매하시면 신규할인 20%</AlertContent>
                            <button onClick={() => {
                                props.dispatch({type: props.isAlert})
                            }}>닫기
                            </button>
                        </Alert>
                    )
                    : null
            }
        </div>
    )
}

function getState(state) {
    return {
        state: state.reducer,
        isAlert: state.alertReducer
    }
}

export default connect(getState)(Cart);

// export default Cart;