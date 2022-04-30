var coll = document.getElementsByClassName("strength");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//html setup
var itemsHTMLCollection = document.getElementsByClassName ('parallax-item');
var itemssArray = Array.from(itemsHTMLCollection);


//setting up input information
var input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  mouseY: {
       start: 0,
    end: window.innerHeight,
    current: 0,
  }
};

//setting up output information
var output = {
  x: {
    start: -25,
    end: 25,
    current: 0,
  },
  y: {
   start: -25,
   end: 25,
   current: 0,
  },
  zIndex: {
    range: 1000,
  },
  scale: {
    start: 1.1,
    end: 0.3,
  },
  blur: {
    startingDepth: 0.4,
    range: 20
  }
};
output.scale.range = output.scale.end - output.scale.start; 
output.x.range = output.x.end - output.x.start; 
output.y.range = output.y.end - output.y.start; 

var mouse = {
  x: 0,
  y: 0
}

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

var updateInputs = function () {
  //mouse x input and y input
  input.mouseX.current = mouse.x;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

  input.mouseY.current = mouse.y;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
}

var updateOutputs = function () {
  //output x and y
  output.x.current = output.x.end - (input.mouseX.fraction * output.x.range);
  
  output.y.current = output.y.end - (input.mouseY.fraction * output.y.range);
}

 updateEachParallaxItem = function () {
     //apply output to html
  itemssArray.forEach(function (item, k) { 
    var depth = parseFloat(item.dataset.depth, 10);
    var itemOutput = {
      x: output.x.current - (output.x.current * depth),
      y: output.y.current - (output.y.current * depth),
      zIndex: output.zIndex.range - (output.zIndex.range * depth),
      scale: output.scale.start + (output.scale.range * depth),
      blur: (depth - output.blur.startingDepth) * output.blur.range
    };
    item.style.filter = 'blur('+itemOutput.blur+'px)'
    item.style.zIndex = itemOutput.zIndex;
    item.style.transform = 'scale('+itemOutput.scale+') translate('+itemOutput.x+'px, '+itemOutput.y+'px)'; 
  });
 }

var handleMouseMove = function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  
  updateInputs();
  updateOutputs();
  updateEachParallaxItem();
  
  

  
 
  //console.log('fraction X', input.mouseX.fraction)
 //console.log('fraction Y', input.mouseY.fraction)
}


//ensures the window's width value is updated when window size is changed
var handleResize = function () {
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
  
  input.mouseY.end = window.innerHeight;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
}

//Event Listener accepts a bunch of information that we can pass to it
window.addEventListener('mousemove', handleMouseMove)
window.addEventListener('resize', handleResize)

updateInputs();
updateOutputs();
updateEachParallaxItem();


