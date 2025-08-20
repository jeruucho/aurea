document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1. CAMBIO DE TEMA
  // =========================
  const toggleBtn = document.getElementById("toggleTheme");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode"); // 👈 usamos siempre dark-mode

    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️ Claro";
    } else {
      toggleBtn.textContent = "🌙 Oscuro";
    }
  });

  // =========================
  // 2. BUSCADOR Y FILTRO DE CATEGORÍA
  // =========================
  const input = document.getElementById("q");               // Input de búsqueda
  const productos = document.querySelectorAll(".producto"); // Todos los productos
  const botonesFiltro = document.querySelectorAll(".filtro"); // Botones de categorías

  let categoriaSeleccionada = "all"; // Por defecto mostrar todos

  function filtrarProductos() {
    const texto = input.value.toLowerCase();

    productos.forEach(producto => {
      const nombre = producto.querySelector(".card-title").textContent.toLowerCase();
      const categoria = producto.getAttribute("data-categoria");

      const coincideTexto = nombre.includes(texto);
      const coincideCategoria = categoriaSeleccionada === "all" || categoria === categoriaSeleccionada;

      producto.style.display = (coincideTexto && coincideCategoria) ? "block" : "none";
    });
  }

  // Evento: búsqueda en barra
  input.addEventListener("keyup", filtrarProductos);

  // Evento: filtro por categoría
  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
      botonesFiltro.forEach(b => b.classList.remove("active"));
      boton.classList.add("active");
      categoriaSeleccionada = boton.getAttribute("data-filtro");
      filtrarProductos();
    });
  });
});
