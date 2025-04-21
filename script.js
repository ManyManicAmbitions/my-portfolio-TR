const showDetailsButton = document.querySelectorAll(".toggle-button");

showDetailsButton.forEach(button => {
    button.addEventListener("click", () => {
        const project = button.closest(".project");
        const details = project.querySelector(".details");
            details.classList.toggle("show");
                if (details.classList.contains("show")) {
                    button.textContent = "Hide details";
            } else {
                button.textContent = "Show details";
            }
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    let errorMessage = "";
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
        if (!name) {
            errorMessage += "Name mandatory";
        }
        if (!email) {
            errorMessage += "Email mandatory";
        } else if (!validateEmail(email)) {
            errorMessage += "Email invalid";
        }
        if (!phone) {
            errorMessage += "Phone number mandatory";
        }
        if (!message) {
            errorMessage += "Message field mandatory";
        }
        if (errorMessage) {
            event.preventDefault();
            document.getElementById("error-message").innerText = errorMessage;
        }
});

function validateEmail(email) {
 return email.indexOf("@") > -1 && email.indexOf(".") > -1;  
} 
