import { put, takeEvery } from 'redux-saga/effects';
import { topUpAction, ASYNC_TOP_UP, withdrawAction, ASYNC_WITHDRAW } from '../store/moneyReducer';


const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* incrementWorker() {
    yield delay(1000);
    yield put(topUpAction())

};

function* decrementWorker() {
    yield delay(1000);
    yield put(withdrawAction());

};

export function* countWatcher() {
    yield takeEvery(ASYNC_TOP_UP, incrementWorker);
    yield takeEvery(ASYNC_WITHDRAW, decrementWorker);
};