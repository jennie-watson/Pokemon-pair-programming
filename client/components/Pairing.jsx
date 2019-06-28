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
        <div>
          <ul>
            {
              matai.map(student => {
                return <li>{student}</li>
              })
            }
          </ul>
          <ul>
            {
              getPokemon.map(pokemon => {
                return <li>{pokemon}</li>
              })
            }
          </ul>
        </div>
      </>
    )
  }
}
