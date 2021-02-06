
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const stevejobs = ["Dont let the noise of others opinions drown out your own inner voice.", 
"Being the richest man in the cemetery doesnt matter to me. Going to bed at night saying we have done something wonderful thats what matters to me.", 
"Creativity is just connecting things.",
"Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.",
"You cant connect the dots looking forward, you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.",
"Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
"Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains."];

let index = Math.floor(Math.random() * 7);

const quoteOfDay = stevejobs[index];

document.getElementById("quote").innerHTML = quoteOfDay;

let date = new Date();

document.getElementById("date").innerHTML = date;