import * as collatz from './src/collatz_grapher.js'
import * as _ from 'lodash.debounce'

let canvas = document.getElementById('canvas')
let indicator = document.getElementById('indicator')
let canvasContainer = document.getElementById('canvasContainer')
let inputBox = document.getElementById('numberInput')
let submitButton = document.getElementById('submitNumber')

collatz.setCanvas(canvas)
let arr
let drawData
let number

const drawCanvas = ()=> {
  canvas.width = canvasContainer.clientWidth
  canvas.height = canvasContainer.clientHeight
  arr = collatz.construct(number)
  drawData = collatz.draw(arr)
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
  console.log(e)
  drawCanvas(number)
})



submitButton.addEventListener('click', (e)=> {
  console.log(e)
  number = Number(inputBox.value)
  drawCanvas()
})
