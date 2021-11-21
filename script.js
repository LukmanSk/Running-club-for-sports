const hamburger = document.querySelector('.hamburger')
const links = document.querySelector('.nav-links')
const overlay = document.querySelector('.overlay')
const body = document.body;

const closeBtn = document.querySelector(".close")

hamburger.addEventListener("click",openMenu)
closeBtn.addEventListener('click',openMenu)

function openMenu(){
   overlay.classList.toggle("open")
  links.classList.toggle("open")
  body.classList.toggle("scroll-lock")
}
