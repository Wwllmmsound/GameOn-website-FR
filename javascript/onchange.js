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

  birthdate.addEventListener("keydown", function (event) { event.preventDefault(); });
  
  birthdate.addEventListener("change", function dateRequired(){
      if (birthdate.value < 02/02/2020){
          document.getElementById("required_birthdate").innerText = "Vous devez entrer une date de naissance correcte";
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
  
  //________________________________________EVENT_QUANTITY__________________//

  quantity.addEventListener("keydown", function (event) { event.preventDefault(); });