const _ = {
  /*
  *** Method 1
  .clamp() takes three arguments: a number, a lower bound, and an upper bound

  .clamp() modifies the provided number to be within the two provided bounds

  If the provided number is smaller than the lower bound, it will return the
  lower bound as the final number

  If the number is larger than the upper bound, it will return the upper bound
  as the final number

  If the number is already within the two bounds, it will return the number
  as the final number
  */
  clamp(number, lower, upper) {
    /* Initial version
    var leftBoundry = Math.max(number, lower);
    var clampedValue = Math.min(leftBoundry, upper);
    return clampedValue;
    */

    // Improved/Consise final version below
    return Math.min(Math.max(number, lower), upper);

  },

  /*

  *** Method 2 .inrange()
  .inRange() takes three arguments: a number, a start value, and an end value

  .inRange() checks to see if the provided number falls within the range
  specified by the start and end values

  If the provided number is smaller than the start value, .inRange()
  will return false

  If the provided number is larger than or equal to the end value, .inRange()
  will return false

  If the provided number is within the start and end values, .inRange()
  will return true

  If no end value is provided to the method, the start value will be 0
  and the end value will be the provided start value

  If the provided start value is larger than the provided end value, the
  two values should be swapped

  */

  inRange(num, start, end) {
    /* Initial version */
    /*
    // Check if parameter values are provided.
    if (num === undefined) {return 'Provide a number'};
    if (start === undefined &&
        end === undefined ) {return 'Provide atleast one range'};
    var lStart;
    var lEnd;
    var temp;

    //If no end value is provided to the method, the start value will be 0
    //and the end value will be the provided start value

    end === undefined ?  lStart = 0 :  lStart = start;
    end === undefined ? lEnd = start : lEnd = end;

    //If the provided start value is larger than the provided end value, the
    //two values should be swapped

    if (lStart > lEnd) {
      temp = lStart;
      lStart = lEnd;
      lEnd = temp;
    };

     if (num < lStart) {return false} else {
       if (num >= lEnd) {return false} else { return true };
     };
    */

    // Improved/Consise final version below

    // Check if parameter values are provided.
    var lStart;
    var lEnd;
    var temp;

    if (num === undefined) {
      return 'Provide a number'
    };

    if (start === undefined &&
      end === undefined) {
      return 'Provide atleast one range'
    };


    //If no end value is provided to the method, the start value will be 0
    //and the end value will be the provided start value

    end === undefined ? lStart = 0 : lStart = start;
    end === undefined ? lEnd = start : lEnd = end;

    //If the provided start value is larger than the provided end value, the
    //two values should be swapped

    if (lStart > lEnd) {
      temp = lStart;
      lStart = lEnd;
      lEnd = temp;
    };

    return ((num < lStart) || (num >= lEnd) ? false : true);


  },

  /*
  ***Method 3 - .words()

  .words() takes one argument: a string

  .words() splits the string into an array of words

  A word is defined by a space-separated string of characters, so each
  space character, ' ', indicates the end of one word and the start of the next
  */

  words(sentence) {

    return (sentence.split(' '));
  },

  /*
  Method 4 - .pad()

  .pad() takes two arguments: a string and a length

  .pad() adds spaces evenly to both sides of the string to make it reach the
  desired length

  Extra padding is added to the end of the string if an odd amount of padding
  is required to reach the specified length

  */

  pad(word, length) {
    console.log(word, '-', length);

    var padWord = word; // variable that will be returned
    var len = word.length; // length of the word that is sent in

    //Basic Validation
    if (word === undefined ||
      length === undefined) {
      return 'A string and length are two required parameter';
    };

    if (len >= length) {
      return word
    };

    //Impement the logic
    len = length - len; //number of spaces we need to add.

    //Start adding the padding. one at a time, 'len' times. if the current
    //pass is even numnber, add the space to front, else to the end. This else
    // part takes care of adding the space to end for odd number of spaces.

    do {
      padWord = (len % 2 != 0) ? padWord + ' ' : ' ' + padWord;
      --len;
    } while (len > 0);

    return (padWord);
  },

  /*
  Method 5 - .has()

  .has() takes two arguments: an object and a key

  .has() checks to see if the provided object contains a value at the
  specified key

  .has() will return true if the object contains a value at the key and
  will return false if not
  */

  has(obj, key) {
  return( obj[key] === undefined ? false : true );
  } ,

  /*
  Method 6 - .invert()

  .invert() takes one argument: an object

  .invert() iterates through each key / value pair in the provided object and
  swaps the key and value
  */

  invert(obj) {
    var inverted = [];

  // for every property in the input object, swaap the key:vale pair
  for (var property1 in obj) {
      inverted[obj[property1]]  = property1;
            // original value     key
  };
    return inverted;

  } ,
  /*
Method 7 - .findKey()

.findKey() takes two arguments: an object and a predicate function
a function that returns a boolean value

.findKey() iterates through each key / value pair in the provided object
and calls the predicate function with the value

.findKey() returns the first key that has a value that returns a truthy
value from the predicate function

.findKey() returns undefined if no values return truthy values
from the predicate function

*/

findKey(object, predicate) {

   for (var item in object) {
     var value = object[item];
     var predicateReturnValue = predicate(value);
     return(predicateReturnValue ? item : undefined);
   };

} ,
/*
Method 8 - .drop()

.drop() takes two arguments: an array and a number representing the number of
items to drop from the beginning of the array

.drop() returns a new array which contains the elements from the original
array, excluding the specified number of elements from the beginning of the array

If the number of elements to drop is unspecified, your method should drop
one element
*/
drop(array,num) {
  var drop;
  if (num === undefined ||
     num === 0){
    drop = 1} else {drop = num};

    var newArray = array.slice(drop);
    return(newArray);

},

/*
Method 9 - .dropWhile()
.dropWhile() takes two arguments: an array and a predicate function

The supplied predicate function takes three arguments: the current element,
the current element index, and the whole array

.dropWhile() creates a new copy of the supplied array, dropping elements
from the beginning of the array until an element causes the predicate
function to return a falsy value

*/
dropWhile(array,predicate) {

var dropNumber = array.findIndex(function(element,index)
                                 { return !predicate(element,index,array);
                                 });
var droppedArray = this.drop(array, dropNumber);

return (droppedArray);
},

/*
Method 10 - .chunk()
.chunk() takes two arguments: an array and a size

.chunk() breaks up the supplied array into arrays of the specified size

.chunk() returns an array containing all of the previously-created array
chunks in the order of the original array

If the array can't be broken up evenly, the last chunk will be smaller
than the specified size

If no size is supplied to the method, the size is set to 1
*/
chunk(array,size) {
var newSize;
var smallChunk = [];     //to hold smallary array
var returnChunk = [];   // to accumulate array of small array

if (size === undefined) {newSize = 1} else {newSize = size};


//loop every element of array
for (var i = 0; i < array.length; ++i) {

smallChunk = [];

//upto the desired number, form small array
for (var j=1; j <= newSize; ++j) {

  smallChunk.push(array[i]);
  ++i;
  if (i >= array.length) {break};
};
--i;

returnChunk.push(smallChunk);
};
return(returnChunk);
},

};

// Do not write or modify code below this line.
module.exports = _;
