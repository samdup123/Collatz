import ContextMock from './ContextMock.js'

export default class {
  constructor (width, height)
  {
    this.json = []
    this.width = width
    this.height = height
    this.conext = new ContextMock()
  }

  getContext (string)
  {
    this.json.push('[getContext ' + string + ']')
    return new ContextMock()
  }

  beginPath()
  {
    this.json.push('[begin]')
  }

  moveTo(x, y)
  {
    this.json.push('[moveTo ' + x + ', ' + y + ']')
  }

  stroke()
  {
    this.json.push('[stroke]')
  }
}
