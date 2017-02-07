import assert from 'assert'
import * as collatz from '../src/collatz_grapher'
import CanvasMock from '../src/mocks/CanvasMock'

describe('collatz_grapher', ()=> {

  describe('#construct()', ()=> {

    it('should return error if input is 1', ()=> {
      assert.throws( ()=> { collatz.construct(1) },
      new RegExp(collatz.errorMessages.BOUNDS)
      )
    })

    it('should return error if input is 0', ()=> {
      assert.throws( ()=> { collatz.construct(0) },
      new RegExp(collatz.errorMessages.BOUNDS)
      )
    })

    it('should return error if input is not a number', ()=> {
      let aString = 'not a number'
      assert.throws( ()=> { collatz.construct(aString) },
      new RegExp(collatz.errorMessages.NAN)
      )
    })

    it('should not return error if input is greater than 1', ()=> {
      assert.doesNotThrow( ()=> { collatz.construct(2) },
      Error
      )
    })

    it('should return correct array if input is 2', ()=> {
      assert.deepEqual( collatz.construct(2), [2, 1] )
    })

    it('should return correct array if input is above 2', ()=> {
      assert.deepEqual( collatz.construct(6), [6, 3, 10, 5, 16, 8, 4 , 2, 1] )
    })

    it('should return correct array if input is 14', ()=> {
      assert.deepEqual( collatz.construct(14), [14, 7, 22, 11, 34, 17, 52 , 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1] )
    })

  }) //end #construct()


  describe('#findMax()', ()=> {

    it('should return correct max for [2, 1]', ()=> {
      let testArray = [2, 1]
      assert.equal(2, collatz.findMax(testArray))
    })

    it('should return correct max for [2, 1, 7, 14, 100, 3, 8]', ()=> {
      let testArray = [2, 1, 7, 14, 100, 3, 8]
      assert.equal(100, collatz.findMax(testArray))
    })
  }) //end of #findMax()
}) //end collatz_grapher

describe('CanvasMock and Contextmock', ()=> {

    it('should be able to return width and height', ()=> {
      let canvas = new CanvasMock(500,600)
      assert.equal(canvas.width, 500)
      assert.equal(canvas.height, 600)
    })

    it('should be able to return empty mock array', ()=> {
      let canvas = new CanvasMock(500,600)
      assert.deepEqual(canvas.mock, [])
    })

     it('should be able to update mock for getContext', ()=> {
       let canvas = new CanvasMock(500,600)
       let ctx = canvas.getContext('2d')
       assert.equal(canvas.mock, '[getContext 2d]')
     })

     it('should be able to update mock with commands from context', ()=> {
       let canvas = new CanvasMock(500,600)
       let ctx = canvas.getContext('2d')
       ctx.beginPath()
       ctx.moveTo(0, 0)
       ctx.lineTo(canvas.width, canvas.height)
       ctx.stroke()
       assert.deepEqual(canvas.mock, ['[getContext 2d]', '[beginPath]', '[moveTo 0, 0]', '[lineTo 500, 600]', '[stroke]'])
     })

})
