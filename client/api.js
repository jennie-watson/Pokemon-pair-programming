const request = require('superagent')

const starWarsUrl = 'https://swapi.co/api/people/'
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon'

function getChars () {
  console.log('api file:')
  return request
    .get(starWarsUrl)
    .then(res => {
      // return res.body
      console.log(res)
    })
}

function getPokemon () {
  // console.log('api pokemon')

  return request
    .get(pokeUrl)
    .then(res => {
      console.log('api: ', res.body.results)
      return res.body.results
    })
}

module.exports = {
  getChars,
  getPokemon
}
