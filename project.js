var img;
var back;
var next;
var click = false;

img = document.querySelector("#img");
caption = document.querySelector("#caption");
back = document.querySelector("#left");
next = document.querySelector("#right");

var totalImgs = images.length;
var newIndex;
var currentIndex = 0;
var imgUrl;

var preloaded = 0;
		function preLoader(e) {
			for (var i = 0; i < images.length; i++) {
				var tempImage = new Image();

				tempImage.addEventListener("load", progress, true);
				tempImage.src = images[i];
			}
		}

		function progress() {
			preloaded++;

			if (preloaded == images.length) {
				document.querySelector("#img").style.backgroundImage =  "url('"+images[0]+"')";
			}
		}
		this.addEventListener("DOMContentLoaded", preLoader, true);

back.addEventListener("click", () => {
  clearInterval(slideShow);
  currentIndex -= 1;
  newIndex = Math.abs((totalImgs + currentIndex) % totalImgs);
  imgUrl = images[newIndex];
  img.style.backgroundImage = "url('"+imgUrl+"')";
  caption.innerHTML = captions[newIndex];
});

next.addEventListener("click", () => {
  clearInterval(slideShow);
  nextImg();
});

let nextImg = () => {
  currentIndex += 1;
  newIndex = (totalImgs + currentIndex) % totalImgs;
  imgUrl = images[newIndex];
  img.style.backgroundImage = "url('"+imgUrl+"')";
  caption.innerHTML = captions[newIndex];
}

let slideShow = setInterval(nextImg,
  10000);

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

document.querySelector("#name").addEventListener("click", () => {
  window.open("https://ziningyap.com/", "_self");
});
