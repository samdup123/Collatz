import * as collatz from './src/collatz_grapher.js'
import * as _ from 'lodash.debounce'
let canvas = document.getElementById('myCanvas')
let indicator = document.getElementById('indicator')
canvas.width = 900
canvas.height = 500

collatz.setCanvas(canvas)
let arr = collatz.construct(1231344)
let drawData = collatz.draw(arr)


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
    console.log('in the space')
  }
  else {
    {
      indicator.style.visibility = 'hidden'
      console.log('out the space')
    }
  }
  indicator.style.left = e.pageX + 20 + 'px'
  indicator.style.top = e.pageY - 20 + 'px'
})

canvas.addEventListener('mouseleave', (e)=> {
  indicator.style.visibility = 'hidden'
})
