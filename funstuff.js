function showMessage(paymentOption) {
	// Hide all messages
	document.getElementById("payment-message-ccfa").style.display = "none";
	document.getElementById("payment-message-cc").style.display = "none";

	// Show the selected message
	document.getElementById("payment-message-" + paymentOption).style.display =
		"block";
}

// Fills the information for Parent 2 (if single parent)
function fillParent2Info() {
	if (document.getElementById("sameAsParent1").checked) {
		f2name = document.getElementById("f2name");
		f2name.value = document.getElementById("f1name").value;
		checkField(f2name, "parent1Fname");

		f2mname = document.getElementById("m2name");
		f2mname.value = document.getElementById("m1name").value;
		f2mname.style.border = "2px solid green";

		f2lname = document.getElementById("l2name");
		f2lname.value = document.getElementById("l1name").value;
		checkField(f2lname, "parent1Lname");

		email2 = document.getElementById("email2");
		email2.value = document.getElementById("email1").value;
		checkEmails(
			"email2",
			"email_confirmed2",
			"icon12",
			"icon22",
			"parent2Email",
			"parent2EmailConfirmed"
		);

		email_confirmed2 = document.getElementById("email_confirmed2");
		email_confirmed2.value = document.getElementById("email_confirmed1").value;
		checkEmails(
			"email2",
			"email_confirmed2",
			"icon12",
			"icon22",
			"parent2Email",
			"parent2EmailConfirmed"
		);

		// phone_number2 = document.getElementById('phone_number2');
		// phone_number2.value = document.getElementById('phone_number1').value;
		// checkField(phone_number2, 'parent1Phone')

		// document.getElementById('email2').value = document.getElementById('email1').value;
		// // checkEmails2()
		// document.getElementById('email_confirmed2').value = document.getElementById('email_confirmed1').value;
		// // checkEmails2()
		document.getElementById("phone_number2").value = phoneFormat2(
			document.getElementById("phone_number1").value
		);
		setTimeout(checkVariables, 0);
	} else {
		document.getElementById("f2name").value = "";
		// checkparent2Fname()
		document.getElementById("m2name").value = "";
		document.getElementById("l2name").value = "";
		// checkparent2Lname()
		document.getElementById("email2").value = "";
		// checkEmails2()
		document.getElementById("email_confirmed2").value = "";
		// checkEmails2()
		document.getElementById("phone_number2").value = "";
		phoneFormat2("");
		setTimeout(checkVariables, 0);
	}
	setTimeout(checkVariables, 0);
}

function check_Field_Children() {
	if (this.value === "") {
		this.style.border = "2px solid red";
		this.style.backgroundColor = "rgba(250, 168, 178, 0.5)";
	} else {
		this.style.border = "2px solid green";
		this.style.backgroundColor = "transparent";
	}
}
function checkChildFields(childNumber) {
	var fields = ["Fname", "Lname", "DOB", "Gender", "Grade"];
	var allFieldsFilled = fields.every(function (field) {
		var elem = document.getElementById("child" + field + childNumber);
		return elem.value !== "";
	});

	var childBox = document.getElementById("child" + childNumber);
	if (allFieldsFilled) {
		childBox.style.border = "2px solid green";
	} else {
		childBox.style.border = "2px solid rgba(15, 46, 160, 0.806)";
	}
}

function generateChildHTML(childNumber) {
	return `
<details id="child${childNumber}" class="children">
<summary>
<div style="display: flex; align-items: center;">
<i id="accordian_arrow" class='bx bxs-down-arrow bx-tada'></i>
<h2 style="display: inline;">Child ${childNumber} Information: <span class="required">*</span></h2>
</div>
</summary>
<h4>Name:</h4>
<div class="input-box">
<div class="input-field">
<input type="text" placeholder="First Name" id="childFname${childNumber}" name="childFname${childNumber}" required ">
<label for="childFname${childNumber}">First Name <span class="required">*</span></label>
<i class='bx bxs-user'></i>
</div>
<div class="input-field">
<input type="text" placeholder="Middle Name" id="childMname${childNumber}" name="childMname${childNumber}">
<label for="childMname${childNumber}">Middle Name</label>
<i class='bx bxs-user'></i>
</div>
<div class="input-field">
<input type="text" placeholder="Last Name" id="childLname${childNumber}" name="childLname${childNumber}" required>
<label for="childLname${childNumber}">Last Name <span class="required">*</span></label>
<i class='bx bxs-user'></i>
</div>
</div>
<div class="input-box">
<div class="input-field">
<h4>Date of Birth: <span class="required">*</span></h4>
<input style="padding-left: 15px;" type="date" id="childDOB${childNumber}" name="childDOB${childNumber}">
</div>
<div class="input-field">
<h4>Gender: <span class="required">*</span></h4>
<select id="childGender${childNumber}" name="childGender${childNumber}" required>
<option value="" disabled selected>Please Select</option>
<option value="male">Male</option>
<option value="female">Female</option>
</select>
</div>
<div class="input-field">
<br>
<h4>Grade in 2024-2025: <span class="required">*</span></h4>
<select id="childGrade${childNumber}" name="childGrade${childNumber}" required>
<option value="" disabled selected>Please Select</option>
<option value="0">KG</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
</select>
</div>
<div class="input-field">
<br>
<h4>Enter Allergies If Any:</h4>
<input style="padding-left: 15px;" type="text" placeholder="Allergies" id="childAllergies${childNumber}" name="childAllergies${childNumber}" >
<label for="childAllergies${childNumber}">Do not enter anything if none</label>
</div>

<div class="input-field">
<br><br>
<h4>Enter Special Needs If Any:</h4>
<input style="padding-left: 15px;" type="text" placeholder="Special Needs" id="childNeeds${childNumber}" name="childNeeds${childNumber}" >
<label for="childNeeds${childNumber}">Do not enter anything if none</label>
</div>
</div>
<br><br><br>
<br><hr><br>
</details>
`;
}

