import React, { Component } from 'react'
import News from './News/'
import Header from './Header/'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default class HackerNews extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route path='/' component={News}/>
            <Route path='/news' component={News}/>
            <Route path='/newest' component={News}/>
            <Route path='/ask' component={News}/>
            <Route path='/show' component={News}/>
            <Route path='/jobs' component={News}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
