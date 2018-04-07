import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import reducers, { IState } from '../modules';

const middlewares: any[] = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducers, middleware);

export default store;


type ThunkAction2<R> = ThunkAction<R, IState, void>;
export type ThunkActionCreator<R> = (...args: any[]) => ThunkAction2<R>;
