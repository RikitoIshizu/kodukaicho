import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './main'
import { createStore } from 'redux';
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'

// storeの作成
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)