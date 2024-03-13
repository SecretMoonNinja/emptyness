var PARENT_1_CHECK = document.getElementById("parentinfo1");
var PARENT_2_CHECK = document.getElementById("parentinfo2");
var MAILING_CHECK = document.getElementById("mailing_address");
var ENROLLMENT_CHECK = document.getElementById("enrollment");

var Parent1_Info_Complete = false;
var Parent2_Info_Complete = false;
var Mailing_Info_Complete = false;

var parent1Fname = false;
var parent1Lname = false;
var parent1Email = false;
var parent1EmailConfirmed = false;
var parent1Phone = false;
var parent2Fname = false;
var parent2Lname = false;
var parent2Email = false;
var parent2EmailConfirmed = false;
var parent2Phone = false;
var streetAddress = false;
var city = false;
var state = false;
var zip = false;
var enrollmentDay = false;
var childrenEnrolled = false;

var f1name = document.getElementById("f1name");
var f1mname = document.getElementById("m1name");
var f1lname = document.getElementById("l1name");

var f2name = document.getElementById("f2name");
var f2mname = document.getElementById("m2name");
var f2lname = document.getElementById("l2name");

var street = document.getElementById("street_address");
var street2 = document.getElementById("street_address2");
var city_line = document.getElementById("city");
var state_line = document.getElementById("state");
var zip_line = document.getElementById("zipcode");

var enrollmentDay_Line = document.getElementById("enrollmentday");
var enrollmentChildren = document.getElementById("childrenenrolled");

// Define a function to check the value of a field
function checkField(field, fieldName) {
	if (field.value === "") {
		field.style.backgroundColor = "rgba(250, 168, 178, 0.5)";
		field.style.border = "2px solid red";
		window[fieldName] = false;
	} else {
		field.style.border = "2px solid green";
		field.style.backgroundColor = "transparent";
		window[fieldName] = true;
	}
	checkVariables();
}

// Define a function to add event listeners to a field
function addListeners(field, fieldName, events) {
	events.forEach(function (event) {
		field.addEventListener(event, function () {
			checkField(field, fieldName);
		});
	});
}

// Add event listeners to the fields
addListeners(f1name, "parent1Fname", ["focus", "input"]);
addListeners(f1lname, "parent1Lname", ["focus", "input"]);
addListeners(f2name, "parent2Fname", ["focus", "input"]);
addListeners(f2lname, "parent2Lname", ["focus", "input"]);
addListeners(street, "streetAddress", ["focus", "input"]);
addListeners(city_line, "city", ["focus", "input"]);
addListeners(state_line, "state", ["focus", "input"]);
addListeners(zip_line, "zip", ["focus", "input"]);
addListeners(enrollmentDay_Line, "enrollmentDay", ["focus", "input"]);
addListeners(enrollmentChildren, "childrenEnrolled", ["focus", "input"]);

// Add 'focus' event listener to 'f1mname' and 'f2mname' fields
[f1mname, f2mname, street2].forEach(function (field) {
	field.addEventListener("focus", function () {
		this.style.border = "2px solid green";
	});
});

// Parent 1 - Phone
function phoneFormat1(input) {
	// Remove all non-digit characters
	input = input.replace(/\D/g, "");
	var size = input.length;
	if (size > 0) {
		input = "(" + input;
	}
	if (size > 3) {
		input = input.slice(0, 4) + ") " + input.slice(4, 11);
	}
	if (size > 6) {
		input = input.slice(0, 9) + "-" + input.slice(9);
	}

	// Get the phone number field
	var phoneNumberField = document.getElementById("phone_number1");
	var icon1 = document.getElementById("phone1");

	// Create a RegExp object with your regex
	var regex = new RegExp("^\\(\\d{3}\\) \\d{3}-\\d{4}$");

	// Check if the phone number matches the regex
	if (!regex.test(input)) {
		// If it doesn't match, set the border color and background color to red
		phoneNumberField.style.borderColor = "red";
		phoneNumberField.style.backgroundColor = "rgba(250, 168, 178, 0.5)";
		icon1.className = "bx bx-x bx-flashing";
		parent1Phone = false;
		checkVariables();
	} else {
		// If it matches, set the border color and background color to the original values
		phoneNumberField.style.borderColor = "green";
		phoneNumberField.style.backgroundColor = "transparent";
		icon1.className = "bx bxs-phone";
		parent1Phone = true;
		checkVariables();
	}
	return input;
}

