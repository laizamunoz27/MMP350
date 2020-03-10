const loginEmail = document.getElementById("login-email");
const loginPassword = js.getEl("login-password");
const loginButton = js.getEl("login-button");
const loginMessage = js.getEl("login-message");
const userName = js.getEl("user-name");
const logoutButton = js.getEl("logout-button");

loginButton.onclick = function() {
	fb.login(loginEmail.value, loginPassword.value);
};

logoutButton.onclick = function() {
	fb.logout();
};

loginPassword.addEventListener('keyup', function(event) {
	if (event.which == 13) {
		fb.login(loginEmail.value, loginPassword.value);
	}
});

function onError(errorMessage) {
	loginMessage.textContent = errorMessage;
}

function userLoggedIn(uid, displayName) {

	userName.textContent = "Welcome " + displayName + ".";

	const profileLink = js.getEl('profile-link');
	profileLink.href += '?uid=' + uid;

	document.body.classList.add('auth');
}

function noUser() {

	document.body.classList.remove('auth');
}