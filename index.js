// const button = document.getElementById("btn-1");

// button.disabled = true; // disable the button initially

// setTimeout(function() {
//   button.disabled = false; // enable the button after 5 seconds
// }, 5000); // 5000 milliseconds = 5 seconds

// script.js
const button = document.getElementById('btn-1');
const countdownElement = document.getElementById('countdown');

let countdownTime = 10; // 5 seconds
let countdownInterval = null;

button.disabled = true; // disable the button initially

countdownInterval = setInterval(function() {
  countdownTime--;
  countdownElement.textContent = `${countdownTime} seconds .....`;

  if (countdownTime <= 0) {
    clearInterval(countdownInterval);
    button.disabled = false; // enable the button after countdown finishes
    countdownElement.textContent = 'Ready!';
  }
}, 1000); // 1000 milliseconds = 1 second