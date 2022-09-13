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

// analytics
document.getElementById('callBtn').addEventListener("click", callAnalytics);
document.getElementById('hsForm_aae7163f-7c3d-447b-af1a-7b16229a8c81').addEventListener("submit", bookAnalytics)

function callAnalytics() {
  gtag('event', 'callButton', {
    'clickToCall': true
  });
}
function bookAnalytics() {
  gtag('event', 'bookSubmit', {
    'formName': "Student Booking Form",
    'page': document.title,
    
  });
}