// initialise the variables
var i = 0;
var speed = 35;
// textContent is the text inside the element
var about = document.getElementById("typing-text").textContent;

// clear the text in order to type it
// this is why textContent is set to empty
document.getElementById("typing-text").textContent = "";

// create function
function typeWriter() {
    // check if the text is finished
  if (i < about.length) {
    // charAt means at the position of i
    document.getElementById("typing-text").textContent += about.charAt(i);
    // iterate i
    i++;
    // call the function again
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
