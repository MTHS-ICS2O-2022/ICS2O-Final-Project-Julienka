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

  //singles
  if (paintArt == true) {
    const paintArtAns = 4.5 * 1.3
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + paintArtAns.toFixed(2) + "."
  } else if (sandArt == true) {
    const sandArtAns = 5 * 1.3
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + sandArtAns.toFixed(2) + "."
  } else if (sculptureArt == true) {
    const sculptureArtAns = 10 * 1.3
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + sculptureArtAns.toFixed(2) + "."
  }

  //pairs
  if (paintArt && sandArt == true) {
    const paintSand = (5 + 4.5) * 1.3
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + paintSand.toFixed(2) + "."
  } else if (sandArt && sculptureArt == true) {
    const sandSculpture = (5 + 10) * 1.3
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + sandSculpture.toFixed(2) + "."
  } else if (paintArt && sculptureArt == true) {
    const paintSculpture = (4.5 + 10) * 1.3
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + paintSculpture.toFixed(2) + "."
  }
  //all three and none
  if (paintArt && sandArt && sculptureArt == true) {
    const allTheArt = (5 + 4.5 + 10) * 1.3
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + allTheArt.toFixed(2) + "."
  } else if (paintArt && sandArt && sculptureArt == false) {
     document.getElementById("checkOut").innerHTML =
      "You have not chosen any items, therefore don't have a price displayed <br /> Please refresh the page and shop to your heart's content!"
  }
}
