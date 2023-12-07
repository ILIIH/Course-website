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
      let cartItemWrapper = document.createElement("div");
      cartItemWrapper.classList.add("item");

      let imgDiv = document.createElement("div");
      let imgElement = document.createElement("img");
      imgElement.src = "image/ai_icon.png"; 
      imgElement.classList.add("cart-img");
      imgDiv.appendChild(imgElement);
     


      let cartInfo = document.createElement("div");
      cartInfo.classList.add("cart-item-info");

      let textDateDiv = document.createElement("div");
      textDateDiv.textContent = "date : 07/12/2023";

      let textPriceDiv = document.createElement("div");
      textPriceDiv.textContent = "price : 33£";

      cartInfo.appendChild(textDateDiv);
      cartInfo.appendChild(textPriceDiv);
  
      let divElement = document.createElement("div");
      divElement.textContent = "course name : " + item;

      cartItemWrapper.appendChild(imgDiv);
      cartItemWrapper.appendChild(cartInfo);
      cartItemWrapper.appendChild(divElement);

      fullCart.appendChild(cartItemWrapper);
  });
    let divElement = document.createElement("div");
    divElement.textContent = "Total = " + 33*cart.length+"£";
    divElement.classList.add("total-text");
    fullCart.appendChild(divElement);

  } 
  else 
  {
    emptyCart.style.display = "block";
    emptyCart.style.visibility = "visible";
    fullCart.style.display = "none";
    fullCart.style.visibility = "hidden";
  }
});
