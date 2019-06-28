import React from 'react'

import { getPokemon } from '../api'

import { getChars } from '../api'

import { matai } from './class'

export default class Pairing extends React.Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = () => {
    getPokemon(this.state.name)
      .then(result => {
        this.setState({
          result
        })
      })
  }

  render = () => {
    return (
        <>
          {/* <div>
            Choose your partner, choose your destiny...
            <br />
            <input type="text" value={this.state.name} onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Submit!</button>
          </div>

          {this.state.result && (
            <div>
              <h2>Your programming partner is:</h2>
              <p>this.state.result</p>
            </div> */}
          )}
        </>
    )
  }
}
