function submitForm() {
    const email = document.getElementById("email").value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        alert("Submitted");
        document.getElementById("contact_form").reset();
    }

    else {
        alert("Email not valid")
    }

}
