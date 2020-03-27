import { Store, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { requestMiddleware } from 'middleware/requestMiddleware';
import { RootState } from 'modules';


const logger = createLogger();

export const history = createBrowserHistory();

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(logger, thunk, requestMiddleware);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer as any, initialState as any, middleware) as Store<RootState>;

  return store;
};