// Pegando elementos
const abrirBtn = document.getElementById("abrirPopup");
const fecharBtn = document.getElementById("fecharPopup");
const popup = document.getElementById("popup");

// Abrir popup
abrirBtn.addEventListener("click", () => {
    popup.style.display = "block";
});

// Fechar popup
fecharBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Fechar clicando fora do popup
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
