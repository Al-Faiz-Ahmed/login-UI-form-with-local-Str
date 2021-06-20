//onload FUNCTION WITH GLOBAL VARIABLE

var logInform = document.querySelector(".form__Login");
logInform.style.cssText = "top:-100%;";

//SOME ANIMATION

function btnChanger(e) {
  var btnLogIN = document.querySelector(".logIn");
  var btnSignUp = document.querySelector(".signUp");
  var signUpform = document.querySelector(".form__Signup");

  if (e.className === btnSignUp.className) {
    btnSignUp.className = "signUp active";
    btnLogIN.className = "logIn";
    signUpform.style.cssText =
      "top:0%;opacity:1;pointer-events:auto;z-index:1;";
    btnLogIN.disabled = "disabled";

    setTimeout(function () {
      logInform.style.cssText = "top:-100%;";
      signUpform.style.cssText = "z-index:0;";
    }, 1000);
    setTimeout(function () {
      btnLogIN.disabled = false;
    }, 1200);
  }

  if (e.className === btnLogIN.className) {
    btnLogIN.className = "logIn active";
    btnSignUp.className = "signUp";
    logInform.style.cssText = "top:0%;opacity:1;pointer-events:auto;z-index:1;";
    btnSignUp.disabled = "disabled";
    setTimeout(function () {
      signUpform.style.cssText = "top:-100%;";
      logInform.style.cssText = "z-index:0;";
    }, 1000);
    setTimeout(function () {
      btnSignUp.disabled = false;
    }, 1200);
  }
}

// TO SET USE INFO IN OBJ AND LOCAL STORAGE

var obj = {};
function getVal__SetVal() {
  var username = document.querySelector("#Username");
  var email = document.querySelector("#Email");
  var password = document.querySelector("#Password");
  var randomize = Math.ceil(Math.random() * 10000);
  var arr = {
    email: email.value,
    username: username.value,
    password: password.value,
  };
  obj["user" + randomize + randomize] = arr;
  localStorage.setItem("users", JSON.stringify(obj));
  username.value = "";
  email.value = "";
  password.value = "";
}

//TO GET USER INFO IN LOCAL STORAGE AND NAVIGATE HIM etc..

function chechUSer() {
  var username = document.querySelector("#emailorusername");
  var password = document.querySelector("#verifyPassword");
  var getFormLocalStr = localStorage.getItem("users");
  var parse = JSON.parse(getFormLocalStr);

  var userInfo = Object.keys(parse);

  for (var i = 0; i < userInfo.length; i++) {
    if (
      username.value === parse[userInfo[i]].email ||
      username.value === parse[userInfo[i]].username
    ) {
      if (password.value === parse[userInfo[i]].password) {
        alert("you r our user");
        break;
      } else {
        alert("you type wrong password");
        break;
      }
    } else {
      alert("Something went wrong");
      break;
    }
  }
}
