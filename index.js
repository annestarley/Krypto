// Creating 2 different Decks

let deck1 = []
let deck2 = []

for (let i = 1; i < 7; i++) {
  deck2.push(i)
  deck2.push(i)
  deck2.push(i)
  deck1.push(i)
  deck1.push(i)
  deck1.push(i)
}

for (let i = 7; i < 11; i++) {
  deck2.push(i)
  deck2.push(i)
  deck2.push(i)
  deck2.push(i)
  deck1.push(i)
  deck1.push(i)
  deck1.push(i)
  deck1.push(i)
}

for (let i = 11; i < 18; i++) {
  deck2.push(i)
  deck2.push(i)
}

for (let i = 18; i < 26; i++) {
  deck2.push(i)
}

// Creating variables

let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let section1 = document.querySelector('#game1')
let section2 = document.querySelector('#game2')
let container1 = document.querySelector('#container1')
let container2 = document.querySelector('#container2')


// Creating Functions to generate random cards
let getCard = (array) => {
  let card = array[Math.floor(Math.random() * array.length)]
  let cardDiv = document.createElement('div')
  cardDiv.setAttribute('class', 'card')
  cardDiv.innerText = card
  return cardDiv
}

let getEqualsCard = (array) => {
  let card = array[Math.floor(Math.random() * array.length)]
  let cardDiv = document.createElement('div')
  cardDiv.setAttribute('class', 'card')
  cardDiv.innerText = ` = ${card}`
  return cardDiv
}

// Creating Event Listeneres for buttons clicks

button1.addEventListener('click', (e) => {
  button1.parentNode.removeChild(button1)
  container1.parentNode.removeChild(container1)
  container1 = document.createElement('div')
  container1.setAttribute('class', 'gameDiv')

  container1.appendChild(getCard(deck1))
  container1.appendChild(getCard(deck1))
  container1.appendChild(getCard(deck1))
  container1.appendChild(getCard(deck1))
  container1.appendChild(getCard(deck1))
  container1.appendChild(getEqualsCard(deck1))

  section1.appendChild(container1)
  button1.innerText = 'Deal again!'
  section1.appendChild(button1)
})

button2.addEventListener('click', (e) => {
  button2.parentNode.removeChild(button2)
  container2.parentNode.removeChild(container2)
  container2 = document.createElement('div')
  container2.setAttribute('class', 'gameDiv')

  container2.appendChild(getCard(deck2))
  container2.appendChild(getCard(deck2))
  container2.appendChild(getCard(deck2))
  container2.appendChild(getCard(deck2))
  container2.appendChild(getCard(deck2))
  container2.appendChild(getEqualsCard(deck2))

  section2.appendChild(container2)
  button2.innerText = 'Deal again!'
  section2.appendChild(button2)
})
