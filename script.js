const showDetailsButton = document.querySelectorAll("show-details");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const details = button.nextElementSibling;
            details.classList.toggle("show");
                if (details.classList.contains("show")) {
                    button.textContent = "Hide details";
            } else {
                button.textContent = "Show details";
            }
    });
} );
    
