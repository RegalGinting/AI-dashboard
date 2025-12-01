document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const btn = document.querySelector(".btn-login");
    btn.innerText = "Processing...";
    btn.style.opacity = ".7";

    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 1500);
});