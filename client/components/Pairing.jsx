import React from 'react'

import { matai } from './class'

import api from '../api'

export default class Pairing extends React.Component {
  state = {
    name: '',
    pokemon: []
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }
  componentDidMount () {
    api.getPokemon()
      .then(list => {
        this.setState({
          pokemon: list
        })
      })
  }

  handleClick = () => {
    this.setState({})
  }

  render = () => {
    return (
      <>
        <div>
          <ul>
            {
              matai.map(student => {
                return <li key={student}>{student}</li>
              })
            }
          </ul>
          <ul>
            {
              this.state.pokemon.map(pokemon => {
                return <li key={pokemon.name}>{ pokemon.name }</li>
              })
            }
          </ul>
        </div>
      </>
    )
  }
}
