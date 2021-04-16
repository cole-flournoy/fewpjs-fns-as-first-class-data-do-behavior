/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(stringTime) {
  const hour = parseInt(stringTime.split(':')[0])
  if (hour < 12) return "Good Morning"
  if (hour < 17) return "Good Afternoon"
  if (hour >= 17) return "Good Evening"
}
/* Write your implementation of displayMessage() */

function displayMessage(stringMessage) {
  document.getElementById("greeting").innerText = stringMessage
}