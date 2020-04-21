const profileUID = location.search.split('=')[1];
fb.getUserProfile(profileUID);

const profileName = js.getEl("profile-display-name");
const profileBio = js.getEl("profile-bio");
const profileButton = js.getEl("update-profile");
const profileEmail = js.getEl("profile-email");
const profileComment = js.getEl("profile-comment");

const profileImage= js.getEl("profile-image");
const prfileImageInput = js.getEl("prfile-image-input");
const prfileImageButton - js.getEl("update-profile-image");

function displayProfile(userName, userInfo) {

	// display the user profile name
	profileName.value = userName;

	// add other other fields

	if (userInfo.email) {
		profileemail.value = userInfo.email;
	}

	if (userInfo.imageURL){
		profileimage.src = userinfo.imageURL;
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

profileImageButton.onclick = function () {
	const file = profileImageInput.file (0);
	console.log(file);
	
	if (file) {
		fb.uploadImage(file, profileUID,'profile-image');
			.then(addProfileImage);

	}
};

function addPrifileImage(imageURL){
	profileImage.src = imageURL;
	fb.uploadProfile(profileUID, 'imageURL, imageURL');
}