let string = "";

//querySelectorAll accepts the queries with class button
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.traget.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.traget.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})

