const dateElement = document.getElementById("date");

let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

dateElement.textContent = `Today's date is ${day}/${month}/${year}`;
