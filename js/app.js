const hamburger = document.querySelector(".hamburger");
const navDiv = document.querySelector(".nav-div");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navDiv.classList.toggle("active");
}

function mobileMenuClose(){
    hamburger.classList.remove("active");
    navDiv.classList.remove("active");
}

const navItem = document.querySelectorAll(".nav-item");

for(var i=0; i<navItem.length; i++){
    navItem[i].addEventListener("click", mobileMenuClose)
};