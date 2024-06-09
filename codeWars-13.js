//Mission
//Your mission is to implement a function that converts the following potentially harmful characters:

//< --> &lt;
//> --> &gt;
//" --> &quot;
//& --> &amp;
//Good luck :D
//Solution:

function htmlspecialchars(formData) {
  formData = formData.replace(/&/g, '&amp;')
  formData = formData.replace(/</g, '&lt;')
  formData = formData.replace(/"/g, '&quot;')
  formData = formData.replace(/>/g, '&gt;')
  return formData
}
