import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom'
import { mainRouter } from './routes/Index'
import * as serviceWorker from './serviceWorker';
import Login from './pages/Login';
import List from './pages/admin/productions/List';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/data';

// 该页面负责所有到路由，首先是admin/*相关到路由，然后login和404方面到路由

ReactDOM.render(

  <Provider store={store} >
    <Router>
      <Switch>
        {/* 输入所有以admin开头但url时，会利用App来进行渲染 */}
        <Route path='/admin' render={routerProps => <App {...routerProps}></App>}></Route>
        {mainRouter.map(route => {
          // {...route}可以让配置过的字段都进行自动匹配
          return <Route key={route.path} {...route}></Route>
        })}
        {/* 如果上面的都没有匹配到就进入404 */}
        <Redirect to="/404"></Redirect>
      </Switch>
    </Router>
  </Provider >
  ,

  document.getElementById('root')
);


serviceWorker.unregister();
