import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware, logger]
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store
