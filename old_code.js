/*


// function showChildren() {
//     var numChildren = document.getElementById('childrenenrolled').value;
//     for (var i = 1; i <= 6; i++) {
//         document.getElementById('childFname'    + i).removeAttribute('required');
//         document.getElementById('childLname'    + i).removeAttribute('required');
//         document.getElementById('childDOB'      + i).removeAttribute('required');
//         document.getElementById('childGender'   + i).removeAttribute('required');
//         document.getElementById('childGrade'    + i).removeAttribute('required');
//         document.getElementById('childAllergies'+ i).removeAttribute('required');
//         document.getElementById('childNeeds'    + i).removeAttribute('required');
//     }
//     document.getElementById('child1').style.display = 'none';
//     document.getElementById('child2').style.display = 'none';
//     document.getElementById('child3').style.display = 'none';
//     document.getElementById('child4').style.display = 'none';
//     document.getElementById('child5').style.display = 'none';
//     document.getElementById('child6').style.display = 'none';
//     // Show the selected number of child divs
//     for (var i = 1; i <= numChildren; i++) {
//         // console.log(i);
//         document.getElementById('child'         + i).style.display = 'block';
//         document.getElementById('childFname'    + i).setAttribute('required', '');
//         document.getElementById('childLname'    + i).setAttribute('required', '');
//         document.getElementById('childDOB'      + i).setAttribute('required', '');
//         document.getElementById('childGender'   + i).setAttribute('required', '');
//         document.getElementById('childGrade'    + i).setAttribute('required', '');
//     }
// }


// function showChildren() {
//     var numChildren = document.getElementById('childrenenrolled').value;

//     // Loop over all children
//     for (var i = 1; i <= 6; i++) {
//         var displayValue = i <= numChildren ? 'block' : 'none';
//         var requiredValue = i <= numChildren ? '' : null;

//         // Update display and required attributes based on the number of children
//         var childElement = document.getElementById('child' + i);
//         childElement.style.display = displayValue;
//         if (requiredValue === null) {
//             childElement.removeAttribute('required');
//         }else{
//             childElement.setAttribute('required', '');
//         }
//         // Define required elements
//         var requiredElements = ['cf' + i + 'name', 'cl' + i + 'name', 'bod' + i, 'gender' + i, 'grade' + i];

//         // Loop over required elements
//         for (var j = 0; j < requiredElements.length; j++) {
//             var requiredElement = document.getElementById(requiredElements[j]);

//             // Add event listener to change border color based on input
//             requiredElement.addEventListener('input', function() {
//                 var borderColor = this.value ? '2px solid green' : '2px solid rgba(160, 15, 15, 0.806)';
//                 this.style.border = borderColor;
//             });
//         }
//     }
// }
*/

// function showChildren() {
//     var numChildren = document.getElementById('childrenenrolled').value;
//     var fields = ['Fname', 'Lname', 'DOB', 'Gender', 'Grade', 'Allergies', 'Needs'];

//     for (var i = 1; i <= 6; i++) {
//         // Hide all children divs initially
//         document.getElementById('child' + i).style.display = 'none';

//         // Remove 'required' attribute from all fields
//         fields.forEach(function(field) {
//             document.getElementById('child' + field + i).removeAttribute('required');
//         });
//     }

//     for (var i = 1; i <= numChildren; i++) {
//         // Show the selected number of child divs
//         document.getElementById('child' + i).style.display = 'block';

//         // Add 'required' attribute to necessary fields
//         ['Fname', 'Lname', 'DOB', 'Gender', 'Grade'].forEach(function(field) {
//             document.getElementById('child' + field + i).setAttribute('required', '');
//         });
//     }
// }

// function showChildren() {
// var numChildren = document.getElementById('childrenenrolled').value;
// var fields = ['Fname', 'Lname', 'DOB', 'Gender', 'Grade', 'Allergies', 'Needs'];
// for (var i = 1; i <= 6; i++) {
// document.getElementById('child' + i).style.display = 'none';
// fields.forEach(function(field) {
// var elem = document.getElementById('child' + field + i);
// elem.removeAttribute('required');
// elem.removeEventListener('focus', check_Field_Children);
// elem.removeEventListener('input', check_Field_Children);
// });
// }
// for (var i = 1; i <= numChildren; i++) {
// document.getElementById('child' + i).style.display = 'block';
// ['Fname', 'Lname', 'DOB', 'Gender', 'Grade'].forEach(function(field) {
// var elem = document.getElementById('child' + field + i);
// elem.setAttribute('required', '');
// elem.addEventListener('focus', check_Field_Children);
// elem.addEventListener('input', check_Field_Children);
// });
// ['Mname', 'Allergies', 'Needs'].forEach(function(field) {
// var elem = document.getElementById('child' + field + i);
// elem.addEventListener('focus', function() {
// this.style.border = '2px solid green';
// });
// });
// }
// }

