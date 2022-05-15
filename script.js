var selected;

window.onload = () => {
    var projCards = document.getElementsByClassName("proj-card-name");

    for (var i = 0; i < projCards.length; i++) {
      projCards[i].addEventListener("click", function () {
        selected = this.id;
  
        switch (selected) {
          case "tbrm":
            url = "https://ziningyap.com/tbrm";
            break;
          case "track":
            url = "https://ziningyap.com/track";
            break;
          case "ifu":
            url = "https://ziningyap.com/trulicity";
            break;
          case "changi":
            url = "https://ziningyap.com/changi";
            break;
          case "piggy":
            url = "https://ziningyap.com/spacepiggy";
            break;
          case "create":
            url = "https://ziningyap.com/create";
            break;
        }

        location.href = url;
      });
    }
  
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