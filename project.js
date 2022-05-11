var img;
var back;
var next;

img = document.querySelector("#img");
caption = document.querySelector("#caption");
back = document.querySelector("#left");
next = document.querySelector("#right");


// images = ["url('https://i.ibb.co/zfsQvSD/track-5.jpg')", "url('https://i.ibb.co/597Szt8/track-1.jpg')","url('https://i.ibb.co/hHLZmK3/track-2.png')","url('https://i.ibb.co/DrHGz5D/track-3.png')", "url('https://i.ibb.co/LkRnwHt/track-data.png')"]

// captions = ["DIY Tracking Device", "Set up of shoulder pulley exercise", "How the markers get detected for the game", "Game score to motivate seniors in their exercise", "Data visualisation for the Occupational Therapists to track seniors' performance"]

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