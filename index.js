const btn = document.getElementById('btn');
const dateChange = document.getElementById("date-transfer");

let today = new Date().toLocaleDateString();


btn.addEventListener('click', () => {
  const box = document.getElementsByClassName('hobbies')[0];
  //  hides element
  box.style.visibility = 'hidden';
  dateChange.textContent ="Today's Date : "+ today;

 
});