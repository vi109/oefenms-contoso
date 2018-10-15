// password match

// eerst variabele stellen op id
var passwordInput = document.getElementById('pwd');
var confirmPasswordInput = document.getElementById('confirm-pwd');

// dan functie stelen die de match checked
var checkPasswords = function() {  
  var passwordsMatch = passwordInput.value === confirmPasswordInput.value;

  if (passwordsMatch) {
    confirmPasswordInput.setCustomValidity("");
  } else {
    confirmPasswordInput.setCustomValidity("passwords do not match");
  }
};
// dan via eventlistener instellen op de betreffende velden uit het formulier
var addPasswordInputEventListeners = function () {
  passwordInput.addEventListener("input", checkPasswords, false);
  confirmPasswordInput.addEventListener("input", checkPasswords, false);
};

// calls the listener (zorgt ervoor dat bovenstaande wordt toegepast)
addPasswordInputEventListeners();
