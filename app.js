const board = document.querySelector('#board')
const BOX_NUMBER = 7000
const colors = ['pink', 'blue','green','yellow','white','grey','brown']



for (let i = 0; i<BOX_NUMBER; i++) {

const box = document.createElement('div')
box.classList.add('box')
box.addEventListener('mouseover', () => setColor(box))
box.addEventListener('mouseleave', () => removeColor(box))
box.addEventListener('click',()=> setWhite(box))
board.append(box)

}

function setWhite(element) {const box = document.querySelectorAll('.box')
box.forEach((element)=>{element.style.backgroundColor='#fff'}

)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
    const box = document.querySelectorAll('.box')
box.forEach((element)=>{element.style.backgroundColor='#1d1d1d'})
}
function getRandomColor() {
  const index =  Math.floor(Math.random()*colors.length)
  return colors[index]
}