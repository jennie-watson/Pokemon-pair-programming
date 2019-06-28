import React from 'react'
const api = require('../api')

export default class Pairing extends React.Component {
  state = {
    name: null
  }

  componentDidMount () {
    api.getChars()
    api.getPokemon()
    // console.log(matai)
  }

  handleClick = () => {
    this.setState({})
  }

  render () {
    return (
      <h1>hi</h1>
    )
  }
}
