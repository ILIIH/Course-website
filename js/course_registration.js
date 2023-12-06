function initMap() {
  var myLatLng = { lat: 37.7749, lng: -122.4194 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatLng,
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "User Location",
  });
}

function getFromLocalStorage(key) {
  var storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
}

document.addEventListener("DOMContentLoaded", function () {

  var currentCourse =  getFromLocalStorage("CurrentCourse");

  var registrationBtn = document.querySelector(".registration-btn-float");

  registrationBtn.addEventListener("click", function () {
    var emailInput = document.getElementById("email");

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Please enter a valid email address");
    } else {

      var cart = getFromLocalStorage("CartArr")
      if(cart == null) cart = [] 
      cart.push(currentCourse)
      localStorage.setItem("CartArr", JSON.stringify(cart));

      document.getElementsByClassName("registration-form")[0].submit();
    }
  });


});
