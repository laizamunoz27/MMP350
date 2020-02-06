const loginEmail = document.getElementById("login-email");
const loginPassword = js.getEl("login-password");
const loginButton = js.getEl("login-button");
const loginMessage = js.getEl("login-message");
const userName= js.getEl("user-name");



loginButton.onclick = function() {
	fb.login(loginEmail.value, loginPassword.value);
};

function onError(errorMessage) {
	loginMessage.textContent = errorMessage;
}
function useerLoggedIn(uid, displayNmae) {
	
}