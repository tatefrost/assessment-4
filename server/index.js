const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require('./controller.JS')

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A light heart carries you through all the hard times.",
					 "A dubious friend may be an enemy in camouflage.",
					 "An inch of time is an inch of gold.",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/specialfortune", (req, res) => {
  const fortunes = ["A light heart carries you through all the hard times.",
					 "A dubious friend may be an enemy in camouflage.",
					 "An inch of time is an inch of gold.",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  let split = randomFortune.split('')
  let reverse = split.reverse()
  let newFortune = reverse.join('')
  res.status(200).send(newFortune);
  
});

app.get('/api/name_color', ctrl.getPeople)
app.post('/api/name_color', ctrl.createPerson)

app.listen(4004, () => console.log("Server running on 4004"));