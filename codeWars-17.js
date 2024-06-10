//Write a function that returns a string in which firstname is swapped with last name.

//Solution:
function nameShuffler(str) {
  let [first, last] = str.split(' ')
  return last + ' ' + first
}
