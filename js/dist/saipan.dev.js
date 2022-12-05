"use strict";

var idx = -1000;
setInterval(function () {
  $(".slide_cut").css("margin-left", idx + "px").css("transition", "0.5s");
  idx -= 1000;

  if (idx == -2000) {
    setTimeout(function () {
      $(".slide_cut").css("margin-left", "0px").css("transition", "0s");
      idx = -1000;
    }, 500);
  }
}, 2500);