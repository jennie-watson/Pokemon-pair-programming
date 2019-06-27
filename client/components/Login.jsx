import React from 'react'

class Login extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>App Name</h1>
        <form>
          <input type="text" placeholder="Name" />

          <input type="password" placeholder="Password" />
          <button id='matchMe' onClick={this.handleClick}>MATCH ME</button>
        </form>
      </React.Fragment>
    )
  }
}