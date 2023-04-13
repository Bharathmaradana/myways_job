let strings = "";
let m = 0,
  d = 0;

const submit_1 = () => {
  console.log("something");
  let r = document.getElementById("inp3").innerText;
  console.log(r);
};
const submit = () => {
  let r = document.getElementById("inp3").value;
  r = parseInt(r);
  let sum = 0;
  while (r) {
    sum += r % 10;
    r = Math.floor(r/10);
  }
  let string = "";
  for (let i = 1; i <= sum; i++) {
    
    if (i % 4 == 0 && i % 5 == 0) {
      string += "FizzBuzz ";
    } else if (i % 4 == 0) {
      string += "Fizz ";
    } else if (i % 5 == 0) {
      string += "Buzz ";
    } else {
      string += i+" ";
    }
  }
  document.getElementById("inp4").innerHTML = string;
};
