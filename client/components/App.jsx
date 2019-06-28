import React from 'react'
import Login from './Login'
import Pairing from './Pairing'
import { Route } from 'react-router-dom'

const App = () => {
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

export default App
