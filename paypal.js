// Animation thing: https://lottiefiles.com/animations/payment-successful-5uXFkB4jix

paypal
	.Buttons({
		style: {
			width: "50%",
		},
		createOrder: function (data, actions) {
			let amount = parseFloat(
				document.getElementById("result").innerText.substring(1)
			);

			// Apply the transaction fee
			amount = amount + amount * 0.0199 + 0.49;

			return actions.order.create({
				purchase_units: [
					{
						amount: {
							value: amount.toFixed(2),
						},
					},
				],
				application_context: {
					shipping_preference: "NO_SHIPPING",
				},
			});
		},

		onApprove: function (data, actions) {
			return actions.order.capture().then(function (details) {
				console.log(details);
				var email = details.payer.email_address;
				document.getElementById("hidden-email").value = email;
				var id = details.id;
				document.getElementById("hidden-id").value = id;

				document.getElementById("paypal-payment-button").innerHTML =
					'<div style="width: 100%; height: 300px;overflow: hidden;position: relative;border-radius: 50px;"><lottie-player src="https://lottie.host/0b53a2e4-1fcf-4f95-aa1f-027d2c8bde38/Kr3qyNg5oH.json"speed=".6" background="rgb(0, 0, 128);" style="width: 150%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); " autoplay direction="1" mode="normal"></lottie-player></div>';
				var errorMessageDiv = document.getElementById("error-message");
				errorMessageDiv.innerHTML = "";
				errorMessageDiv.style.display = "none";
				document.getElementById("payment").style.border = "2px solid green";
				document.getElementById("costTable").style.border = "2px solid green";
			});
		},
		onCancel: function (data) {
			// Show an error message in the hidden div and make it visible
			var errorMessageDiv = document.getElementById("error-message");
			errorMessageDiv.innerHTML =
				"Payment was not successful. Please try again.";
			errorMessageDiv.style.display = "block";
		},
	})
	.render("#paypal-payment-button");