// // Parent 1 - Email
// var email1 = document.getElementById('email1');
// var email_confirm1 = document.getElementById('email_confirmed1');
// function checkEmails() {
//     var email = document.getElementById('email1').value;
//     var confirmedEmail = document.getElementById('email_confirmed1').value;
//     var emailField1 = document.getElementById('email1');
//     var emailField = document.getElementById('email_confirmed1');
//     var icon1 = document.getElementById('icon1');
//     var icon2 = document.getElementById('icon2');

//     // Create a RegExp object with your regex
//     var regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$');

//     // Check if the emails match and if they match the regex
//     if (email != confirmedEmail || !regex.test(email) || !regex.test(confirmedEmail)) {
//         // Set the border and background color to red
//         emailField.style.borderColor = 'red';
//         emailField1.style.borderColor = 'red';
//         emailField.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
//         emailField1.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
//         icon1.className = 'bx bx-x bx-flashing';
//         icon2.className = 'bx bx-x bx-flashing';
//         parent1Email = false;
//         parent1EmailConfirmed = false;
//         checkVariables();
//     } else {
//         emailField.style.borderColor = 'green';
//         emailField.style.backgroundColor = 'transparent';
//         emailField1.style.borderColor = 'green';
//         emailField1.style.backgroundColor = 'transparent';
//         icon1.className = 'bx bxs-envelope';
//         icon2.className = 'bx bxs-envelope';
//         parent1Email = true;
//         parent1EmailConfirmed = true;
//         checkVariables();
//     }
// }
// email1.addEventListener('focus', checkEmails);
// email_confirm1.addEventListener('focus', checkEmails);

// Parent 1 - Phone
// var phone1 = document.getElementById('phone_number1');

// phone1.addEventListener('focus', phoneFormat1);

// // Parent 2 - Email
// var email2 = document.getElementById('email2');
// var email_confirm2 = document.getElementById('email_confirmed2');
// function checkEmails2() {
//     var email = document.getElementById('email2').value;
//     var confirmedEmail = document.getElementById('email_confirmed2').value;
//     var emailField1 = document.getElementById('email2');
//     var emailField = document.getElementById('email_confirmed2');
//     var icon1 = document.getElementById('icon12');
//     var icon2 = document.getElementById('icon22');

//     // Create a RegExp object with your regex
//     var regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$');

//     // Check if the emails match and if they match the regex
//     if (email != confirmedEmail || !regex.test(email) || !regex.test(confirmedEmail)) {
//         // Set the border and background color to red
//         emailField.style.borderColor = 'red';
//         emailField1.style.borderColor = 'red';
//         emailField.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
//         emailField1.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
//         icon1.className = 'bx bx-x bx-flashing';
//         icon2.className = 'bx bx-x bx-flashing';
//         parent2Email = false;
//         parent2EmailConfirmed = false;
//         checkVariables();
//     } else {
//         emailField.style.borderColor = 'green';
//         emailField.style.backgroundColor = 'transparent';
//         emailField1.style.borderColor = 'green';
//         emailField1.style.backgroundColor = 'transparent';
//         icon1.className = 'bx bxs-envelope';
//         icon2.className = 'bx bxs-envelope';
//         parent2Email = true;
//         parent2EmailConfirmed = true;
//         checkVariables();
//     }
// }
// email2.addEventListener('focus', checkEmails2);
// email_confirm2.addEventListener('focus', checkEmails2);

// old code in checkEmail at the end:

// if (email != confirmedEmail ) {
//     // Set the border and background color to red
//     emailField.style.borderColor = 'red';
//     emailField1.style.borderColor = 'red';
//     emailField.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
//     emailField1.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
//     icon1.className = 'bx bx-x bx-flashing';
//     icon2.className = 'bx bx-x bx-flashing';
//     window[parentEmailVar] = false;
//     window[parentEmailConfirmedVar] = false;
//     checkVariables();
// }else if (!regex.test(email) || !regex.test(confirmedEmail)){
//     emailField.style.borderColor = 'red';
//     emailField1.style.borderColor = 'red';
//     emailField.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
//     emailField1.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
//     icon1.className = 'bx bx-x bx-flashing';
//     icon2.className = 'bx bx-x bx-flashing';
//     window[parentEmailVar] = false;
//     window[parentEmailConfirmedVar] = false;
//     checkVariables();
// }else {

// }