// Parent 2 - Phone
function phoneFormat2(input) {
	// Remove all non-digit characters
	input = input.replace(/\D/g, "");
	var size = input.length;
	if (size > 0) {
		input = "(" + input;
	}
	if (size > 3) {
		input = input.slice(0, 4) + ") " + input.slice(4, 11);
	}
	if (size > 6) {
		input = input.slice(0, 9) + "-" + input.slice(9);
	}

	// Get the phone number field
	var phoneNumberField = document.getElementById("phone_number2");
	var icon2 = document.getElementById("phone2");

	// Create a RegExp object with your regex
	var regex = new RegExp("^\\(\\d{3}\\) \\d{3}-\\d{4}$");

	// Check if the phone number matches the regex
	if (!regex.test(input)) {
		// If it doesn't match, set the border color and background color to red
		phoneNumberField.style.borderColor = "red";
		phoneNumberField.style.backgroundColor = "rgba(250, 168, 178, 0.5)";
		icon2.className = "bx bx-x bx-flashing";
		parent2Phone = false;
		checkVariables();
	} else {
		// If it matches, set the border color and background color to the original values
		phoneNumberField.style.borderColor = "green";
		phoneNumberField.style.backgroundColor = "transparent";
		icon2.className = "bx bxs-phone";
		parent2Phone = true;
		checkVariables();
	}

	return input;
}

function checkEmails(
	emailFieldId,
	confirmedEmailFieldId,
	icon1Id,
	icon2Id,
	parentEmailVar,
	parentEmailConfirmedVar
) {
	var email = document.getElementById(emailFieldId).value;
	var confirmedEmail = document.getElementById(confirmedEmailFieldId).value;
	var emailField1 = document.getElementById(emailFieldId);
	var emailField = document.getElementById(confirmedEmailFieldId);
	var icon1 = document.getElementById(icon1Id);
	var icon2 = document.getElementById(icon2Id);

	// Create a RegExp object with your regex
	var regex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,}$");

	// Check if the emails match and if they match the regex
	if (
		email == confirmedEmail &&
		regex.test(email) &&
		regex.test(confirmedEmail)
	) {
		emailField.style.borderColor = "green";
		emailField.style.backgroundColor = "transparent";
		emailField1.style.borderColor = "green";
		emailField1.style.backgroundColor = "transparent";
		icon1.className = "bx bxs-envelope";
		icon2.className = "bx bxs-envelope";
		window[parentEmailVar] = true;
		window[parentEmailConfirmedVar] = true;
		checkVariables();
	} else {
		emailField.style.borderColor = "red";
		emailField1.style.borderColor = "red";
		emailField.style.backgroundColor = "rgba(250, 168, 178, 0.5)";
		emailField1.style.backgroundColor = "rgba(250, 168, 178, 0.5)";
		icon1.className = "bx bx-x bx-flashing";
		icon2.className = "bx bx-x bx-flashing";
		window[parentEmailVar] = false;
		window[parentEmailConfirmedVar] = false;
		checkVariables();
	}
}

// Add event listeners to the fields
document.getElementById("email1").addEventListener("focus", function () {
	checkEmails(
		"email1",
		"email_confirmed1",
		"icon1",
		"icon2",
		"parent1Email",
		"parent1EmailConfirmed"
	);
});
document
	.getElementById("email_confirmed1")
	.addEventListener("focus", function () {
		checkEmails(
			"email1",
			"email_confirmed1",
			"icon1",
			"icon2",
			"parent1Email",
			"parent1EmailConfirmed"
		);
	});
document.getElementById("email2").addEventListener("focus", function () {
	checkEmails(
		"email2",
		"email_confirmed2",
		"icon12",
		"icon22",
		"parent2Email",
		"parent2EmailConfirmed"
	);
});
document
	.getElementById("email_confirmed2")
	.addEventListener("focus", function () {
		checkEmails(
			"email2",
			"email_confirmed2",
			"icon12",
			"icon22",
			"parent2Email",
			"parent2EmailConfirmed"
		);
	});

// function to check if all variables are true to turn main borders green
function checkVariables() {
	if (
		parent1Fname &&
		parent1Lname &&
		parent1Email &&
		parent1EmailConfirmed &&
		parent1Phone
	) {
		PARENT_1_CHECK.style.border = "2px solid green";
	} else {
		PARENT_1_CHECK.style.border = "2px solid rgba(160, 15, 15, 0.806)";
	}

	if (
		parent2Fname &&
		parent2Lname &&
		parent2Email &&
		parent2EmailConfirmed &&
		parent2Phone
	) {
		PARENT_2_CHECK.style.border = "2px solid green";
	} else {
		PARENT_2_CHECK.style.border = "2px solid rgba(160, 15, 15, 0.806)";
	}

	if (streetAddress && city && state && zip) {
		MAILING_CHECK.style.border = "2px solid green";
	} else {
		MAILING_CHECK.style.border = "2px solid rgba(160, 15, 15, 0.806)";
	}

	if (enrollmentDay && childrenEnrolled) {
		ENROLLMENT_CHECK.style.border = "2px solid green";
	} else {
		ENROLLMENT_CHECK.style.border = "2px solid rgba(160, 15, 15, 0.806)";
	}
}

// call the function initially
checkVariables();
