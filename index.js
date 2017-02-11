import * as collatz from './src/collatz_grapher.js'

let canvas = document.getElementById('canvas')
let indicator = document.getElementById('indicator')
let canvasContainer = document.getElementById('canvasContainer')
let inputBox = document.getElementById('numberInput')

collatz.setCanvas(canvas)
let arr
let drawData
let number

const clearCanvas = ()=> { drawCanvas()}

const drawCanvas = (number)=> {
  let canvasPadding = Number(window.getComputedStyle(canvasContainer, null).getPropertyValue('padding-left').slice(0, -2)) +
                      Number(window.getComputedStyle(canvasContainer, null).getPropertyValue('padding-right').slice(0, -2))
  canvas.width = canvasContainer.clientWidth - (canvasPadding)
  canvas.height = window.innerHeight * .7
  if (number)
  {
    arr = collatz.construct(number)
    drawData = collatz.draw(arr)
  }
}

canvas.addEventListener('mousemove', (e)=> {

  let xOffset = canvas.getBoundingClientRect().left
  let yOffset = canvas.getBoundingClientRect().top
  let x = e.clientX - xOffset
  let y = e.clientY - yOffset

  let numPoints = drawData.pointsArray.length
  let width = canvas.width
  let widthDivision = width/(numPoints-1)
  let slice = Math.ceil( (x + widthDivision/2)/widthDivision )
  //console.log(slice, drawData.pointsArray[slice - 1].y, y)
  if ( Math.abs( y - drawData.pointsArray[slice - 1].y) < 10 )
  {
    indicator.style.visibility = 'visible'
    indicator.innerHTML = arr[slice-1]
  }
  else {
    indicator.style.visibility = 'hidden'
  }
  indicator.style.left = e.pageX + 20 + 'px'
  indicator.style.top = e.pageY - 20 + 'px'
})

canvas.addEventListener('mouseleave', (e)=> {
  indicator.style.visibility = 'hidden'
})

window.addEventListener('resize', (e)=> {
  drawCanvas(number)
})

canvasContainer.addEventListener('click', (e)=> {
  number = Math.floor(Math.random() * (100000 - 2)) + 2
  numberInput.value = number
  drawCanvas(number)
})

inputBox.addEventListener('keyup', (e)=> {
  if (e.keyCode == 13) {
    number = Number(inputBox.value)
    drawCanvas(number)
  }
})
