

const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");

const button = document.querySelectorAll('.button')

const timer = document.getElementById("timer");



const ans = document.getElementById("number3");
let score = 0, a, b, c, operator;

randomise()

function randomise() {
  a = num1.innerText = Math.floor(1+Math.random() * 100);
  b = num2.innerText = Math.floor(1+Math.random() * 100);
   
  operator = Math.floor(Math.random() * 5);
  console.log(operator);

  switch (operator) {
    case 0:
      c = a+b;
      break;
    case 1:
      c = a-b;
      break;
    case 2:
      c = a*b;
      break;
    case 3:
      c = a/b;
      break;
    case 4:
      c = a%b;
      break;
  }
  ans.innerText = c.toFixed(1);
}

for (let i=0;i<5;i++) {
  button[i].onclick=()=>{
      if (i==operator) {
          score++;
          localStorage.setItem('score',score);
          randomise();
          resetTimer();
      }
      else gameOver();
  }
}

function gameOver() {
  window.open("gameover.html","_self");
}

let time=15;

setInterval(()=>{
    if (time==0) {
        gameOver();
        return;
    }
    timer.innerText=time;
    time--;
},1000)

function resetTimer() {
    time=15;
}




