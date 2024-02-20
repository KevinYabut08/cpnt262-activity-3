"use strict";

let username;
let passCode;

document.getElementById("myClick").onclick = function () {
  username = document.getElementById("myVar").value;
  username = username.toUpperCase();
  document.getElementById(
    "myText"
  ).textContent = `Have a great day ${username}!!!`;

  passCode = document.getElementById("myPass").value;
  if (/^\d+$/.test(passCode)) {
    console.log(`You are doing it right!!!`);
  } else {
    console.error(`You are not doing it right!!!`);
  }
};
