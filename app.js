const board = document.querySelector('#board')
const SQUARES_NUMBER = 1200
const colors = ['##00FF00', '#EE82EE', '#FFFF00', '#9ACD32', '#FFFFFF', '#DC143C', '#FFD700', '#00BFFF', '#FF1493', '#ADFF2F', '#4B0082', '#40E0D0']

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}


function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

