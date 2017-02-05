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

  }) //end #constructor
})
