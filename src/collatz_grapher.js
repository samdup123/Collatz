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

export const draw = (arr) =>
{
  for (x in arr) {
    plot(x)
  }
}
