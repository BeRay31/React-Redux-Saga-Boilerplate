import { incrementAsync, incrementAsyncFailed, incrementAsyncSuccess } from "../reducer/counter.reducer";
import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchCount } from "../lib/counterAPI";

export function* incrementAsyncSaga(action: PayloadAction<number>) {
  try {
    const response: { data: number } = yield call(fetchCount, action.payload)
    yield put(incrementAsyncSuccess(response.data))
  } catch (error: any) {
    yield put(incrementAsyncFailed())
  }
}

export function* watchIncrementAsync() {
  yield takeLatest(incrementAsync.toString(), incrementAsyncSaga)
}

const counterSagas = [watchIncrementAsync]

export default counterSagas
