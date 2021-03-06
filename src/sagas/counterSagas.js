import { INCREMENT, DECREMENT } from "../actions/actionTypes";
//Saga effects
import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

export function* sayHello() {
    console.log('Hello world!');
}

function* increment() {
    console.log(`This is increment saga`);
}
export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment)
}

function* decrement() {
    console.log(`This is decrement saga`);
}
export function* watchDecrement() {
    console.log(`watchDerement saga`)
    yield takeEvery(DECREMENT, decrement)
}