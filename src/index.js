import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
// import store from './store'
import './index.css';
// import App from './App';
import App from './components/App'
import Root from './containers/Root'
import reportWebVitals from './reportWebVitals';
import rootReducer from './redux/reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Root />
    {/* <Provider store={store}>
       <App />
    </Provider> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
