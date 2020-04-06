const profileUID = location.search.split('=')[1];
fb.getUserProfile(profileUID);

const profileName = js.getEl("profile-display-name");
const profileBio = js.getEl("profile-bio");
const profileButton = js.getEl("update-profile");
const profileEmail = js.getEl("profile-email");
const profileComment = js.getEl("profile-comment");

function displayProfile(userName, userInfo) {

	// display the user profile name
	profileName.value = userName;

	// add other other fields

	if (userInfo.email) {
		profileemail.value = userInfo.email;
	}

}

profileButton.onclick = function() {
	// helper: user id, field name 
	fb.updateProfile(profileUID, 'email', profileEmail.value);
	fb.updateProfile(profileUID, 'comment', profileComment.value);
};


function profileLoggedIn(uid) {
	if (uid == profileUID) {
		profileButton.style.display = 'block';
	}
}