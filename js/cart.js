document.addEventListener("DOMContentLoaded", function () {
  var cart = localStorage.getItem("CartArr");
  cart = Object.values(JSON.parse(cart));

  var emptyCart = document.querySelector(".empty-cart");
  var fullCart = document.querySelector(".fullCart");
  if (cart.length > 0) {
    emptyCart.style.display = "none";
    emptyCart.style.visibility = "hidden";
    fullCart.style.visibility = "visible";

    cart.forEach((item) => {
        let divElement = document.createElement("div");
        divElement.textContent = item + " 20/07/2023 33£";
        divElement.classList.add("item");
        fullCart.appendChild(divElement);
    });
    let divElement = document.createElement("div");
    divElement.textContent = "Total = " + 33*cart.length+"£";
    fullCart.appendChild(divElement);

  } else {
    emptyCart.style.display = "block";
    emptyCart.style.visibility = "visible";
    fullCart.style.display = "none";
    fullCart.style.visibility = "hidden";
  }
});
