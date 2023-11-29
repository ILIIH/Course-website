document.addEventListener("DOMContentLoaded", function () {
  var navbarBtn = document.getElementsByClassName("navbar_icon")[0];
  const navbarLayout = document.getElementById("navbar_layout");


  navbarBtn.addEventListener("click", function () {
    const isOverlayVisible = navbarLayout.style.left === "0px";

    if (isOverlayVisible) {
      navbarLayout.style.left = "-100%";
      if (navbarBtn.classList.contains("navbar-expanded")){
      console.log( "navbar-expanded" )
      navbarBtn.classList.replace("navbar-expanded", "navbar-closed");
      }
    } else {
      navbarLayout.style.left = "0";
      if (navbarBtn.classList.contains("navbar-closed")){
        console.log( "navbar-closed" )
        navbarBtn.classList.replace("navbar-closed", "navbar-expanded");
          }    }
  });
});
