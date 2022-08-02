import { createStore, combineReducers, applyMiddleware } from "redux";
import { customersReducer } from "./customersReducer";
import { moneyReducer } from "./moneyReducer"; 
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    money: moneyReducer,
    customers: customersReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);
