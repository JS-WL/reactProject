import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './component/home'
import Login from './component/login'
import './index.less'
class App extends Component {
  render() {
    return <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" exact component={Login}></Route>
    </Router>
  }
}
export default App;
