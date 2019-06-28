import React from 'react'
import Login from './Login'
import Pairing from './Pairing'
import { Route } from 'react-router-dom'
const api = require('../api')

class App extends React.Component {
  render () {
    return (
      <>
        <Route path='/' exact render={() =>
          <Login />
        }/>
        <Route path='/tandem' render={() =>
          <Pairing />
        }/>
      </>
    )
  }
}

export default App
