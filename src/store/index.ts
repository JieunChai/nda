import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sagaMiddleware } from '../middleware/saga';
import thunk from 'redux-thunk';
import { RootState, rootReducer } from 'reducers';
import logger from 'redux-logger';
import rootSaga from 'sagas';

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(logger, thunk, sagaMiddleware);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer as any, initialState as any, middleware) as Store<RootState>;

  sagaMiddleware.run(rootSaga);

  return store;
  
}
