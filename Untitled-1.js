// // var PARENT_1_CHECK        = document.getElementById('parentinfo1');
// // var PARENT_2_CHECK        = document.getElementById('parentinfo2');
// // var MAILING_CHECK         = document.getElementById('mailing_address');
// // var ENROLLMENT_CHECK      = document.getElementById('enrollment');

// // var Parent1_Info_Complete = false;
// // var Parent2_Info_Complete = false;
// // var Mailing_Info_Complete = false;

// // var parent1Fname          = false;
// // var parent1Lname          = false;
// // var parent1Email          = false;
// // var parent1EmailConfirmed = false;
// // var parent1Phone          = false;
// // var parent2Fname          = false;
// // var parent2Lname          = false;
// // var parent2Email          = false;
// // var parent2EmailConfirmed = false;
// // var parent2Phone          = false;
// // var streetAddress         = false;
// // var city                  = false;
// // var state                 = false;
// // var zip                   = false;
// // var enrollmentDay         = false;
// // var childrenEnrolled      = false;

// // // ================================================
// // // =================== PARENT 1 ===================
// // // ================================================
// // // Parent 1 - First Name
// // var f1name = document.getElementById('f1name');
// // function checkparent1Fname() {
// //     if (f1name.value === '') {
// //         f1name.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //         parent1Fname = false;
// //         checkVariables();
// //     } else {
// //         f1name.style.border = '2px solid green';
// //         parent1Fname = true;
// //         checkVariables();
// //     }
// // }
// // f1name.addEventListener('focus', checkparent1Fname);
// // f1name.addEventListener('input', checkparent1Fname);

// // // Parent 1 - Last Name
// // var f1lname = document.getElementById('l1name');
// // function checkparent1Lname() {
// //     if (f1lname.value === '') {
// //         f1lname.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //         parent1Lname = false;
// //         checkVariables();
// //     } else {
// //         f1lname.style.border = '2px solid green';
// //         parent1Lname = true;
// //         checkVariables();
// //     }
// // }
// // f1lname.addEventListener('focus', checkparent1Lname);
// // f1lname.addEventListener('input', checkparent1Lname);

// // // Parent 1 - Email
// // var email1 = document.getElementById('email1');
// // function checkEmails() {
// //     var email = document.getElementById('email1').value;
// //     var confirmedEmail = document.getElementById('email_confirmed1').value;
// //     var emailField1 = document.getElementById('email1');
// //     var emailField = document.getElementById('email_confirmed1');
// //     var icon1 = document.getElementById('icon1');
// //     var icon2 = document.getElementById('icon2');

// //     // Create a RegExp object with your regex
// //     var regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$');

// //     // Check if the emails match and if they match the regex
// //     if (email != confirmedEmail || !regex.test(email) || !regex.test(confirmedEmail)) {
// //         // Set the border and background color to red
// //         emailField.style.borderColor = 'red';
// //         emailField1.style.borderColor = 'red';
// //         emailField.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
// //         emailField1.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
// //         icon1.className = 'bx bx-x bx-flashing';
// //         icon2.className = 'bx bx-x bx-flashing';
// //         parent1Email = false;
// //         parent1EmailConfirmed = false;
// //         checkVariables();
// //     } else {
// //         emailField.style.borderColor = 'green';
// //         emailField.style.backgroundColor = 'transparent';
// //         emailField1.style.borderColor = 'green';
// //         emailField1.style.backgroundColor = 'transparent';
// //         icon1.className = 'bx bxs-envelope';
// //         icon2.className = 'bx bxs-envelope';
// //         parent1Email = true;
// //         parent1EmailConfirmed = true;
// //         checkVariables();
// //     }
// // }
// // email1.addEventListener('focus', checkEmails);

// // // Parent 1 - Phone
// // // var phone1 = document.getElementById('phone_number1');
// // function phoneFormat1(input) {
// //     // Remove all non-digit characters
// //     input = input.replace(/\D/g,'');
// //     var size = input.length;
// //     if (size>0) {input="("+input;}
// //     if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11);}
// //     if (size>6) {input=input.slice(0,9)+"-" +input.slice(9);}

// //     // Get the phone number field
// //     var phoneNumberField = document.getElementById('phone_number1');
// //     var icon1 = document.getElementById('phone1');

// //     // Create a RegExp object with your regex
// //     var regex = new RegExp('^\\(\\d{3}\\) \\d{3}-\\d{4}$');

