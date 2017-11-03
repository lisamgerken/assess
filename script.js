var user = {
	name: "Grant Chirpus",
	email: "coolguy@gmail.com",
	password: "ILoveCoffee"
};

function checkLogin() {
 for (var i = 0; i < user.length; i++) {
    if (user[i].email === email.value) {
		if (user[i].password === password.value){
      document.querySelectorAll(".error")[0].style.display = "block";
      document.querySelectorAll(".container")[0].style.display = "none";
      email.value = "";
      password.value = "";
    } else {
		alert("The sign in credentials are incorrect.")
	}
  }
 }



function hideScreen() {
  document.querySelectorAll(".correct")[0].style.display = "none";
  document.querySelectorAll(".container")[0].style.display = "block";
}


