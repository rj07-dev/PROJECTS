const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        formMessage.textContent = "Please fill in all fields before sending.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Your message has been sent successfully.";
        formMessage.style.color = "#1f4ed8";
        contactForm.reset();
    }
});