import React from 'react'

export default class Login extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Tander</h1>
        <form>
          <input type="text" placeholder="Name" /><br />
          <input type="password" placeholder="Password" /><br />
          <button id='matchMe' onClick={this.handleClick}>MATCH ME</button>
        </form>
      </React.Fragment>
    )
  }
}
