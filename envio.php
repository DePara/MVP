<?php
	if(isset($_GET["email"]))
	{
		$email = $_GET["email"];

		$servername = "mysql12.000webhost.com";
		$username = "a6741976_ray";
		$password = "depara0812";
		$dbname = "a6741976_main";

		// Create connection
		$conn = new mysqli($servername, $username, $password, $dbname);
		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 

		$sql = "INSERT INTO email_data (email) VALUES ('$email')";

		if ($conn->query($sql)) {
		    header( "Location: http://www.deparapresentes.com.br" );;
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}

		$conn->close();
	}
?>