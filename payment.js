const buttons = document.querySelectorAll(".btn-select");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const plan = btn.getAttribute("data-plan");
        alert("You selected: " + plan);

        // redirect ke halaman pembayaran asli
        window.location.href = "checkout.html?plan=" + plan;
    });
});