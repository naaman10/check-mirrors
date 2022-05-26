$(document).ready(function() {
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
    $(this).toggleClass('open');
  });
  $('.my-background-video').bgVideo({
    fullScreen: false, // Sets the video to be fixed to the full window - your <video> and it's container should be direct descendents of the <body> tag
    fadeIn: 500,
    pauseAfter: 120,
    fadeOnPause: false,
    fadeOnEnd: true,
    showPausePlay: true, // Show pause/play button
    pausePlayXPos: 'right', // left|right|center
    pausePlayYPos: 'top', // top|bottom|center
    pausePlayXOffset: '15px', // pixels or percent from side - ignored if positioned center
    pausePlayYOffset: '15px' // pixels or percent from top/bottom - ignored if positioned center
  });
  $('#footModal').on('click', function(event){
    event.preventDefault();
    $('#bookFormModal').modal('show');
  });
});

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