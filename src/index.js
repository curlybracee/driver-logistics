import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from './redux/reducer/rootReducer';
import createSagaMiddleware from 'redux-saga';
import commonSaga from './redux/commonSaga';

import App from './App';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancer = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose
const store = createStore(rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
store.runSaga = sagaMiddleware.run
store.runSaga(commonSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
