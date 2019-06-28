import React from 'react'
import { matai, password } from './class'
import { Redirect } from 'react-router-dom'

export default class Login extends React.Component {
  state = {
    name: '',
    password: '',
    authenticated: false,
    incorrect: false
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault()

    const authName = matai.find(name => name === this.state.name)
    
    if (authName && this.state.password === password) {
      console.log('authenticated user')
      this.setState({
        authenticated: true,
        incorrect: false
      })
    } else {
      console.log('incorrect details')
      this.setState({
        incorrect: true
      })
    }
  }
  render () {
    if (this.state.authenticated) {
      return <Redirect to='/tandem'/>
    }
    return (
      <React.Fragment>
        <h1 className = "Header" >tandar</h1>
        {
          this.state.incorrect && <div style={{ color: 'red' }}><h1 >incorrect details</h1> <p>please try again</p></div>
        }
        <div className = "row">
          <form onSubmit={this.handleClick}>
            <input className = "col-md-12" type="text" name="name" placeholder="Name" onChange={this.handleInput} value={this.state.name}/>
            <p></p>
            <input className = "col-md-12" type="password" name="password" placeholder="Password" onChange={this.handleInput} value={this.state.password}/>
            <p></p>
            <button id='matchMe'>Login</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}
