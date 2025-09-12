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
    const reg= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || password === "" || password2 === "") {
        alert("Kérem, töltse ki az összes mezőt!");
        return;
    }
    else if (!reg.test(email)) {
        alert("Kérem, érvényes email címet adjon meg!");
        return;
    }
    else if (password !== password2) {
        alert("A jelszavak nem egyeznek!");
        return;
    }

    

alert("Sikeres regisztráció!");
}

function Login() {

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const loginDiv = document.getElementById("LoginDiv");
    const reg= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || password === "") {
        alert("Kérem, töltse ki az összes mezőt!");
        return;
    }
    else if (!reg.test(email)) {
        alert("Kérem, érvényes email címet adjon meg!");
        return;
    }

   alert("Sikeres bejelentkezés!");

}
window.onload = function () {
    showDiv("LoginDiv");
  };