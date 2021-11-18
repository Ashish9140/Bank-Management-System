import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "reducers";
import React from "react";
import reduxThunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Root = ({children}) => {
    return (
        <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))}>
            {children}
        </Provider>
    )
}