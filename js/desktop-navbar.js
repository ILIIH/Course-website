var allBarItems = document.querySelectorAll(".bar-item");

allBarItems.forEach(function (bar_item) {
  bar_item.addEventListener("click", function () {
    allBarItems.forEach(function (item) {
      item.classList.remove("choosed");
      item.classList.add("unchoosed");
    });

    bar_item.classList.add("choosed");
    bar_item.classList.remove("unchoosed");
    var contentObject = document.getElementById("main-content");
    switch (bar_item.id) {
      case "courses":
        contentObject.setAttribute("data", "courses.html");
        break;
      case "projects":
        contentObject.setAttribute("data", "my_projects.html");
        break;
      case "my_courses":
        contentObject.setAttribute("data", "courses.html");
        break;
      case "cart":
        contentObject.setAttribute("data", "cart.html");
        break;
    }
  });
});
