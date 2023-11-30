document.addEventListener("DOMContentLoaded", function () {
  const courseIcon = document.getElementsByClassName("course-icon")[0];
  const registerBtn = document.getElementsByClassName("registration-btn-float")[0];

  window.addEventListener("scroll", () => {
    const elementRect = courseIcon.getBoundingClientRect();
    
    if (elementRect.top > window.innerHeight || elementRect.bottom <= 0) {
        if (registerBtn.classList.contains("registration-btn-float")) {
            registerBtn.classList.replace("registration-btn-float", "registration-btn");
        }
    } 
  });
});
