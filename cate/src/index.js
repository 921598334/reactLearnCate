import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import store from './store/data';
import App from './view/App';
import { Provider } from 'react-redux';
import App1 from './view/App1';




ReactDOM.render(
  <Provider store={store} >

    {/* <Router>
      <Route path="/" exact component={App}></Route>
      <Route path="/dati" exact component={Dati}></Route> 
    </Router> */}

    <App1></App1>

  </Provider >

  , document.querySelector("#root")
)






