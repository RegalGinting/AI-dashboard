const openButtons = document.querySelectorAll(".btn-open");

openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Opening: " + btn.parentElement.querySelector("h3").innerText);
    });
});