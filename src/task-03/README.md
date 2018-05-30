# js-hwk-02

  - *indexOf*
    should return the index of item in the given array and return -1 if item 
    doesn't exist in that array. Shouldn't use any native method for lookup.
  - *lastIndexOf*
    should return the last index of item in the given array and return -1 if item 
    doesn't exist in that array. Shouldn't use any native method for lookup.
  - *getRandomInt*
    should return a random integer from [0, max) range, where max is passed to it as argument.
    Shouldn't use any method other than Math.random()
  - *getRandomMatrix*
    should return a matrix, with given size and filled with random integers from [1, 100).
  - *matrixIndexOf*
    should return the index of an item in the matrix. Index should be returned as array `[number, number]` or as object `{i: number, j: number}`. Should return null if the item doesn't exist in the matrix.
  - *matrixLastIndexOf*
    should do the same but return the last index of item if there is many.
  - *equals*
    should return true if objects have equal properties. should return true for the same primitive value also.
    your code should contain no more than one loop (for code reuse).
  - *isArray*
    should work as `Array.isArray`
  - *isRegExp*
  - *createEnum*
    should take an array as argument, items of which are either `string` or `Object`. `createEnum` 
    should return an `Object` properties of which are enumerated values, which are counted from 
    0 if not specified. If the item in array is `Object` then it should have an interface like this: `{ name: string, value: number }`, so for the case of `Object` you should define a property named with the value of `name` property of that object and set the value of that property to be equal to `value` property of the config object and you should continue enumeration from that value. Also all the properties of the returned enum object should be `enumerable` but not `configurable` and not `writable`.