<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>ISCJ WES Registration</title>
		<link rel="stylesheet" href="style.css" />
		<link rel="icon" type="image/x-icon" href="favicon.ico" />
		<script src="funstuff.js"></script>
		<script src="fieldconfirmations.js"></script>
		<link
			href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
			rel="stylesheet"
		/>
		<style>
			/* #cover {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url("./ISCJWES3.png");
background-size: contain;
background-repeat: no-repeat;
background-position: center;
}
#content {
visibility: hidden;
} */

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
		<!-- <div id="cover"></div> -->

		<div id="content" class="wrapper">
			<form
				action="https://script.google.com/macros/s/AKfycbzF3R90P5dLlHdO4jBFKneB1h_1zRKWdAkNiL3jjAjBQF0uoQE-v3ObNJrSEJ2BvFvdMw/exec"
				method="post"
			>
				<!-- 				<h1>ISCJ Weekend School Registration</h1> -->
				<h1>School Registration</h1>
				<p>
					Welcome to the annual enrollment for the ISCJ Weekend School. Our
					school strives to cultivate in our students a genuine regard for our
					faith, values, and our community. Our mission is to impart Islamic
					knowledge and values in our children and to foster one central
					community environment for our students, teachers, and their families.
					Please fill out the form below in its entirety. Our admissions costs
					have changed slightly, and
					<a href="https://www.iscjwes.org/costs.html"
						>we encourage you to visit our admissions page to understand the
						breakdown of the fee structure.</a
					>
					Note that incoming kindergarteners must be at least 5 years old by Dec
					31, 2024 InshaAllah.
				</p>
				<br />
				<hr />
				<br />

				<details id="parentinfo1" class="info">
					<summary>
						<div style="display: flex; align-items: center">
							<i id="accordian_arrow" class="bx bxs-down-arrow bx-tada"></i>
							<h2 style="display: inline">
								Parent 1 Information: <span class="required">*</span>
							</h2>
						</div>
					</summary>
					<h3>Name:</h3>
					<div class="input-box">
						<div class="input-field">
							<input
								type="text"
								placeholder="First Name"
								id="f1name"
								name="f1name"
								required
							/>
							<label for="f1name"
								>First Name <span class="required">*</span></label
							>
							<i class="bx bxs-user"></i>
						</div>
						<div class="input-field">
							<input
								type="text"
								placeholder="Middle Name"
								id="m1name"
								name="m1name"
							/>
							<label for="m1name">Middle Name</label>
							<i class="bx bxs-user"></i>
						</div>
						<div class="input-field">
							<input
								type="text"
								placeholder="Last Name"
								id="l1name"
								name="l1name"
								required
							/>
							<label for="l1name"
								>Last Name <span class="required">*</span></label
							>
							<i class="bx bxs-user"></i>
						</div>
					</div>

					<br />
					<h3>Contact Info:</h3>
					<div class="input-box">
						<div class="input-field">
							<input
								type="email"
								placeholder="Email"
								id="email1"
								name="email1"
								required
								oninput="checkEmails('email1', 'email_confirmed1', 'icon1', 'icon2', 'parent1Email', 'parent1EmailConfirmed')"
							/>
							<label for="email1">E-mail <span class="required">*</span></label>
							<i id="icon1" class="bx bxs-envelope"></i>
						</div>
						<div class="input-field">
							<input
								type="email"
								placeholder="Confirm Email"
								id="email_confirmed1"
								name="email_confirmed1"
								required
								oninput="checkEmails('email1', 'email_confirmed1', 'icon1', 'icon2', 'parent1Email', 'parent1EmailConfirmed')"
							/>
							<label for="email_confirmed1"
								>Comfirm Email <span class="required">*</span></label
							>
							<i id="icon2" class="bx bxs-envelope"></i>
						</div>
						<div class="input-field">
							<input
								type="tel"
								onfocus="this.value = phoneFormat1(this.value)"
								oninput="this.value = phoneFormat1(this.value)"
								placeholder="Phone Number"
								id="phone_number1"
								name="phone_number1"
								required
							/>
							<label for="phone_number1"
								>Phone Number <span class="required">*</span></label
							>
							<i id="phone1" class="bx bxs-phone"></i>
						</div>
					</div>
					<br />
				</details>
				<hr />
				<br />

				<details id="parentinfo2" class="info">
					<summary>
						<div style="display: flex; align-items: center">
							<i id="accordian_arrow" class="bx bxs-down-arrow bx-tada"></i>
							<h2 style="display: inline">
								Parent 2 Information: <span class="required">*</span>
							</h2>
						</div>
					</summary>
					<input
						type="checkbox"
						id="sameAsParent1"
						onclick="fillParent2Info()"
					/>
					<label for="sameAsParent1" style="color: #7c0000; font-weight: normal"
						>In case of a single parent, please check this box to reiterate
						Parent 1 Information</label
					>
					<h3>Name:</h3>
					<div class="input-box">
						<div class="input-field">
							<input
								type="text"
								placeholder="First Name"
								id="f2name"
								name="f2name"
								required
							/>
							<label for="f2name"
								>First Name <span class="required">*</span></label
							>
							<!-- <input type="hidden" id="f2nameHidden" name="f2nameHidden"> -->
							<i class="bx bxs-user"></i>
						</div>
						<div class="input-field">
							<input
								type="text"
								placeholder="Middle Name"
								id="m2name"
								name="m2name"
							/>
							<label for="m2name">Middle Name</label>
							<i class="bx bxs-user"></i>
						</div>
						<div class="input-field">
							<input
								type="text"
								placeholder="Last Name"
								id="l2name"
								name="l2name"
								required
							/>
							<label for="l2name"
								>Last Name <span class="required">*</span></label
							>
							<i class="bx bxs-user"></i>
						</div>
					</div>
					<br />
					<h3>Contact Info:</h3>
					<div class="input-box">
						<div class="input-field">
							<input
								type="email"
								placeholder="Email"
								id="email2"
								name="email2"
								required
								oninput="checkEmails('email2', 'email_confirmed2', 'icon12', 'icon22', 'parent2Email', 'parent2EmailConfirmed')"
							/>
							<label for="email2">E-mail <span class="required">*</span></label>
							<i id="icon12" class="bx bxs-envelope"></i>
						</div>
						<div class="input-field">
							<input
								type="email"
								placeholder="Confirm Email"
								id="email_confirmed2"
								name="email_confirmed2"
								required
								oninput="checkEmails('email2', 'email_confirmed2', 'icon12', 'icon22', 'parent2Email', 'parent2EmailConfirmed')"
							/>
							<label for="email_confirmed2"
								>Comfirm Email <span class="required">*</span></label
							>
							<i id="icon22" class="bx bxs-envelope"></i>
						</div>
						<div class="input-field">
							<input
								type="tel"
								onfocus="this.value = phoneFormat2(this.value)"
								oninput="this.value = phoneFormat2(this.value)"
								placeholder="Phone Number"
								id="phone_number2"
								name="phone_number2"
								required
							/>
							<label for="phone_number2"
								>Phone Number<span class="required">*</span></label
							>
							<i id="phone2" class="bx bxs-phone"></i>
						</div>
					</div>
					<br />
				</details>
				<hr />
				<br />

				<details id="mailing_address" class="info">
					<summary>
						<div style="display: flex; align-items: center">
							<i id="accordian_arrow" class="bx bxs-down-arrow bx-tada"></i>
							<h2 style="display: inline">
								Mailing Address: <span class="required">*</span>
							</h2>
						</div>
					</summary>

					<div class="input-box">
						<div class="input-field">
							<input
								type="text"
								placeholder="Street Address"
								id="street_address"
								name="street_address"
								required
							/>
							<label for="street_address"
								>Street Address <span class="required">*</span></label
							>
							<i class="bx bxs-home-alt-2"></i>
						</div>
						<div class="input-field">
							<input
								type="text"
								placeholder="Street Address Line 2"
								id="street_address2"
								name="street_address2"
							/>
							<label for="street_address2">Street Address Line 2</label>
							<i class="bx bxs-home-alt-2"></i>
						</div>
						<div class="input-field">
							<input
								type="text"
								placeholder="City"
								id="city"
								name="city"
								required
							/>
							<label for="city">City <span class="required">*</span></label>
							<i class="bx bxs-city"></i>
						</div>
						<div class="input-field">
							<select id="state" name="state" required>
								<option disabled value="">Select</option>
								<option value="NJ">New Jersey</option>
								<option value="PA">Pennsylvania</option>
								<option value="NY">New York</option>
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="GA">Georgia</option>
								<option value="ME">Maine</option>
								<option value="MA">Massachusetts</option>
								<option value="NH">New Hampshire</option>
								<option value="RI">Rhode Island</option>
							</select>
							<label for="state">State <span class="required">*</span></label>
						</div>

						<div class="input-field">
							<input
								type="text"
								placeholder="Zip Code"
								id="zipcode"
								name="zipcode"
								required
							/>
							<label for="zipcode"
								>Zip Code <span class="required">*</span></label
							>
							<i class="bx bx-map-pin"></i>
						</div>
					</div>
					<br />
				</details>
				<hr />
				<br />

				<details id="enrollment" class="info">
					<summary>
						<div style="display: flex; align-items: center">
							<i id="accordian_arrow" class="bx bxs-down-arrow bx-tada"></i>
							<h2 style="display: inline">
								Enrollment: <span class="required">*</span>
							</h2>
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
							<!--  for 2024-2025 school year -->
							<h4>Children to enroll? <span class="required">*</span></h4>
							<select
								id="childrenenrolled"
								name="childrenenrolled"
								required
								onchange="showChildren()"
							>
								<option value="" disabled selected>Please Select</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
							</select>
							<p style="font-size: 10px">
								ALL children being enrolled MUST be part of the same household.
							</p>
							<br />
						</div>
					</div>
					<br /><br />
				</details>

				<div id="childrenContainer"></div>
				<hr />
				<br />

				<div class="info" id="costTable">
					<h2>Payment Breakdown</h2>
					<div>
						<table class="payment-table">
							<tr>
								<th>Description</th>
								<th>Amount</th>
							</tr>
							<tr>
								<td>ISCJ Membership fee</td>
								<td id="fee">$0</td>
							</tr>
							<tr>
								<td>Total Tuition</td>
								<td id="tuition">$0</td>
							</tr>
							<tr>
								<td>Total Expansion/Operations fee</td>
								<td id="Expansion">$0</td>
							</tr>
							<tr>
								<td>PTA fees</td>
								<td id="pta">$0</td>
							</tr>
							<tr>
								<td>Total Discount</td>
								<td id="Discount">$0</td>
							</tr>
							<tr>
								<td>Late Fee</td>
								<td id="LateFee">$0</td>
							</tr>
							<tr class="total-row">
								<td>Total Cost</td>
								<td id="result">$0</td>
							</tr>
						</table>
					</div>
				</div>

				<details id="payment" class="info">
					<summary>
						<div style="display: flex; align-items: center">
							<i id="accordian_arrow" class="bx bxs-down-arrow bx-tada"></i>
							<h2 style="display: inline">
								Payment Options: <span class="required">*</span>
							</h2>
						</div>
					</summary>
					<br />
					<div class="input-box">
						<div class="radio-field">
							<input
								type="radio"
								id="ccfa"
								name="payment"
								value="ccfa"
								required
								disabled
								onclick="showMessage('ccfa')"
							/>
							<label for="ccfa">Check/Cash/Financial Aid</label>
							<br /><input
								type="radio"
								id="cc"
								name="payment"
								value="cc"
								onclick="showMessage('cc')"
							/>
							<label for="cc">Credit Card</label>
						</div>
					</div>

					<div id="payment-message-ccfa" style="display: none">
						<br />
						<hr />
						<h4>Payment</h4>
						<p>
							Registration will only be considered completed once the check or
							cash has been received by Weekend School Office Administration
							located in the Main School building or the ISCJ Office in the
							Masjid. In case you are applying for Financial Aid, please reach
							out to <a href="admin@iscjwes.org ">admin@iscjwes.org</a> after
							completing this form.
						</p>
					</div>
					<div id="payment-message-cc" style="display: none">
						<br />
						<hr />
						<h4>Payment</h4>
						<div class="payments">
							<div id="paypal-payment-button"></div>
							<input type="hidden" id="hidden-email-input" />
							<div
								id="error-message"
								style="display: none; color: red; text-align: center"
							></div>
						</div>
					</div>
				</details>

				<br /><br />
				<hr />
				<div class="input-box">
					<label
						><input type="checkbox" required />I have read and agree to all of
						the ISCJ Weekend School's
						<a href="https://www.iscjwes.org/terms.html" target="_blank"
							>terms & conditions</a
						>.<span class="required">*</span></label
					>
					<br />
					<button type="submit" class="btn">Register</button>
				</div>
			</form>
		</div>
		<script src="https://www.paypal.com/sdk/js?client-id=AYSayFxbL3MMbp5l2l_trt4NHzHZ0OwtSk8mKM0pgasCKgo_3Iqp2dPLwkOAZJJt2tAexjpQKR3Cugba"></script>
		<script src="funstuff.js"></script>
		<script src="fieldconfirmations.js"></script>
		<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
	</body>
</html>
