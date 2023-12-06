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

document.addEventListener("DOMContentLoaded", function () {
  var registrationBtn = document.querySelector(".registration-btn-float");

  registrationBtn.addEventListener("click", function () {
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Please enter a valid email address");
    } else {
      emailError.textContent = "";
      document.getElementsByClassName("registration-form")[0].submit();
    }
  });

  initMap();
});
