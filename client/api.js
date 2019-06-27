const request = require('superagent')

const starWarsUrl = 'https://swapi.co/api/people/'

function getChars () {
  console.log('api file:')
  return request
    .get(starWarsUrl)
    .then(res => {
      // return res.body
      console.log(res)
    })
}

module.exports = {
  getChars
}
