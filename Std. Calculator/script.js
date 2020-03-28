
function insert(num) {
  
    document.querySelector(".textField").value += num
}
function calc() {
  var exp = document.querySelector(".textField").value;
  if(exp) {
    document.querySelector(".textField").value = eval(exp);
  }
}

function back() {
  var x = document.querySelector(".textField").value
  document.querySelector(".textField").value = x.substring(0, x.length-1)
  
}

