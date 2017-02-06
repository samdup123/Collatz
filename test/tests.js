import assert from 'assert'
import * as collatz from '../src/collatz_grapher'

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
})
