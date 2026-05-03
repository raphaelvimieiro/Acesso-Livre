function flipCard(cardElement) {
    cardElement.classList.toggle('is-flipped');
}
/*LOGOUT*/

function toggleMenu() {
    const menu = document.getElementById("dropdownUser");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

/* SAIR BTN */
function logoutUser() {

    localStorage.removeItem("usuario");
    window.location.href = "login.html";
}


window.addEventListener("click", function(e){

    const menu = document.getElementById("dropdownUser");
    const btn = document.querySelector(".btn-user-icon");

    if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = "none";
    }

});