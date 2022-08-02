import { put, takeEvery, call } from "redux-saga/effects";
import {setCustomersAction, ASYNC_CUSTOMERS_SET} from '../store/customersReducer.js'

const customersApi= () => fetch("https://jsonplaceholder.typicode.com/users?_limit=10")

function* fetchCustomersWorker() {
    const customers = yield call(customersApi);
    const json = yield call(() => new Promise(res => res(customers.json())));
    yield put(setCustomersAction(json))
}

export function* customerWatcher() {
    yield takeEvery(ASYNC_CUSTOMERS_SET, fetchCustomersWorker);
}