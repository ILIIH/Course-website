document.addEventListener("DOMContentLoaded", function () {
  var cart = localStorage.getItem("CartArr");
  cart = Object.values(JSON.parse(cart));

  var emptyCart = document.querySelector(".empty-cart");
  var fullCart = document.querySelector(".fullCart");
  var fullPrice = document.querySelector(".total-text"); 

  cart = cart.filter((value, index, self) => {
      return self.indexOf(value) === index;
  });

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

      let courseName = document.createElement("div");
      courseName.textContent = item;

      cartInfo.appendChild(courseName);
      cartInfo.appendChild(textDateDiv);
      cartInfo.appendChild(textPriceDiv);
   

      cartItemWrapper.appendChild(cartInfo);
      cartItemWrapper.appendChild(imgDiv);

      fullCart.appendChild(cartItemWrapper);
  });
    fullPrice.textContent = "TOTAL " + 33*cart.length+"£"; 

  } 
  else 
  {
    emptyCart.style.display = "block";
    emptyCart.style.visibility = "visible";
    fullCart.style.display = "none";
    fullCart.style.visibility = "hidden";
  }
});
