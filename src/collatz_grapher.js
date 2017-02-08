let canvas


export const errorMessages = { BOUNDS:'Input must be above 1', NAN: 'Input must be a number'}
const errors = { BOUNDS: new Error(errorMessages.BOUNDS), NAN: new Error(errorMessages.NAN)}

export const setCanvas = (_canvas) =>
{
  canvas = _canvas
}

export const construct = (number) =>
{
    if (number <= 1)
    {
      throw errors.BOUNDS
    }
    else if (typeof number !== 'number')
    {
      throw errors.NAN
    }

    let array = []
    array[0] = number
    for(var i = 1; ; i++)
    {
      let lastNum = array[i-1];
      if (lastNum === 1)
      {
        break
      }
      else if (lastNum % 2 === 0)
      {
        array[i] = lastNum / 2
      }
      else
      {
        array[i] = lastNum * 3 + 1
      }
    }
    return array
}

export const findMax = (array)=>
{
  let max = 1
  for( let i = 0; i < array.length; i++ )
  {
    if (max < array[i])
    {
      max = array[i]
    }
  }
  return max
}

export const draw = (numArray) =>
{
  let max = findMax(numArray)
  let pointsArray = []
  let widthDivision = canvas.width / (numArray.length - 1)
  let heightDivision = canvas.height / max
  let ctx = canvas.getContext('2d')
  let firstNum = numArray[0]
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - firstNum*heightDivision)
  console.log('numArray.length', numArray.length)
  for( let i = 0; i <= numArray.length - 1; i++ )
  {
    let x = i*widthDivision

    let y = canvas.height - (numArray[i]-1)*canvas.height/(max-1)

    ctx.lineTo(x, y)
    console.log(x,y)
    pointsArray.push( {x: x, y: y} )
  }

  ctx.lineWidth = 3
  ctx.strokeStyle = 'blue'
  ctx.stroke()
  console.log('pts array length', pointsArray.length)
  console.log('0',pointsArray[0])
  console.log('1',pointsArray[1])
  console.log('2',pointsArray[2])
  console.log('3',pointsArray[3])
  console.log('4',pointsArray[4])


  return {canvas: canvas, pointsArray: pointsArray}
}
