document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formLogin");
  const btn = document.getElementById("btnLogin");

  // Evento mouseover (requisito)
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#ff6600";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#ff9a00";
  });

  // Evento submit del formulario
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (usuario === "" || password === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Simulamos validación correcta (sin backend)
    alert(`Inicio de sesión exitoso. ¡Bienvenido/a, ${usuario}!`);

    // Limpia el formulario
    form.reset();
  });
});
