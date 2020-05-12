

function formValidation()
{
    let login = document.getElementById("login");
    let loginError = document.getElementById("loginError");

    let pass = document.getElementById("pass");
    let passError = document.getElementById("passError");

    let confirmPass = document.getElementById("pass2");
    let confirmPassError = document.getElementById("confirmPassError");

    let fname = document.getElementById("fname");
    let fnameError = document.getElementById("fnameError");

    let lname = document.getElementById("lname");
    let lnameError = document.getElementById("lnameError");

    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");

    let regexStr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailRegex = new RegExp(regexStr);
    let emailChecker = emailRegex.test(String(email.value).toLowerCase());
    
    let phone = document.getElementById("telephone");
    let phoneError = document.getElementById("telephoneError");

    let phoneStr = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    let phoneRegex = new RegExp(phoneStr);
    let phoneChecker = phoneRegex.test(String(phone.value).toLowerCase());

    let card = document.getElementById("card");
    let cardError = document.getElementById("cardError");

    let faculty = document.getElementById("faculty"); 
    let facultyError = document.getElementById("facultyError"); 

    let valid = true;

    login_validation(login);
    password_validation(pass);
    confirm_password_validation(confirmPass);
    fname_validation(fname);
    lname_validation(lname);
    email_validation(email);
    phone_validation(phone);
    card_validation(card);
    faculty_validation(faculty);
    

    return valid;

    function login_validation(login){
        if(login.value.length < 4){
            loginError.textContent = "Your login should be longer then 4 chars ";
            loginError.style.color = "#f05056";
            valid = false;
        } else {
            loginError.textContent = "";
            localStorage.setItem("login", login.value);
        }
    }

    function password_validation(pass){
        if(pass.value.length < 6){
            passError.textContent = "Your password should be longer then 6 chars ";
            passError.style.color = "#f05056";
            valid = false;
        }else {
            passError.textContent = "";
            localStorage.setItem("pass", pass.value)
        }
    }

    function confirm_password_validation(confirmPass){
        if(confirmPass.value.length < 6)
        {
            confirmPassError.textContent = "Your password should be longer then 6 chars ";
            confirmPassError.style.color = "#f05056";
            valid = false;
        } 
        else if(confirmPass.value != pass.value)
        {
            confirmPassError.textContent = "Confirm your password ";
            confirmPassError.style.color = "#f05056";
            valid = false;
        } else{
            confirmPassError.textContent = "";
        }
    }

    function fname_validation(fname)
    {
        if(fname.value.length < 2)
        {
            fnameError.textContent = "Your first name should be longer then 2 chars ";
            fnameError.style.color = "#f05056";
            valid = false;
        } else{
            fnameError.textContent = "";
            localStorage.setItem("fname", fname.value);
        }
    }

    function lname_validation(lname)
    {
        if(lname.value.length < 2)
        {
            lnameError.textContent = "Your last name should be longer then 2 chars ";
            lnameError.style.color = "#f05056";
            valid = false;
        } else{
            lnameError.textContent = "";
            localStorage.setItem("lname", lname.value);
        }
    }

    function phone_validation(phone)
    {
        if(phone.value.length < 11)
        {
            phoneError.textContent = "Your phone should be longer then 11 chars ";
            phoneError.style.color = "#f05056";
            valid = false;
        } else if (!phoneChecker)
        {
            phoneError.textContent = "This isn't phone ";
            phoneError.style.color = "#f05056";
			valid=false;
        }else {
            phoneError.textContent = "";
            localStorage.setItem("phone", phone.value);
        }
    }

    function card_validation(card)
    {
        if(card.value.length < 8)
        {
            cardError.textContent = "Your card should be longer then 8 chars ";
            cardError.style.color = "#f05056";
            valid = false;
        } else{
            cardError.textContent = "";
            localStorage.setItem("card", card.value);
        }
    }

    function email_validation(email)
    {
        if(email.value.length < 5)
        {
            emailError.textContent = "Your email should be longer then 5 chars ";
            emailError.style.color = "#f05056";
            valid = false;
        }else if(!emailChecker){
            emailError.textContent = "This isn't email";
            emailError.style.color = "#f05056";
            valid = false;
        } 
        else{
            emailError.textContent = "";
            localStorage.setItem("email", email.value);
        }
    
    }

    function faculty_validation(faculty)
    {
        if(faculty.value == "Default")
        {
            facultyError.textContent = "You should choise your faculty";
            facultyError.style.color = "#f05056";
            valid = false;
        } else{
            facultyError.textContent = "";
            localStorage.setItem("faculty", faculty.value);
        }
    }

}

function getData(){
    let userLogin = document.getElementById("userLogin");
    let userPass = document.getElementById("userPass");
    let userFname = document.getElementById("userFname");
    let userLname = document.getElementById("userLname");
    let userPhone = document.getElementById("userPhone");
    let userCard = document.getElementById("userCard");
    let userEmail = document.getElementById("userEmail");
    let userFaculty = document.getElementById("userFaculty");
    
    userLogin.innerHTML = localStorage.getItem("login");
    userPass.innerHTML = localStorage.getItem("pass");
    userFname.innerHTML = localStorage.getItem("fname");
    userLname.innerHTML = localStorage.getItem("lname");
    userPhone.innerHTML = localStorage.getItem("phone");
    userCard.innerHTML = localStorage.getItem("card");
    userEmail.innerHTML = localStorage.getItem("email");
    userFaculty.innerHTML = localStorage.getItem("faculty")
}

let timerId;

function update() {
    let clock = document.getElementById('clock');
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
    clockRing(hours, minutes);
}

function clockStart() {
    timerId = setInterval(update, 1000);
    update();
  }

function clockRing(hours, minutes) {
    if(String(minutes) === '00'){
        setTimeout(() => alert(hours + " o'clock"));
    }
}

function clockStop() {
    clearInterval(timerId);
}



function autocomplete(inp, arr) {
    let currentFocus;
      inp.addEventListener("input", function(e) {
          let a, b, i, val = this.value;
          closeAllLists();
          if (!val) {
               return false;
            }
          currentFocus = -1;
          a = document.createElement("DIV");
          a.setAttribute("class", "autocomplete-items");
          this.parentNode.appendChild(a);
          for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
              b = document.createElement("DIV");
              b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
              b.innerHTML += arr[i].substr(val.length);
              b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
                  inp.value = this.getElementsByTagName("input")[0].value;
                  closeAllLists();
              });
              a.appendChild(b);
            }
          }
      });

      inp.addEventListener("keydown", function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");
          if (x) {
            x = x.getElementsByTagName("div");
          }
          if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
          } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
          } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
              if (x) x[currentFocus].click();
            }
          }
      });

      function addActive(x) {
        if (!x) {
            return false;
        }
        removeActive(x);
        if (currentFocus >= x.length) {
            currentFocus = 0;
        }
        if (currentFocus < 0) {
            currentFocus = (x.length - 1);
        }
        x[currentFocus].classList.add("autocomplete-active");
      }

      function removeActive(x) {
        for (let i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }

      function closeAllLists(elmnt) {
        let x = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }

        document.addEventListener("click", function (e) {
          closeAllLists(e.target);
        });
    }
  
let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

function runAutoComplete(){
    autocomplete(document.getElementById("myInput"), countries);
}