function Switch () {
const val = document.getElementById("val").value;

}

function SignUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    if (email === "" || password === "" || password2 === "") {
        alert("Kérem, töltse ki az összes mezőt!");
        return;
    }
    else if (password !== password2) {
        alert("A jelszavak nem egyeznek!");
        return;
    }





alert("Sikeres regisztráció!");
}

function Login() {


    alert("Sikeres bejelentkezés!");

}