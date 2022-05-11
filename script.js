window.onload = () => {
    document.querySelector("#tbrm").addEventListener("click", () => {
      window.open("https://ziningyap.com/tbrm", "_self");
    });
    
      document.querySelector("#track").addEventListener("click", () => {
      window.open("https://ziningyap.com/track", "_self");
    });
    
      document.querySelector("#ifu").addEventListener("click", () => {
      window.open("https://ziningyap.com/trulicity", "_self");
    });
    
      document.querySelector("#changi").addEventListener("click", () => {
      window.open("https://ziningyap.com/changi", "_self");
    });
    
      document.querySelector("#piggy").addEventListener("click", () => {
      window.open("https://ziningyap.com/spacepiggy", "_self");
    });
    
      document.querySelector("#create").addEventListener("click", () => {
      window.open("https://ziningyap.com/create", "_self");
    });
  
  };

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