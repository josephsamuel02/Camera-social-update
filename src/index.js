import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import promiseMiddleWare from "redux-promise";
// import rootReducer from "./Store/Reducers/index";
// const composeenhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const createStorWithMiddleWare = composeenhancer(
//     applyMiddleware(promiseMiddleWare)
// )(createStore);

// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store={createStorWithMiddleWare(rootReducer)}>
//             <App />
//         </Provider>
//     </React.StrictMode>,
//     document.getElementById("root")
// );
