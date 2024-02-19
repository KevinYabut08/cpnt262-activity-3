"use strict";

let username;
let age;

document.getElementById("myClick").onclick = function () {
  username = document.getElementById("myVar").value;
  username = username.toUpperCase();
  document.getElementById(
    "myText"
  ).textContent = `Have a great day ${username}!!!`;
};