// Generate HTML for each child
for (var i = 1; i <= 6; i++) {
	document.getElementById("childrenContainer").innerHTML +=
		generateChildHTML(i);
}

function addEventListeners(childNumber) {
	["Fname", "Lname", "DOB", "Gender", "Grade"].forEach(function (field) {
		var elem = document.getElementById("child" + field + childNumber);
		elem.setAttribute("required", "");
		elem.addEventListener("focus", function () {
			check_Field_Children.call(this);
			checkChildFields(childNumber);
		});
		elem.addEventListener("input", function () {
			check_Field_Children.call(this);
			checkChildFields(childNumber);
		});
	});
	["Mname", "Allergies", "Needs"].forEach(function (field) {
		var elem = document.getElementById("child" + field + childNumber);
		elem.addEventListener("focus", function () {
			this.style.border = "2px solid green";
			checkChildFields(childNumber);
		});
	});
}

function showChildren() {
	calculateCost();
	var numChildren = document.getElementById("childrenenrolled").value;
	for (var i = 1; i <= 6; i++) {
		document.getElementById("child" + i).style.display = "none";
	}
	for (var i = 1; i <= numChildren; i++) {
		document.getElementById("child" + i).style.display = "block";
		addEventListeners(i);
	}
}
function calculateCost() {
	const d = new Date();
	schoolYear = 2024;
	var month = d.getMonth() + 1;
	var year = d.getFullYear();
	let x = document.getElementById("childrenenrolled").value;
	if (x >= 3) {
		let cost = 425 + 220 * x + 100 * x + 20 - 40 * (x - 2);
		document.getElementById("fee").innerText = "$" + 425;
		document.getElementById("tuition").innerText = "$" + 220 * x;
		document.getElementById("Expansion").innerText = "$" + 100 * x;
		document.getElementById("pta").innerText = "$" + 20;
		document.getElementById("Discount").innerText = "$" + 40 * (x - 2);
		document.getElementById("result").innerText = "$" + cost;
		if (year > schoolYear || (year == schoolYear && month > 8)) {
			document.getElementById("LateFee").innerText = "$" + 50;
			var val = parseInt(
				document.getElementById("result").innerText.replace("$", "")
			);
			document.getElementById("result").innerText = "$" + (val + 50);
		} else {
			document.getElementById("LateFee").innerText = "$" + 0;
		}
	} else {
		let cost = 425 + 220 * x + 100 * x + 20;
		document.getElementById("fee").innerText = "$" + 425;
		document.getElementById("tuition").innerText = "$" + 220 * x;
		document.getElementById("Expansion").innerText = "$" + 100 * x;
		document.getElementById("pta").innerText = "$" + 20;
		document.getElementById("Discount").innerText = "$" + 0;
		document.getElementById("result").innerText = "$" + cost;
		if (year > schoolYear || (year == schoolYear && month > 8)) {
			document.getElementById("LateFee").innerText = "$" + 50;
			var val = parseInt(
				document.getElementById("result").innerText.replace("$", "")
			);
			document.getElementById("result").innerText = "$" + (val + 50);
		} else {
			document.getElementById("LateFee").innerText = "$" + 0;
		}
	}
	// document.getElementById("costTable").style.display = "block";
}

// uncomment lines 17-30, 51 from index.php
// uncomment the following lines
// document.addEventListener("DOMContentLoaded", (event) => {
// 	document.getElementById("cover").style.animation = "spiral 2s forwards";
// 	setTimeout(() => {
// 		document.getElementById("content").style.visibility = "visible";
// 	}, 2000); // Show content after 2.5 seconds
// });
