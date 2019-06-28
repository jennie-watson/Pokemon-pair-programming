import React from 'react'

import { matai } from './class'

import api from '../api'

export default class Pairing extends React.Component {
  state = {
    name: '',
    pokemon: [],
    class: []
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  shuffle (a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  componentDidMount () {
    api.getPokemon()
      .then(list => {
        this.shuffle(list)

        // shuffle class arr
        const ranMatai = this.shuffle(matai)

        this.setState({
          pokemon: list,
          class: ranMatai
        })
      })
  }

  handleRandomise = () => {
    this.setState({
      pokemon: this.shuffle(this.state.pokemon),
      class: this.shuffle(this.state.class)
    })
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
          <div>
            <button onClick={this.handleRandomise}>Randomise!</button>
          </div>
        </div>
      </>
    )
  }
}