// //     // Check if the phone number matches the regex
// //     if (!regex.test(input)) {
// //         // If it doesn't match, set the border color and background color to red
// //         phoneNumberField.style.borderColor = 'red';
// //         phoneNumberField.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
// //         icon1.className = 'bx bx-x bx-flashing';
// //         parent1Phone = false;
// //         checkVariables();
// //     } else {
// //         // If it matches, set the border color and background color to the original values
// //         phoneNumberField.style.borderColor = 'green';
// //         phoneNumberField.style.backgroundColor = 'transparent';
// //         icon1.className = 'bx bxs-phone';
// //         parent1Phone = true;
// //         checkVariables();
// //     }

// //     return input;
// // }
// // // phone1.addEventListener('focus', phoneFormat1);

// // // ================================================
// // // =================== PARENT 2 ===================
// // // ================================================
// // // Parent 2 - First Name
// // var f2name = document.getElementById('f2name');
// // function checkparent2Fname() {
// //     if (f2name.value === '') {
// //         f2name.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //         parent2Fname = false;
// //         checkVariables();
// //     }
// //     else {
// //         f2name.style.border = '2px solid green';
// //         parent2Fname = true;
// //         checkVariables();
// //     }
// // }
// // f2name.addEventListener('focus', checkparent2Fname);
// // f2name.addEventListener('input', checkparent2Fname);

// // // Parent 2 - Last Name
// // var f2lname = document.getElementById('l2name');
// // function checkparent2Lname() {
// //     if (f2lname.value === '') {
// //         f2lname.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //         parent2Lname = false;
// //         checkVariables();
// //     }
// //     else {
// //         f2lname.style.border = '2px solid green';
// //         parent2Lname = true;
// //         checkVariables();
// //     }
// // }
// // f2lname.addEventListener('focus', checkparent2Lname);
// // f2lname.addEventListener('input', checkparent2Lname);

// // // Parent 2 - Email
// // var email2 = document.getElementById('email_confirmed1');
// // function checkEmails2() {
// //     var email = document.getElementById('email2').value;
// //     var confirmedEmail = document.getElementById('email_confirmed2').value;
// //     var emailField1 = document.getElementById('email2');
// //     var emailField = document.getElementById('email_confirmed2');
// //     var icon1 = document.getElementById('icon12');
// //     var icon2 = document.getElementById('icon22');

// //     // Create a RegExp object with your regex
// //     var regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$');

// //     // Check if the emails match and if they match the regex
// //     if (email != confirmedEmail || !regex.test(email) || !regex.test(confirmedEmail)) {
// //         // Set the border and background color to red
// //         emailField.style.borderColor = 'red';
// //         emailField1.style.borderColor = 'red';
// //         emailField.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
// //         emailField1.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
// //         icon1.className = 'bx bx-x bx-flashing';
// //         icon2.className = 'bx bx-x bx-flashing';
// //         parent2Email = false;
// //         parent2EmailConfirmed = false;
// //         checkVariables();
// //     } else {
// //         emailField.style.borderColor = 'green';
// //         emailField.style.backgroundColor = 'transparent';
// //         emailField1.style.borderColor = 'green';
// //         emailField1.style.backgroundColor = 'transparent';
// //         icon1.className = 'bx bxs-envelope';
// //         icon2.className = 'bx bxs-envelope';
// //         parent2Email = true;
// //         parent2EmailConfirmed = true;
// //         checkVariables();
// //     }
// // }
// // email2.addEventListener('focus', checkEmails2);

// // // Parent 2 - Phone
// // var phone2 = document.getElementById('phone_number2');
// // function phoneFormat2(input) {
// //     // Remove all non-digit characters
// //     input = input.replace(/\D/g,'');
// //     var size = input.length;
// //     if (size>0) {input="("+input;}
// //     if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11);}
// //     if (size>6) {input=input.slice(0,9)+"-" +input.slice(9);}

// //     // Get the phone number field
// //     var phoneNumberField = document.getElementById('phone_number2');
// //     var icon2 = document.getElementById('phone2');

// //     // Create a RegExp object with your regex
// //     var regex = new RegExp('^\\(\\d{3}\\) \\d{3}-\\d{4}$');

// //     // Check if the phone number matches the regex
// //     if (!regex.test(input)) {
// //         // If it doesn't match, set the border color and background color to red
// //         phoneNumberField.style.borderColor = 'red';
// //         phoneNumberField.style.backgroundColor = 'rgba(250, 168, 178, 0.5)';
// //         icon2.className = 'bx bx-x bx-flashing';
// //         parent2Phone = false;
// //         checkVariables();
// //     } else {
// //         // If it matches, set the border color and background color to the original values
// //         phoneNumberField.style.borderColor = 'green';
// //         phoneNumberField.style.backgroundColor = 'transparent';
// //         icon2.className = 'bx bxs-phone';
// //         parent2Phone = true;
// //         checkVariables();
// //     }

