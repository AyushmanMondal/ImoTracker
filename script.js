const buttons = document.querySelectorAll(".nav-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        console.log(
            `${button.textContent} clicked`
        );
    });
});
