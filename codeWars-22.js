//Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

//A Pythagorean Triple consists of arranging 3 integers, such that:

//a2 + b2 = c2
//Solution:
function isPyphagoreanTriple(integers) {
  integers.sort((a, b) => a - b)
  const [a, b, c] = integers
  return Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2)
}
