import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {combineReducers, createStore} from "redux";

// let store = createStore(() => {
//     return [{id: 0, name: '멋진 신발', quantity: 1}
//         , {id: 1, name: '멋진 옷', quantity: 2}
//         , {id: 2, name: '멋진 장갑', quantity: 3}
//         , {id: 3, name: '멋진 모자', quantity: 4}];
// });

let defState = [];

function reducer(state = defState, action) {
    const {id, type} = action;
    if (type === 'addCart') {
        let found = state.findIndex((val) => {
            return val.id === action.payload.id
        })
        if (found >= 0) {
            let copy = [...state];
            copy[found].quantity++;
            return copy;
        } else {
            return [...state, action.payload];
        }
    }
    if (type === 'increase') {
        let copyState = [...state];
        copyState[id].quantity++;
        return copyState;
    } else if (type === 'decrease') {
        let copyState = [...state];
        if (copyState[id].quantity > 0) {
            copyState[id].quantity--;
        }
        return copyState;
    } else {
        return state
    }
}

function alertReducer(state = true, action) {
    return action.type === true ? !state : state
}

let store = createStore(combineReducers({reducer, alertReducer}));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
