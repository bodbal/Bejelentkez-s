function showDiv(divId) {
    document.getElementById("LoginDiv").style.display = "none";
    document.getElementById("SignUpDiv").style.display = "none";
    document.getElementById(divId).style.display = "block";
  }
function SignUp() {
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const password2 = document.getElementById("reg-password2").value;
    const signupDiv = document.getElementById("SignUpDiv");
    
    if (email === "" || password === "" || password2 === "") {
        alert("Kérem, töltse ki az összes mezőt!");
        return;
    }
    else if (password !== password2) {
        alert("A jelszavak nem egyeznek!");
        return;
    }

    if (signupDiv){
        //signupDiv.innerHTML = " Sign Up ";
        alert("jóóóóóó")
    }

alert("Sikeres regisztráció!");
}

function Login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const loginDiv = document.getElementById("LoginDiv");
    if (email === "" || password === "") {
        alert("Kérem, töltse ki az összes mezőt!");
        return;
    }

    


   alert("Sikeres bejelentkezés!");

}
window.onload = function () {
    showDiv("LoginDiv");
  };