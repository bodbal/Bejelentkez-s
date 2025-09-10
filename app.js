function Switch () {
document.querySelectorAll('input[name="switch"]').forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === 'option1') {
            SignUp();
        } else if (this.value === 'option2') {
            Login();
        }
    });

});
};

function SignUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const signupDiv = document.getElementById("signupDiv");
    
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
    if (email === "" || password === "") {
        alert("Kérem, töltse ki az összes mezőt!");
        return;
    }
    


   alert("Sikeres bejelentkezés!");

}