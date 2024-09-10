// changes header to fixed on scroll
let scrollpos = window.scrollY
const header = document.querySelector(".header_area")
const header_height = header.offsetHeight
const add_class_on_scroll = () => header.classList.add("navbar_fixed")
const remove_class_on_scroll = () => header.classList.remove("navbar_fixed")
window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;
  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
});