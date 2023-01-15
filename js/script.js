// Copyright (c) 2022 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Final-Project-Julienka/sw.js", {
    scope: "/ICS2O-Final-Project-Julienka/",
  })
}

//process
function myButtonClicked() {
  // variables
  const paintArt = document.getElementById("checkbox-1").checked
  const sandArt = document.getElementById("checkbox-2").checked
  const sculptureArt = document.getElementById("checkbox-3").checked

  if (paintArt == true) {
    const paintArtAns = 4.5 * 1.3
    document.getElementById("checkOut").innerHTML =
      "Your recipt is $" + paintArtAns.toFixed(2) + "."
  } else if (sandArt == true) {
    const sandArtAns = 5 * 1.3
    document.getElementById("checkOut").innerHTML =
      "Your recipt is $" + sandArtAns.toFixed(2) + "."
  } else if (sculptureArt == true) {
    const sculptureArtAns = 10 * 1.3
    document.getElementById("checkOut").innerHTML =
      "Your recipt is $" + sculptureArtAns.toFixed(2) + "."
  }
}
