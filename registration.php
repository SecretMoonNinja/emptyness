<?php
    // Check if form is submitted
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        // Payment options
        $payment = $_POST["payment"];

        // Parent 1 Information
        $f1name = $_POST["f1name"];
        $m1name = $_POST["m1name"];
        $l1name = $_POST["l1name"];
        $email1 = $_POST["email1"];
        $phone_number1 = $_POST["phone_number1"];

        $f2nameHidden = $_POST["f2nameHidden"];
        $m2name = $_POST["m2name"];
        $l2name = $_POST["l2name"];
        $email2 = $_POST["email2"];
        $phone_number2 = $_POST["phone_number2"];

        $street_address = $_POST["street_address"];
        $street_address2 = $_POST["street_address2"];
        $city = $_POST["city"];
        $state = $_POST["state"];
        $zipcode = $_POST["zipcode"];

        $enrollmentday = $_POST["enrollmentday"];
        $childrenenrolled = $_POST["childrenenrolled"];



        // Here you can process the form data, for example, insert it into a database or send it via email
        // For now, let's just print it out
        echo "Payment Option: " . $payment . "<br>";
        echo "Parent 1 First Name: " . $f1name . "<br>";
        echo "Parent 1 Middle Name: " . $m1name . "<br>";
        echo "Parent 1 Last Name: " . $l1name . "<br>";
        echo "Parent 1 Email: " . $email1 . "<br>";
        echo "Parent 1 Phone Number: " . $phone_number1 . "<br>";

        echo "Parent 2 First Name: " . $f2nameHidden . "<br>";
        echo "Parent 2 Middle Name: " . $m2name . "<br>";
        echo "Parent 2 Last Name: " . $l2name . "<br>";
        echo "Parent 2 Email: " . $email2 . "<br>";
        echo "Parent 2 Phone Number: " . $phone_number2 . "<br>";

        echo "Street Address: " . $street_address . "<br>";
        echo "Street Address 2: " . $street_address2 . "<br>";
        echo "city: " . $city . "<br>";
        echo "state: " . $state . "<br>";
        echo "zipcode: " . $zipcode . "<br>";

        echo "Enrollment Day: " . $enrollmentday . "<br>";
        echo "Children Enrolled: " . $childrenenrolled . "<br>";


    }
?>

