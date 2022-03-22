// modal required field
let nameOk = false;
let surnameOk = false;
let emailOk = false;
let birthdateOk = false;
let conditionOk = false;
let radioOk = false;



//___________________ONCHANGE__FUNCTIONS___________________________________________//
//_____________________________________FIRST_NAME____________________________________//
firstName.addEventListener("change", function nameRequired(){
    const rejex = /^[a-zA-ZÀ-ÿ.]{2,30}$/i;
    if (!firstName.value.match(rejex)){
      document.getElementById("required_first").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
      firstName.style.border = "solid 1px red";
    } else {
      document.getElementById("required_first").innerText = "";
      firstName.style.border = "none";
      nameOk = true;
    }
  });

//_____________________________________LAST_NAME_____________________________________//
  lastName.addEventListener("change", function surnameRequired(){
    const rejex = /^[a-zA-ZÀ-ÿ.]{2,30}$/i;
    if (!lastName.value.match(rejex)){
      document.getElementById("required_last").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
      lastName.style.border = "solid 1px red";
    } else {
      document.getElementById("required_last").innerText = "";
      lastName.style.border = "none";
      surnameOk = true;
    }
  });


//_______________________________________EMAIL________________________________________//
email.addEventListener("change", function mailRequired(){
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!email.value.match(regex)){
        document.getElementById("required_email").innerText = "Adresse e-mail incorrect";
        email.style.border = "solid 1px red";
      } else {
        document.getElementById("required_email").innerText = "";
        email.style.border = "none";
        emailOk = true;
      }
    //_____________________________________LAST_NAME_____________________________________//
      const rejex = /^[a-zA-ZÀ-ÿ.]{2,30}$/i;
    if (!lastName.value.match(rejex)){
      document.getElementById("required_last").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
      lastName.style.border = "solid 1px red";
    } else {
      document.getElementById("required_last").innerText = "";
      lastName.style.border = "none";
      surnameOk = true;
    }
    //_____________________________________FIRST_NAME____________________________________//
    if (!firstName.value.match(rejex)){
        document.getElementById("required_first").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
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


