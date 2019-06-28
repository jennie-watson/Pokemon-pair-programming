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

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  componentDidMount() {
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
      <div className="container">
        <h1 className="Header">Tandam!!!</h1>
        <p>
        <button className= "button" onClick={this.handleRandomise}>Randomise!</button>
        </p>
          <div className="content">
            <div className="row">
            
              <ul>
                {
                  matai.map(student => {
                    return <li style={{listStyleType: 'none'}} className="col-md-6" key={student}>{student}</li>
                  })
                }
              </ul>
              <ul>
                {
                  this.state.pokemon.map(pokemon => {
                    return <li style={{listStyleType: 'none'}} className="col-md-6" key={pokemon.name}>{pokemon.name}</li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </>
        )
      }
    }
