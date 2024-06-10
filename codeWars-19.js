//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//Solution:
function doubleChar(str) {
  let results = ''
  for (const char of str) {
    results += char + char
  }
  return results
}
