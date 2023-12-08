function initMap() {
  const myLatLng = { lat: 37.7749, lng: -122.4194 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatLng,
  });

  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "User Location",
  });
}

function getFromLocalStorage(key) {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
}

document.addEventListener("DOMContentLoaded", function () {
  const currentCourse = getFromLocalStorage("CurrentCourse");
  const registrationBtn = document.querySelector(".registration-btn-float");

  registrationBtn.addEventListener("click", function () {
    const emailInput = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
      alert("Please enter a valid email address");
    } else {
      let cart = getFromLocalStorage("CartArr") || [];
      cart.push(currentCourse);
      localStorage.setItem("CartArr", JSON.stringify(cart));

      document.getElementsByClassName("registration-form")[0].submit();
    }
  });
});
