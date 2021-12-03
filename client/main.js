const personContainer = document.querySelector('#personContainer')
const form = document.querySelector('form')


const baseURL = 'http://localhost:4004/api/name_color'

document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4004/api/compliment/")
    .then(function (response) {
        const data = response.data;
          alert(data);
      });
};

  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4004/api/fortune/")
      .then(function (response) {
        const data = response.data;
          alert(data);
      });
};

document.getElementById("specialFortune").onclick = function () {
  axios.get("http://localhost:4004/api/specialfortune/")
    .then(function (response) {
      const data = response.data;
        alert(data);
    });
};


const peopleCallback = ({data: people}) => displayPeople(people)
const errCallBack = err => console.log(err)

const getAllPeople = () => axios.get(baseURL).then(peopleCallback).catch(errCallBack)
const createPerson = body => axios.post(baseURL, body).then(peopleCallback).catch(errCallBack)

function submitHandler(event) {
  event.preventDefault()

  let name = document.querySelector('#name')
  let color = document.querySelector('#color')

  let bodyObj = {
    name: name.value,
    color: color.value
  }

  createPerson(bodyObj)

  name.value = ''
  color.value = ''
}

function createPersonCard(person) {
  const personCard = document.createElement('div')
  personCard.classList.add('person-card')

  personCard.innerHTML  = `<p class='Name'>${person.name}</p>
  <button onclick='deletePerson(${person.id})'>delete</button>'
  `

  personContainer.appendChild(personCard)
}

function displayPeople(arr) {
  personContainer.innerHTML = ''
  for (let i = 0; i < arr; i++) {
    createPerson(arr[i])
  }
}

form.addEventListener('clicked', submitHandler)

getAllPeople()