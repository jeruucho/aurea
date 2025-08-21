document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1. CAMBIO DE TEMA
  // =========================
  const toggleBtn = document.getElementById("toggleTheme");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️ Claro";
    } else {
      toggleBtn.textContent = "🌙 Oscuro";
    }
  });

  // =========================
  // 2. BUSCADOR Y FILTRO DE CATEGORÍA
  // =========================
  const input = document.getElementById("q");                  
  const productos = document.querySelectorAll(".producto");    
  const botonesFiltro = document.querySelectorAll(".filtro, .dropdown-item");  
  // 👆 ahora incluye botones + items del dropdown

  let categoriaSeleccionada = "all"; // Por defecto mostrar todos

  function filtrarProductos() {
    const texto = input.value.toLowerCase();

    productos.forEach(producto => {
      const nombre = producto.querySelector(".card-title").textContent.toLowerCase();
      const categorias = producto.getAttribute("data-categoria").split(" "); // soporte multi-categoría

      const coincideTexto = nombre.includes(texto);
      const coincideCategoria = categoriaSeleccionada === "all" || categorias.includes(categoriaSeleccionada);

      producto.style.display = (coincideTexto && coincideCategoria) ? "block" : "none";
    });
  }

  // Evento: búsqueda en barra
  input.addEventListener("keyup", filtrarProductos);

  // Evento: click en filtro (botones + dropdown)
  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", (e) => {
      e.preventDefault();

      // Quitar active de todos
      botonesFiltro.forEach(b => b.classList.remove("active"));
      // Marcar el actual
      boton.classList.add("active");

      // Guardar categoría
      categoriaSeleccionada = boton.getAttribute("data-filtro");

      // Filtrar productos
      filtrarProductos();

      // Si viene del dropdown, cerramos el menú
      const dropdown = boton.closest(".dropdown");
      if (dropdown) {
        dropdown.classList.remove("show");
      }
    });
  });

  // =========================
  // 3. DROPDOWN DE FILTROS
  // =========================
  const dropbtn = document.querySelector(".dropbtn");
  const dropdown = document.querySelector(".dropdown");

  if (dropbtn && dropdown) {
    dropbtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });

    // Cierra el menú si clickeás fuera
    window.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target) && e.target !== dropbtn) {
        dropdown.classList.remove("show");
      }
    });
  }
});
