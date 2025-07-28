
document.getElementById("menuToggle").addEventListener("click", function () {
    const menu = document.querySelector("#navMenu ul");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});
