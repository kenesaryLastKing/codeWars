//Is the string uppercase?
//Task
//Create a method to see whether the string is ALL CAPS.
//String.prototype.isUpperCase = function() {
// your code here
//}

//Solution:
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase()
}
