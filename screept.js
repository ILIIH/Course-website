document.addEventListener("DOMContentLoaded", function () {
  const skillsListBtn = document.getElementById("skils");
  const skillsList = document.getElementById("skils_list");

  const achivementsListBtn = document.getElementById("achivements");
  const achivementsList = document.getElementById("achivements_list");

  const workExpirenceListBtn = document.getElementById("work_expirence");
  const workExpirenceList = document.getElementById("work_expirence_list");

  const educationListBtn = document.getElementById("education");
  const educationListList = document.getElementById("education_list");

  educationListBtn.addEventListener("click", function () {
    if (
      educationListList.style.display === "block" ||
      educationListList.style.visibility === "visible"
    ) {
      educationListList.style.display = "none";
      educationListList.style.visibility = "hidden";
    } else {
      educationListList.style.display = "block";
      educationListList.style.visibility = "visible";
    }
  });

  workExpirenceListBtn.addEventListener("click", function () {
    if (
      workExpirenceList.style.display === "block" ||
      workExpirenceList.style.visibility === "visible"
    ) {
      workExpirenceList.style.display = "none";
      workExpirenceList.style.visibility = "hidden";
    } else {
      workExpirenceList.style.display = "block";
      workExpirenceList.style.visibility = "visible";
    }
  });

  skillsListBtn.addEventListener("click", function () {
    if (
      skillsList.style.display === "block" ||
      skillsList.style.visibility === "visible"
    ) {
      skillsList.style.display = "none";
      skillsList.style.visibility = "hidden";
    } else {
      skillsList.style.display = "block";
      skillsList.style.visibility = "visible";
    }
  });

  achivementsListBtn.addEventListener("click", function () {
    if (
      achivementsList.style.display == "block" ||
      achivementsList.style.visibility == "visible"
    ) {
        achivementsList.style.display = "none";
        achivementsList.style.visibility = "hidden";
    } else {
        achivementsList.style.display = "block";
        achivementsList.style.visibility = "visible";
    }
  });
});
