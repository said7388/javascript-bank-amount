document.getElementById("login-submit").addEventListener("click", function() {
    const userEmail = document.getElementById("user-email");
    const emailValue = userEmail.value;
    const passwordValue = document.getElementById("user-password").value;

    if (emailValue == "example@gmail.com" && passwordValue == "1234"){
        window.location.href = 'banking.html';
    }
})