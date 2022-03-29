function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const registBtn = document.querySelector(".btn-submit");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const validCondition = document.getElementById("checkbox1");
const quantity = document.getElementById("quantity");

const radioDiv = document.getElementById("radio");
const radio1 = document.getElementById("location1");
const radio2 = document.getElementById("location2");
const radio3 = document.getElementById("location3");
const radio4 = document.getElementById("location4");
const radio5 = document.getElementById("location5");
const radio6 = document.getElementById("location6");

const rejex = /^[a-zA-ZÀ-ÿ./\s*]{2,30}$/i;
const regex = /[A-Z0-9._-]+@[A-Z0-9-]+.[A-Z]{2,4}/gi;
const rejNumb = /^[0-9]/i;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
closeBtn.addEventListener("click", function() {
  modalbg.style.display = "none";
});