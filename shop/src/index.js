import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from "redux";

let store = createStore(() => {
    return [{id: 0, name: '멋진 신발', quantity: 1}
        , {id: 1, name: '멋진 옷', quantity: 2}
        , {id: 2, name: '멋진 장갑', quantity: 3}
        , {id: 3, name: '멋진 모자', quantity: 4}];
});

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
