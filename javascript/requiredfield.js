// modal required field
let nameOk = false;
let surnameOk = false;
let emailOk = false;
let birthdateOk = false;
let conditionOk = false;
let radioOk = false;

const rejex = /^[a-zA-ZÀ-ÿ.]{2,30}$/i;
const regex = /[A-Z0-9._-]+@[A-Z0-9-]+.[A-Z]{2,4}/gi;


//___________________ONCHANGE__FUNCTIONS___________________________________________//
//_____________________________________FIRST_NAME____________________________________//
firstName.addEventListener("change", function nameRequired(){
  if (!firstName.value.match(rejex)){
    document.getElementById("required_first").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    firstName.style.border = "solid 1px red";
  } else {
    document.getElementById("required_first").innerText = "";
    firstName.style.border = "none";
    nameOk = true;
  }
});

//_____________________________________LAST_NAME_____________________________________//
  lastName.addEventListener("change", function surnameRequired(){
    if (!lastName.value.match(rejex)){
      document.getElementById("required_last").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
      lastName.style.border = "solid 1px red";
    } else {
      document.getElementById("required_last").innerText = "";
      lastName.style.border = "none";
      surnameOk = true;
    }
  });


//_______________________________________EMAIL________________________________________//
email.addEventListener("change", function mailRequired(){
  if (!email.value.match(regex)){
    document.getElementById("required_email").innerText = "Adresse e-mail incorrect";
    email.style.border = "solid 1px red";
  } else {
    document.getElementById("required_email").innerText = "";
    email.style.border = "none";
    emailOk = true;
  }
});
//_____________________________________BIRTHDATE____________________________________//
birthdate.addEventListener("change", function mailRequired(){
    if (birthdate.value < 02/02/2020){
        document.getElementById("required_birthdate").innerText = "Vous devez entrer votre date de naissance";
        birthdate.style.border = "solid 1px red";
      } else {
        document.getElementById("required_birthdate").innerText = "";
        birthdate.style.border = "none";
        birthdateOk = true;
      }
});

//_____________________________________RADIO________________________________________//
radioDiv.addEventListener("change", function radioRequired(){
    if (radio1.checked === true) {
        document.getElementById("required_radio").innerText = "";
        radioDiv.style.border = "none";
        radioOk = true;
      } else if (radio2.checked === true) {
        document.getElementById("required_radio").innerText = "";
        radioDiv.style.border = "none";
        radioOk = true;
      } else if (radio3.checked === true) {
        document.getElementById("required_radio").innerText = "";
        radioDiv.style.border = "none";
        radioOk = true;
      } else if (radio4.checked === true) {
        document.getElementById("required_radio").innerText = "";
        radioDiv.style.border = "none";
        radioOk = true;
      } else if (radio5.checked === true) {
        document.getElementById("required_radio").innerText = "";
        radioDiv.style.border = "none";
        radioOk = true;
      } else if (radio6.checked === true) {
        document.getElementById("required_radio").innerText = "";
        radioDiv.style.border = "none";
        radioOk = true;
      } else {
        document.getElementById("required_radio").innerText = "Vous devez choisir une option";
        radioDiv.style.border = "solid 1px red";
      }
});



  
//______________________________________SUBMIT_FORM_______________________________//

registBtn.addEventListener("click", function(event){
    event.preventDefault();
      //_____________________________________BIRTHDATE____________________________________//
  
      if (birthdate.value < 02/02/2020){
        document.getElementById("required_birthdate").innerText = "Vous devez entrer votre date de naissance";
        birthdate.style.border = "solid 1px red";
      } else {
        document.getElementById("required_birthdate").innerText = "";
        birthdate.style.border = "none";
        birthdateOk = true;
      };
      //_____________________________________RADIO________________________________________//
  
      if (radio1.checked === true) {
        document.getElementById("required_radio").innerText = "";
        radioDiv.style.border = "none";
        radioOk = true;
      } else if (radio2.checked === true) {
        document.getElementById("required_radio").innerText = "";
        radioDiv.style.border = "none";
        radioOk = true;
      } else if (radio3.checked === true) {
        document.getElementById("required_radio").innerText = "";
        radioDiv.style.border = "none";
        radioOk = true;
      } else if (radio4.checked === true) {
        document.getElementById("required_radio").innerText = "";
        radioDiv.style.border = "none";
        radioOk = true;
      } else if (radio5.checked === true) {
        document.getElementById("required_radio").innerText = "";
        radioDiv.style.border = "none";
        radioOk = true;
      } else if (radio6.checked === true) {
        document.getElementById("required_radio").innerText = "";
        radioDiv.style.border = "none";
        radioOk = true;
      } else {
        document.getElementById("required_radio").innerText = "Vous devez choisir une option";
        radioDiv.style.border = "solid 1px red";
      };
      //___________________________________CONDITIONS_____________________________________//
  
    if (validCondition.checked === false){
        document.getElementById("required_cond").innerText = "Vous devez vérifier que vous acceptez les termes et conditions";
      } else {
        document.getElementById("required_cond").innerText = "";
        conditionOk = true;
      };
     //_______________________________________EMAIL________________________________________//
       if (email.value === "") {
        document.getElementById("required_email").innerText = "Veuillez informer votre e-mail";
      } else if (!email.value.match(regex)){
        document.getElementById("required_email").innerText = "Adresse e-mail incorrect";
        email.style.border = "solid 1px red";
      } else {
        document.getElementById("required_email").innerText = "";
        email.style.border = "none";
        emailOk = true;
      }
    //_____________________________________LAST_NAME_____________________________________//
    if(lastName.value === "") {
      document.getElementById("required_last").innerText = "Veuillez compléter le champ du prénom";
    } else if (!lastName.value.match(rejex)){
      document.getElementById("required_last").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
      lastName.style.border = "solid 1px red";
    } else {
      document.getElementById("required_last").innerText = "";
      lastName.style.border = "none";
      surnameOk = true;
    }
    //_____________________________________FIRST_NAME____________________________________//
    if(firstName.value === "") {
      document.getElementById("required_first").innerText = "Veuillez compléter le champ du nom";
    } else if (!firstName.value.match(rejex)){
        document.getElementById("required_first").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
        firstName.style.border = "solid 1px red";
      } else {
        document.getElementById("required_first").innerText = "";
        firstName.style.border = "none";
        nameOk = true;
      }
      
        
});

//_____________________________________VALIDATION__________________________________//
registBtn.addEventListener("click", function(event){
    if (
        nameOk === true &&
        surnameOk === true &&
        emailOk === true &&
        birthdateOk === true &&
        conditionOk === true &&
        radioOk === true
      ) {
        document.querySelector(".valid-form").style.animation = "modal-validated 0.2s ease-in forwards";
      }
})


