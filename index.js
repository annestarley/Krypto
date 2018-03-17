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

let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let section1 = document.querySelector('#game1')
let section2 = document.querySelector('#game2')

// Creating Functions to generate random cards



// Creating Event Listeneres for buttons clicks

button1.addEventListener('click', (e) => {
  alert('button1')
})

button2.addEventListener('click', (e) => {
  alert('button2')
})
