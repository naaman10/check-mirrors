$(document).ready(function() {
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
  });