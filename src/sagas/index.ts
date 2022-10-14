import { all, fork } from "redux-saga/effects"
import counterSaga from "./counter.saga"

const sagas = [
  ...counterSaga
]

function* rootSaga() {
  yield all(
    sagas.map(el => fork(el))
  )
}

export default rootSaga
