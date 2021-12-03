const people = require('./db.json')
let globalId = 0

module.exports = {
  getPeople: (req, res) => {
    res.status(200).send(people)
  },
  createPerson: (req, res) => {
    const {Name, color} = req.body
    let newPerson = {
      Name,
      color,
      id: globalId
    }
    people.push(newPerson)
    res.status(200).send(people)
    globalId++
  }

}