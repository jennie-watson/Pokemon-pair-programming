import React, { Component } from 'react'
const api = require('../api')

export default class test extends Component {
  componentDidMount () {
    api.getChars()
  }
  render () {
    return (
      <div>
        test component
      </div>
    )
  }
}
