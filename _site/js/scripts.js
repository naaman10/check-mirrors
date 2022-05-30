// Covid Banner
document.getElementById('banner-dismiss').addEventListener("click", covidBanner);
document.addEventListener("DOMContentLoaded", covidCheck);
function covidBanner() {
  var covidDismiss = localStorage.getItem('bannerDismiss');
if (covidDismiss == "TRUE") {
    document.getElementById('banner-covid').style.display = "none";
  } else {
    document.getElementById('banner-covid').style.display = "none";
    localStorage.setItem('bannerDismiss', 'TRUE', {
      expires: 7
    });
  }
}
function covidCheck() {
  var covidDismiss = localStorage.getItem('bannerDismiss');
  if (covidDismiss == "TRUE") {
    document.getElementById('banner-covid').style.display = "none";
  } if (covideDismiss == "FALSE" || covidDismiss == null) {
    document.getElementById('banner-covid').style.display = "inline";
  }
}
// changes header to fied on scroll
let scrollpos = window.scrollY
const header = document.querySelector(".header_area")
const header_height = header.offsetHeight
const add_class_on_scroll = () => header.classList.add("navbar_fixed")
const remove_class_on_scroll = () => header.classList.remove("navbar_fixed")
window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;
  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})

const carousel = new bootstrap.Carousel('#myCarousel')