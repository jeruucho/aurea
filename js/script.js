document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleTheme");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️ Claro";
    } else {
      toggleBtn.textContent = "🌙 Oscuro";
    }
  });
});

// Buscador de productos
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("q");
    const productos = document.querySelectorAll(".producto");

    input.addEventListener("keyup", () => {
        let filtro = input.value.toLowerCase();

        productos.forEach(producto => {
            let nombre = producto.querySelector(".card-title").textContent.toLowerCase();

            if (nombre.includes(filtro)) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        });
    });
});
