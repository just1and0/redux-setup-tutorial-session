import React from 'react';
import Page1 from './pages/page1';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {allReducers} from './redux/reducer/allReducer';
import thunk from 'redux-thunk';

export default function App() {
  const store = createStore(allReducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Page1 />
    </Provider>
  );
}