// //     return input;
// // }
// // phone2.addEventListener('focus', phoneFormat2);

// // // =======================================================
// // // =================== MAILING ADDRESS ===================
// // // =======================================================
// // // Street Address
// // var street = document.getElementById('street_address');
// // function checkStreetAddress() {
// //     if (street.value === '') {
// //         street.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //         streetAddress = false;
// //         checkVariables();
// //     } else {
// //         street.style.border = '2px solid green';
// //         streetAddress = true;
// //         checkVariables();
// //     }
// // }
// // street.addEventListener('focus', checkStreetAddress);
// // street.addEventListener('input', checkStreetAddress);

// // // City
// // var city_line = document.getElementById('city');
// // function checkCity() {
// //     if (city_line.value === '') {
// //         city_line.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //         city = false;
// //         checkVariables();
// //     } else {
// //         city_line.style.border = '2px solid green';
// //         city = true;
// //         checkVariables();
// //     }
// // }
// // city_line.addEventListener('focus', checkCity);
// // city_line.addEventListener('input', checkCity);

// // // State
// // var state_line = document.getElementById('state');
// // function checkState() {
// //     if (state_line.value === '') {
// //         state_line.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //         state = false;
// //         checkVariables();
// //     } else {
// //         state_line.style.border = '2px solid green';
// //         state = true;
// //         checkVariables();
// //     }
// // }
// // state_line.addEventListener('input', checkState);

// // // Zip Code
// // var zip_line = document.getElementById('zipcode');
// // function checkZip() {
// //     if (zip_line.value === '') {
// //         zip_line.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //         zip = false;
// //         checkVariables();
// //     } else {
// //         zip_line.style.border = '2px solid green';
// //         zip = true;
// //         checkVariables();
// //     }
// // }
// // zip_line.addEventListener('focus', checkZip);
// // zip_line.addEventListener('input', checkZip);

// // // ==================================================
// // // =================== ENROLLMENT ===================
// // // ==================================================
// // // Enrollment Day
// // var enrollmentDay_Line = document.getElementById('enrollmentday');
// // function checkEnrollmentDay(){
// //     if (enrollmentDay_Line.value === '') {
// //         enrollmentDay_Line.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //         enrollmentDay = false;
// //         checkVariables();
// //     } else {
// //         enrollmentDay_Line.style.border = '2px solid green';
// //         enrollmentDay = true;
// //         checkVariables();
// //     }
// // }
// // enrollmentDay_Line.addEventListener('input', checkEnrollmentDay);

// // // Children Enrolled
// // var enrollmentChildren = document.getElementById('childrenenrolled');
// // function checkEnrollmentChildren(){
// //     if (enrollmentChildren.value === '') {
// //         enrollmentChildren.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //         childrenEnrolled = false;
// //         checkVariables();
// //     } else {
// //         enrollmentChildren.style.border = '2px solid green';
// //         childrenEnrolled = true;
// //         checkVariables();
// //     }
// // }
// // enrollmentChildren.addEventListener('input', checkEnrollmentChildren);



// // // function to check if all variables are true to turn main borders green
// // function checkVariables() {
// //     if (parent1Fname && parent1Lname && parent1Email && parent1EmailConfirmed && parent1Phone) {
// //         PARENT_1_CHECK.style.border = '2px solid green';
// //     } else {
// //         PARENT_1_CHECK.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //     }

// //     if (parent2Fname && parent2Lname && parent2Email && parent2EmailConfirmed && parent2Phone) {
// //         PARENT_2_CHECK.style.border = '2px solid green';
// //     } else {
// //         PARENT_2_CHECK.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //     }

// //     if (streetAddress && city && state && zip) {
// //         MAILING_CHECK.style.border = '2px solid green';
// //     } else {
// //         MAILING_CHECK.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //     }

// //     if (enrollmentDay && childrenEnrolled) {
// //         ENROLLMENT_CHECK.style.border = '2px solid green';
// //     } else {
// //         ENROLLMENT_CHECK.style.border = '2px solid rgba(160, 15, 15, 0.806)';
// //     }
// // }

// // // call the function initially
// // checkVariables();




// Is there any way to make this code less redundant:
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