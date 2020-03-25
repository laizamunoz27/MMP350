const loginEmail = document.getElementById("login-email");
const loginPassword = js.getEl("login-password");
const loginButton = js.getEl("login-button");
const loginMessage = js.getEl("login-message");
const userName = js.getEl("user-name");
const logoutButton = js.getEl("logout-button");
const profileLink = js.getEl("edit-profile-link"); 

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

	profileLink.href = "profile.html?uid=" + uid;


	document.body.classList.add('auth');

function  onUser() {
	document.body.classList.removel('auth');
}