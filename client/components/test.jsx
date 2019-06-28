import React, { Component } from 'react'
import { matai } from './class'
const api = require('../api')

export default class test extends Component {
  state = {
    class: matai
  }
  componentDidMount () {
    api.getChars()
    api.getPokemon()
    console.log(matai)
  }
  render () {
    return (
      <div>
        test component
      </div>
    )
  }
}
