var slide = document.getElementById("slide");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var cardNumber = document.getElementsByClassName("card"); //how many cards we have
var cardHeight = document.querySelector(".card").offsetHeight;  //getting the height of the card

let x = 0;

prev.onclick = function () {
  if (x > -(cardNumber.length -1)*cardHeight) {   //-1 because we are already displaying the first one 
    //300 the height off the card * how many cards are make this dynamic later
    x = x - cardHeight;
    slide.style.top = x + "px";
    console.log(cardHeight);
  }
};
next.onclick = function () {
  if (x < "0") {
    //300 the height off the card * how many cards are make this dynamic later
    x = x + cardHeight;
    slide.style.top = x + "px";
    console.log(cardHeight);
  }
};