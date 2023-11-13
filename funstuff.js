

// parent1Lname = false;
// parent1Email = false;
// parent1EmailConfirmed = false;
// parent1Phone = false;
// parent2Fname = false;
// parent2Lname = false;
// parent2Email = false;
// parent2EmailConfirmed = false;
// parent2Phone = false;
// streetAddress = false;
// city = false;
// state = false;
// zip = false;
// enrollmentDay = false;
// childrenEnrolled = false;

/*
// get the input fields and the parent element
var f1name = document.getElementById('f1name');
var m1name = document.getElementById('m1name');
var l1name = document.getElementById('l1name');
var email1 = document.getElementById('email1');
var email_confirmed1 = document.getElementById('email_confirmed1');
var phone_number1 = document.getElementById('phone_number1');
var parentinfo1 = document.getElementById('parentinfo1');

// create an array of the required fields
var requiredFields = [f1name, l1name, email1, email_confirmed1, phone_number1];

// function to check if all required fields are filled out
function checkFields() {
  for (var i = 0; i < requiredFields.length; i++) {
    if (requiredFields[i].value === '') {
      parentinfo1.style.border = '2px solid rgba(160, 15, 15, 0.806)';
      return;
    }
  }
  parentinfo1.style.border = '2px solid green';
}

// add event listeners to the fields
for (var i = 0; i < requiredFields.length; i++) {
  requiredFields[i].addEventListener('input', checkFields);
}
*/

function showMessage(paymentOption) {
    // Hide all messages
    document.getElementById('payment-message-ccfa').style.display = 'none';
    document.getElementById('payment-message-cc').style.display = 'none';

    // Show the selected message
    document.getElementById('payment-message-' + paymentOption).style.display = 'block';
}   



// Fills the information for Parent 2 (if single parent)
function fillParent2Info() {
    if (document.getElementById('sameAsParent1').checked) {
        document.getElementById('f2name').value = document.getElementById('f1name').value;
        checkparent2Fname()
        document.getElementById('m2name').value = document.getElementById('m1name').value;
        document.getElementById('l2name').value = document.getElementById('l1name').value;
        checkparent2Lname()
        document.getElementById('email2').value = document.getElementById('email1').value;
        checkEmails2()
        document.getElementById('email_confirmed2').value = document.getElementById('email_confirmed1').value;
        checkEmails2()
        document.getElementById('phone_number2').value = phoneFormat2(document.getElementById('phone_number1').value);
        
    } else {
        document.getElementById('f2name').value = '';
        checkparent2Fname()
        document.getElementById('m2name').value = '';
        document.getElementById('l2name').value = '';
        checkparent2Lname()
        document.getElementById('email2').value = '';
        checkEmails2()
        document.getElementById('email_confirmed2').value = '';
        checkEmails2()
        document.getElementById('phone_number2').value = '';
        phoneFormat2('')
    }
}




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

function showChildren() {
    var numChildren = document.getElementById('childrenenrolled').value;
    var fields = ['Fname', 'Lname', 'DOB', 'Gender', 'Grade', 'Allergies', 'Needs'];
    
    for (var i = 1; i <= 6; i++) {
        // Hide all children divs initially
        document.getElementById('child' + i).style.display = 'none';
        
        // Remove 'required' attribute from all fields
        fields.forEach(function(field) {
            document.getElementById('child' + field + i).removeAttribute('required');
        });
    }
    
    for (var i = 1; i <= numChildren; i++) {
        // Show the selected number of child divs
        document.getElementById('child' + i).style.display = 'block';
        
        // Add 'required' attribute to necessary fields
        ['Fname', 'Lname', 'DOB', 'Gender', 'Grade'].forEach(function(field) {
            document.getElementById('child' + field + i).setAttribute('required', '');
        });
    }
}



paypal.Buttons({
    style : {
        width: '50%'
    },
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units : [{
                amount: {
                    value: '1000.00'
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            console.log(details)
            // Replace the div with a successful payment message
            document.getElementById('paypal-payment-button').innerHTML = '<div style="color:green;">Successful payment</div>';
        })
    },
    onCancel: function (data) {
        // Show an error message in the hidden div and make it visible
        var errorMessageDiv = document.getElementById('error-message');
        errorMessageDiv.innerHTML = 'Payment was not successful. Please try again.';
        errorMessageDiv.style.display = 'block';
    }
}).render('#paypal-payment-button');


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('cover').style.animation = 'spiral 2s forwards';
    setTimeout(() => {
        document.getElementById('content').style.visibility = 'visible';
    }, 2000); // Show content after 2.5 seconds
});




/*
Modify this code so that for the number of children that are displayed (child1, child2, etc).  
function showChildren() {
for (var i = 1; i <= 6; i++) {
document.getElementById('cf' + i + 'name').removeAttribute('required');
document.getElementById('cl' + i + 'name').removeAttribute('required');
document.getElementById('bod' + i).removeAttribute('required');
document.getElementById('gender' + i).removeAttribute('required');
document.getElementById('grade' + i).removeAttribute('required');
// document.getElementById('allergies' + i).removeAttribute('required');
// document.getElementById('needs' + i).removeAttribute('required');
}

var numChildren = document.getElementById('childrenenrolled').value;

document.getElementById('child1').style.display = 'none';
document.getElementById('child2').style.display = 'none';
document.getElementById('child3').style.display = 'none';
document.getElementById('child4').style.display = 'none';
document.getElementById('child5').style.display = 'none';
document.getElementById('child6').style.display = 'none';

// Show the selected number of child divs
for (var i = 1; i <= numChildren; i++) {
// console.log(i);
document.getElementById('child' + i).style.display = 'block';
// document.getElementById('cf' + i + 'name').setAttribute('required', '');
document.getElementById('cl' + i + 'name').setAttribute('required', '');
document.getElementById('bod' + i).setAttribute('required', '');
document.getElementById('gender' + i).setAttribute('required', '');
document.getElementById('grade' + i).setAttribute('required', '');
// document.getElementById('allergies' + i).setAttribute('required', '');
// document.getElementById('needs' + i).setAttribute('required', '');
}
}

it will attempt to mimic the logic behind this code:
var enrollmentChildren = document.getElementById('childrenenrolled');
function checkEnrollmentChildren(){
if (enrollmentChildren.value === '') {
enrollmentChildren.style.border = '2px solid rgba(160, 15, 15, 0.806)';
childrenEnrolled = false;
checkVariables();
} else {
enrollmentChildren.style.border = '2px solid green';
childrenEnrolled = true;
checkVariables();
}
}
enrollmentChildren.addEventListener('input', checkEnrollmentChildren);

but in a more efficient way
*/