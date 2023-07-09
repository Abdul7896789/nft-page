let menu = document.querySelector(".ham");
menu.onclick = function(){
  let nav = document.querySelector(".nav_links");
  nav.classList.toggle("active");
};
