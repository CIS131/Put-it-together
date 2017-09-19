// function for email info
 function submitInfo() {
	var name = document.getElementById("nameinput");
    var email = document.getElementById("emailinput");
	(name.value && email.value) ? alert("Thank you!") : alert("Please fill in all fields");
	}
	document.getElementById("submit").addEventListener("click", submitInfo, false);
