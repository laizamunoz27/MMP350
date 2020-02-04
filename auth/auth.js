const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");
console.log(loginEmail, loginPassword ,loginButton);

loginButton.onclick = function() {
	console.log(loginEmail.value, loginPassword.value);

	loginMessage.textContent = "You logged in.";
};