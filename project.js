var img;
var back;
var next;

img = document.querySelector("#img");
caption = document.querySelector("#caption");
back = document.querySelector("#left");
next = document.querySelector("#right");

var totalImgs = images.length;
var newIndex;
var currentIndex = 0;

back.addEventListener("click", () => {
currentIndex -= 1;
newIndex = Math.abs((totalImgs + currentIndex) % totalImgs);
console.log(newIndex);
img.style.backgroundImage = images[newIndex];
caption.innerHTML = captions[newIndex];
  });

next.addEventListener("click", () => {
currentIndex += 1;
newIndex = (totalImgs + currentIndex) % totalImgs;
console.log(newIndex);
img.style.backgroundImage = images[newIndex];
caption.innerHTML = captions[newIndex];
  });


function showMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      document.querySelector("#name").className += "hideName"
    } else {
      x.className = "topnav";
      document.querySelector("#name").className = ""
    }
  }