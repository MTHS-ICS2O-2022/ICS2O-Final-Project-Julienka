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
  // Main constants
  const TAX_RATE = 1.13
  const paintArtPrice = 4.5
  const sandArtPrice = 5
  const sculpturePrice = 10
  // checked constants ( checkbox )
  const paintArt = document.getElementById("checkbox-1").checked
  const sandArt = document.getElementById("checkbox-2").checked
  const sculptureArt = document.getElementById("checkbox-3").checked

  //singles
  if (paintArt == true) {
    const paintArtAns = paintArtPrice * TAX_RATE
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + paintArtAns.toFixed(2) + "."
  } else if (sandArt == true) {
    const sandArtAns = sandArtPrice * TAX_RATE
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + sandArtAns.toFixed(2) + "."
  } else if (sculptureArt == true) {
    const sculptureArtAns = sculpturePrice * TAX_RATE
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + sculptureArtAns.toFixed(2) + "."
  }

  //pairs
  if (paintArt && sandArt == true) {
    const paintSand = (sandArtPrice + paintArtPrice) * TAX_RATE
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + paintSand.toFixed(2) + "."
  } else if (sandArt && sculptureArt == true) {
    const sandSculpture = (sandArtPrice + sculpturePrice) * TAX_RATE
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + sandSculpture.toFixed(2) + "."
  } else if (paintArt && sculptureArt == true) {
    const paintSculpture = (paintArtPrice + sculpturePrice) * TAX_RATE
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + paintSculpture.toFixed(2) + "."
  }
  //all three and none
  if (paintArt && sandArt && sculptureArt == true) {
    const allTheArt = (sandArtPrice + paintArtPrice + sculpturePrice) * TAX_RATE
    document.getElementById("checkOut").innerHTML =
      "Your bill is $" + allTheArt.toFixed(2) + "."
  }
}
