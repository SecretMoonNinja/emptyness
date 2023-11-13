<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ISCJ WES Registration</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <script src="funstuff.js"></script>
    <script src="fieldconfirmations.js"></script>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <style>
        #cover {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('./ISCJWES3.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        #content {
            visibility: hidden;
        }

        @keyframes spiral {
            0% {
                transform: rotate(0deg) scale(1);
                opacity: 1;
            }
            30% {
                transform: rotate(0deg) scale(1);
                opacity: 1;
            }
            100% {
                transform: rotate(720deg) scale(0);
                opacity: 0;
                visibility: hidden;
            }
        }
    </style>
</head>

<body>
    <div id="cover" ></div>

    <div id="content" class="wrapper">
        <form 
        action="https://script.google.com/macros/s/AKfycbzF3R90P5dLlHdO4jBFKneB1h_1zRKWdAkNiL3jjAjBQF0uoQE-v3ObNJrSEJ2BvFvdMw/exec" 
        method="post">
            <h1>ISCJ Weekend School Registration</h1>
            <p>Welcome to the annual enrollment for the ISCJ Weekend School. Our school strives to cultivate 
                in our students a genuine regard for our faith, values, and our community. Our mission is to 
                impart Islamic knowledge and values in our children and to foster one central community environment 
                for our students, teachers, and their families. Please fill out the form below in its entirety. 
                Our admissions costs have changed slightly, and 
                <a href="https://www.iscjwes.org/costs.html">we encourage you to visit our admissions page to understand the 
                breakdown of the fee structure.</a> 
                Note that incoming kindergarteners must be at least 5 years old by Dec 31, 2023 InshaAllah.
                </p>
            <br>
            <hr>
            <br>
            
            <details id="parentinfo1" class="info">
                <summary>
                    <div style="display: flex; align-items: center;">
                        <i id="accordian_arrow" class='bx bxs-down-arrow bx-tada'></i>
                        <h2 style="display: inline;">Parent 1 Information: <span class="required">*</span></h2>
                    </div>
                </summary>
                <h3>Name:</h3>
                <div class="input-box">
                    <div class="input-field">
                        <input type="text" placeholder="First Name" id="f1name" name="f1name" required ">
                        <label for="f1name">First Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Middle Name" id="m1name" name="m1name">
                        <label for="m1name">Middle Name</label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Last Name" id="l1name" name="l1name" required>
                        <label for="l1name">Last Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                </div>

                <br>
                <h3>Contact Info:</h3>
                <div class="input-box">
                    <div class="input-field">
                        <input type="email" placeholder="Email" id="email1" name="email1" required oninput="checkEmails()">
                        <label for="email1">E-mail <span class="required">*</span></label>
                        <i id="icon1" class='bx bxs-envelope'></i>
                    </div>
                    <div class="input-field">
                        <input type="email" placeholder="Confirm Email" id="email_confirmed1" name="email_confirmed1" required oninput="checkEmails()">
                        <label for="email_confirmed1">Comfirm Email <span class="required">*</span></label>
                        <i id="icon2" class='bx bxs-envelope'></i>
                    </div>
                    <div class="input-field">
                        <input type="tel" onfocus="this.value = phoneFormat1(this.value)" placeholder="Phone Number" id="phone_number1" name="phone_number1" required>
                        <label for="phone_number1">Phone Number <span class="required">*</span></label>
                        <i id="phone1" class='bx bxs-phone'></i>
                    </div>
                </div>
                <br>
            </details>
            <hr>
            <br>

            <details id="parentinfo2" class="info">
                <summary>
                    <div style="display: flex; align-items: center;">
                        <i id="accordian_arrow" class='bx bxs-down-arrow bx-tada'></i>
                        <h2 style="display: inline;">Parent 2 Information: <span class="required">*</span></h2>
                    </div>
                </summary>
                <input type="checkbox" id="sameAsParent1" onclick="fillParent2Info()">
                <label for="sameAsParent1" style="color: #7c0000;font-weight: normal;">In case of a single parent, please check this box to reiterate Parent 1 Information</label>
                <h3>Name:</h3>
                <div class="input-box">
                    <div class="input-field">
                        <input type="text" placeholder="First Name" id="f2name" name="f2name" required>
                        <label for="f2name">First Name <span class="required">*</span></label>
                        <!-- <input type="hidden" id="f2nameHidden" name="f2nameHidden"> -->
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Middle Name" id="m2name" name="m2name">
                        <label for="m2name">Middle Name</label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Last Name" id="l2name" name="l2name" required>
                        <label for="l2name">Last Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                </div>
                <br>
                <h3>Contact Info:</h3>
                <div class="input-box">
                    <div class="input-field">
                        <input type="email" placeholder="Email" id="email2" name="email2" required oninput="checkEmails2()">
                        <label for="email2">E-mail <span class="required">*</span></label>
                        <i id="icon12" class='bx bxs-envelope'></i>
                    </div>
                    <div class="input-field">
                        <input type="email" placeholder="Confirm Email" id="email_confirmed2" name="email_confirmed2" required oninput="checkEmails2()">
                        <label for="email_confirmed2">Comfirm Email <span class="required">*</span></label>
                        <i id="icon22" class='bx bxs-envelope'></i>
                    </div>
                    <div class="input-field">
                        <input type="tel" onInput="this.value = phoneFormat2(this.value)" placeholder="Phone Number" id="phone_number2" name="phone_number2" required >
                        <label for="phone_number2">Phone Number<span class="required">*</span></label>
                        <i id="phone2" class='bx bxs-phone'></i>
                    </div>
                </div>
                <br>
            </details>
            <hr>
            <br>
            
            <details id="mailing_address" class="info">
                <summary>
                    <div style="display: flex; align-items: center;">
                        <i id="accordian_arrow" class='bx bxs-down-arrow bx-tada'></i>
                        <h2 style="display: inline;">Mailing Address: <span class="required">*</span></h2>
                    </div>
                </summary>

                <div class="input-box">
                    <div class="input-field">
                        <input type="text" placeholder="Street Address" id="street_address" name="street_address" required>
                        <label for="street_address">Street Address <span class="required">*</span></label>
                        <i class='bx bxs-home-alt-2'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Street Address Line 2" id="street_address2" name="street_address2">
                        <label for="street_address2">Street Address Line 2</label>
                        <i class='bx bxs-home-alt-2'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="City" id="city" name="city" required>
                        <label for="city">City <span class="required">*</span></label>
                        <i class='bx bxs-city'></i>
                    </div>
                    <!-- <div class="input-field">
                        <input type="text" placeholder="State" id="state" name="state" required>
                        <label for="state">State</label>
                        <i class='bx bx-chevron-down' ></i>
                        <i class='bx bxs-city'></i>
                    </div> -->
                    <div class="input-field">
                        <select id="state" name="state" required>
                            <option disabled>Select</option>
                            <option value="NJ">New Jersey</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="NY">New York</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            
                            <option value="NM">New Mexico</option>
                            
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                            <option value="AS">American Samoa</option>
                            <option value="GU">Guam</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="UM">United States Minor Outlying Islands</option>
                            <option value="VI">Virgin Islands</option>
                        </select>     
                        <label for="state">State <span class="required">*</span></label>
                    </div>

                    <div class="input-field">
                        <input type="text" placeholder="Zip Code" id="zipcode" name="zipcode" required>
                        <label for="zipcode">Zip Code <span class="required">*</span></label>
                        <i class='bx bx-map-pin'></i>
                    </div>
                </div>
                <br>
            </details>
            <hr>
            <br>

            <details id="enrollment" class="info">
                <summary>
                    <div style="display: flex; align-items: center;">
                        <i id="accordian_arrow" class='bx bxs-down-arrow bx-tada'></i>
                        <h2 style="display: inline;">Enrollment: <span class="required">*</span></h2>
                    </div>
                </summary>
                <div class="input-box">
                    <div class="input-field">
                        <h4>Choose Enrollment Day: <span class="required">*</span></h4>
                        <select id="enrollmentday" name="enrollmentday" required>
                            <option value="" disabled selected>Please Select</option>
                            <option value="saturday">Saturday</option>
                            <option value="sunday">Sunday</option>
                        </select>    
                    </div>
                    <div class="input-field">
                        <!--  for 2023-2024 school year -->
                        <h4>Children to enroll? <span class="required">*</span></h4>
                        <select id="childrenenrolled" name="childrenenrolled" required onchange="showChildren()">
                            <option value="" disabled selected >Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>    
                        <p style="font-size: 10px">ALL children being enrolled MUST be part of the same household.</p>
                        <br>
                    </div>
                </div>
                <br><br>
            </details>

            <details id="child1" class="children">
                <summary>
                    <div style="display: flex; align-items: center;">
                        <i id="accordian_arrow" class='bx bxs-down-arrow bx-tada'></i>
                        <h2 style="display: inline;">Child 1 Information: <span class="required">*</span></h2>
                    </div>
                </summary>
                <h4>Name:</h4>
                <div class="input-box">
                    <div class="input-field">
                        <input type="text" placeholder="First Name" id="childFname1" name="childFname1" required ">
                        <label for="childFname1">First Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Middle Name" id="childMname1" name="childMname1">
                        <label for="childMname1">Middle Name</label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Last Name" id="childLname1" name="childLname1" required>
                        <label for="childLname1">Last Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                </div>
                <div class="input-box">
                    <div class="input-field">
                        <h4>Date of Birth: <span class="required">*</span></h4>
                        <input style="padding-left: 15px;" type="date" id="childDOB1" name="childDOB1">
                    </div>
                    <div class="input-field">
                        <h4>Gender: <span class="required">*</span></h4>
                        <select id="childGender1" name="childGender1" required>
                            <option value="" disabled selected>Please Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div class="input-field">
                        <br>
                        <h4>Grade in 2023-2024: <span class="required">*</span></h4>
                        <select id="childGrade1" name="childGrade1" required>
                            <option value="" disabled selected>Please Select</option>
                            <option value="KG">KG</option>
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
                        <input style="padding-left: 15px;" type="text" placeholder="Allergies" id="childAllergies1" name="childAllergies1" >
                        <label for="childAllergies1">Do not enter anything if none</label>
                    </div>
                    
                    <div class="input-field">
                        <br><br>
                        <h4>Enter Special Needs If Any:</h4>
                        <input style="padding-left: 15px;" type="text" placeholder="Special Needs" id="childNeeds1" name="childNeeds1" >
                        <label for="childNeeds1">Do not enter anything if none</label>
                    </div>
                </div>
                <br><br><br>
                <br><hr><br>
            </details>

            <details id="child2" class="children">
                <summary>
                    <div style="display: flex; align-items: center;">
                        <i id="accordian_arrow" class='bx bxs-down-arrow bx-tada'></i>
                        <h2 style="display: inline;">Child 2 Information: <span class="required">*</span></h2>
                    </div>
                </summary>
                <h4>Name:</h4>
                <div class="input-box">
                    <div class="input-field">
                        <input type="text" placeholder="First Name" id="childFname2" name="childFname2" required ">
                        <label for="childFname2">First Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Middle Name" id="childMname2" name="childMname2">
                        <label for="childMname2">Middle Name</label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Last Name" id="childLname2" name="childLname2" required>
                        <label for="childLname2">Last Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                </div>
                <div class="input-box">
                    <div class="input-field">
                        <h4>Date of Birth: <span class="required">*</span></h4>
                        <input style="padding-left: 15px;" type="date" id="childDOB2" name="childDOB2">
                    </div>
                    <div class="input-field">
                        <h4>Gender: <span class="required">*</span></h4>
                        <select id="childGender2" name="childGender2" required>
                            <option value="" disabled selected>Please Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div class="input-field">
                        <br>
                        <h4>Grade in 2023-2024: <span class="required">*</span></h4>
                        <select id="childGrade2" name="childGrade2" required>
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
                        <input style="padding-left: 15px;" type="text" placeholder="Allergies" id="childAllergies2" name="childAllergies2" >
                        <label for="childAllergies2">Do not enter anything if none</label>
                    </div>
                    
                    <div class="input-field">
                        <br><br>
                        <h4>Enter Special Needs If Any:</h4>
                        <input style="padding-left: 15px;" type="text" placeholder="Special Needs" id="childNeeds2" name="childNeeds2" >
                        <label for="childNeeds2">Do not enter anything if none</label>
                    </div>
                </div>
                <br><br><br>
                <br><hr><br>
            </details>

            <details id="child3" class="children">
                <summary>
                    <div style="display: flex; align-items: center;">
                        <i id="accordian_arrow" class='bx bxs-down-arrow bx-tada'></i>
                        <h2 style="display: inline;">Child 3 Information: <span class="required">*</span></h2>
                    </div>
                </summary>
                <h4>Name:</h4>
                <div class="input-box">
                    <div class="input-field">
                        <input type="text" placeholder="First Name" id="childFname3" name="childFname3" required ">
                        <label for="childFname3">First Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Middle Name" id="childMname3" name="childMname3">
                        <label for="childMname3">Middle Name</label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Last Name" id="childLname3" name="childLname3" required>
                        <label for="childLname3">Last Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                </div>
                <div class="input-box">
                    <div class="input-field">
                        <h4>Date of Birth: <span class="required">*</span></h4>
                        <input style="padding-left: 15px;" type="date" id="childDOB3" name="childDOB3">
                    </div>
                    <div class="input-field">
                        <h4>Gender: <span class="required">*</span></h4>
                        <select id="childGender3" name="childGender3" required>
                            <option value="" disabled selected>Please Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div class="input-field">
                        <br>
                        <h4>Grade in 2023-2024: <span class="required">*</span></h4>
                        <select id="childGrade3" name="childGrade3" required>
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
                        <input style="padding-left: 15px;" type="text" placeholder="Allergies" id="childAllergies3" name="childAllergies3" >
                        <label for="childAllergies3">Do not enter anything if none</label>
                    </div>
                    
                    <div class="input-field">
                        <br><br>
                        <h4>Enter Special Needs If Any:</h4>
                        <input style="padding-left: 15px;" type="text" placeholder="Special Needs" id="childNeeds3" name="childNeeds3" >
                        <label for="childNeeds3">Do not enter anything if none</label>
                    </div>
                </div>
                <br><br><br>
                <br><hr><br>
            </details>
  
            <details id="child4" class="children">
                <summary>
                    <div style="display: flex; align-items: center;">
                        <i id="accordian_arrow" class='bx bxs-down-arrow bx-tada'></i>
                        <h2 style="display: inline;">Child 4 Information: <span class="required">*</span></h2>
                    </div>
                </summary>
                <h4>Name:</h4>
                <div class="input-box">
                    <div class="input-field">
                        <input type="text" placeholder="First Name" id="childFname4" name="childFname4" required ">
                        <label for="childFname4">First Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Middle Name" id="childMname4" name="childMname4">
                        <label for="childMname4">Middle Name</label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Last Name" id="childLname4" name="childLname4" required>
                        <label for="childLname4">Last Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                </div>
                <div class="input-box">
                    <div class="input-field">
                        <h4>Date of Birth: <span class="required">*</span></h4>
                        <input style="padding-left: 15px;" type="date" id="childDOB4" name="childDOB4">
                    </div>
                    <div class="input-field">
                        <h4>Gender: <span class="required">*</span></h4>
                        <select id="childGender4" name="childGender4" required>
                            <option value="" disabled selected>Please Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div class="input-field">
                        <br>
                        <h4>Grade in 2023-2024: <span class="required">*</span></h4>
                        <select id="childGrade4" name="childGrade4" required>
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
                        <input style="padding-left: 15px;" type="text" placeholder="Allergies" id="childAllergies4" name="childAllergies4" >
                        <label for="childAllergies4">Do not enter anything if none</label>
                    </div>
                    
                    <div class="input-field">
                        <br><br>
                        <h4>Enter Special Needs If Any:</h4>
                        <input style="padding-left: 15px;" type="text" placeholder="Special Needs" id="childNeeds4" name="childNeeds4" >
                        <label for="childNeeds4">Do not enter anything if none</label>
                    </div>
                </div>
                <br><br><br>
                <br><hr><br>
            </details>

            <details id="child5" class="children">
                <summary>
                    <div style="display: flex; align-items: center;">
                        <i id="accordian_arrow" class='bx bxs-down-arrow bx-tada'></i>
                        <h2 style="display: inline;">Child 5 Information: <span class="required">*</span></h2>
                    </div>
                </summary>
                <h4>Name:</h4>
                <div class="input-box">
                    <div class="input-field">
                        <input type="text" placeholder="First Name" id="childFname5" name="childFname5" required ">
                        <label for="childFname5">First Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Middle Name" id="childMname5" name="childMname5">
                        <label for="childMname5">Middle Name</label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Last Name" id="childLname5" name="childLname5" required>
                        <label for="childLname5">Last Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                </div>
                <div class="input-box">
                    <div class="input-field">
                        <h4>Date of Birth: <span class="required">*</span></h4>
                        <input style="padding-left: 15px;" type="date" id="childDOB5" name="childDOB5">
                    </div>
                    <div class="input-field">
                        <h4>Gender: <span class="required">*</span></h4>
                        <select id="childGender5" name="childGender5" required>
                            <option value="" disabled selected>Please Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div class="input-field">
                        <br>
                        <h4>Grade in 2023-2024: <span class="required">*</span></h4>
                        <select id="childGrade5" name="childGrade5" required>
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
                        <input style="padding-left: 15px;" type="text" placeholder="Allergies" id="childAllergies5" name="childAllergies5" >
                        <label for="childAllergies5">Do not enter anything if none</label>
                    </div>
                    
                    <div class="input-field">
                        <br><br>
                        <h4>Enter Special Needs If Any:</h4>
                        <input style="padding-left: 15px;" type="text" placeholder="Special Needs" id="childNeeds5" name="childNeeds5" >
                        <label for="childNeeds5">Do not enter anything if none</label>
                    </div>
                </div>
                <br><br><br>
                <br><hr><br>
            </details>

            <details id="child6" class="children">
                <summary>
                    <div style="display: flex; align-items: center;">
                        <i id="accordian_arrow" class='bx bxs-down-arrow bx-tada'></i>
                        <h2 style="display: inline;">Child 6 Information: <span class="required">*</span></h2>
                    </div>
                </summary>
                <h4>Name:</h4>
                <div class="input-box">
                    <div class="input-field">
                        <input type="text" placeholder="First Name" id="childFname6" name="childFname6" required ">
                        <label for="childFname6">First Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Middle Name" id="childMname6" name="childMname6">
                        <label for="childMname6">Middle Name</label>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Last Name" id="childLname6" name="childLname6" required>
                        <label for="childLname6">Last Name <span class="required">*</span></label>
                        <i class='bx bxs-user'></i>
                    </div>
                </div>
                <div class="input-box">
                    <div class="input-field">
                        <h4>Date of Birth: <span class="required">*</span></h4>
                        <input style="padding-left: 15px;" type="date" id="childDOB6" name="childDOB6">
                    </div>
                    <div class="input-field">
                        <h4>Gender: <span class="required">*</span></h4>
                        <select id="childGender6" name="childGender6" required>
                            <option value="" disabled selected>Please Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div class="input-field">
                        <br>
                        <h4>Grade in 2023-2024: <span class="required">*</span></h4>
                        <select id="childGrade6" name="childGrade6" required>
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
                        <input style="padding-left: 15px;" type="text" placeholder="Allergies" id="childAllergies6" name="childAllergies6" >
                        <label for="childAllergies6">Do not enter anything if none</label>
                    </div>
                    
                    <div class="input-field">
                        <br><br>
                        <h4>Enter Special Needs If Any:</h4>
                        <input style="padding-left: 15px;" type="text" placeholder="Special Needs" id="childNeeds6" name="childNeeds6" >
                        <label for="childNeeds6">Do not enter anything if none</label>
                    </div>
                </div>
                <br><br><br>
                <br><hr><br>
            </details>
            <hr>
            <br>

            <details id="payment" class="info">
                <summary>
                    <div style="display: flex; align-items: center;">
                        <i id="accordian_arrow" class='bx bxs-down-arrow bx-tada'></i>
                        <h2 style="display: inline;">Payment Options: <span class="required">*</span></h2>
                    </div>
                </summary>
                <br>
                <div class="input-box">
                    <div class="radio-field">
                        <input type="radio" id="ccfa" name="payment" value="ccfa" required onclick="showMessage('ccfa')">
                        <label for="ccfa">Check/Cash/Financial Aid</label>
                        <br><input type="radio" id="cc" name="payment" value="cc" onclick="showMessage('cc')">
                        <label for="cc">Credit Card</label>
                    </div>
                </div>


                <div id="payment-message-ccfa" style="display: none;">
                    <br>
                    <hr>
                    <h4>Payment</h4>
                    <p>Registration will only be considered completed once the check or cash has been received by Weekend School Office Administration located in the Main School building or the ISCJ Office in the Masjid.  In case you are applying for Financial Aid, please reach out to <a href="admin@iscjwes.org ">admin@iscjwes.org</a> after completing this form.</p>
                </div>
                <div id="payment-message-cc" style="display: none;">
                    <br>    
                    <hr>
                    <h4>Payment</h4>
                    <div class="payments">
                        <div id="paypal-payment-button"></div>
                        <!-- Hidden div for error message -->
                        <div id="error-message" style="display: none; color: red; text-align: center"></div>
                    </div>
                </div>
            </details>

            
            <br><br>
            <hr>
            <div class="input-box">
                <label><input type="checkbox" required>I have read and agree to all of the ISCJ Weekend School's <a href="https://www.iscjwes.org/terms.html">terms & conditions</a>.<span class="required">*</span></label>
                <br>
                <button type="submit" class="btn">Register</button>
            </div>
        </form>
    </div>
    <script src="https://www.paypal.com/sdk/js?client-id=AYSayFxbL3MMbp5l2l_trt4NHzHZ0OwtSk8mKM0pgasCKgo_3Iqp2dPLwkOAZJJt2tAexjpQKR3Cugba&disable-funding=card"></script>
    <script src="funstuff.js"></script>
    <script src="fieldconfirmations.js"></script>

</body>
</html>