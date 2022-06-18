const showMenu = () => {
  const showIcon = document.getElementById("icon-close");
  const showMenu = document.getElementById("show");
  if (showMenu.style.left === "-500px") {
    showIcon.style.left = "300px";
    showIcon.classList.remove("fa-solid", "fa-bars");
    showIcon.classList.add("fa-solid", "fa-xmark");
    showMenu.style.left = "0";
    showMenu.style.transition = "all 0.5s";
  } else {
    showIcon.style.left = "0";
    showIcon.classList.remove("fa-solid", "fa-xmark");
    showIcon.classList.add("fa-solid", "fa-bars");
    showMenu.style.left = "-500px";
    showMenu.style.transition = "all 0.5s";
  }
}
