import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from "react-redux";

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
        </div>
    )
}

function getState(state) {
    return {
        state: state
    }
}

export default connect(getState)(Cart);

// export default Cart;