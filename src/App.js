import React, { Component } from 'react';
import './style/usage/core/reset.scss'
import { Ui as Home } from './pages/home'
import { Ui as Detail } from './pages/detail'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/detail/:id/:from' component={Detail}/>
        </Switch>
      </Router>
    )
  }
}

export default App
