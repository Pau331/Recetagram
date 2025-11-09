document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formRegistro");
  const btn = document.getElementById("btnRegistrar");

  // Evento mouseover (requisito)
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#ff6600";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#ff9a00";
  });

  // Evento submit
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita recargar la página

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value;
    const conf = document.getElementById("confirmar").value;

    // Validación básica
    if (pass !== conf) {
      alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
      return;
    }

    if (nombre && email && pass && conf) {
      alert(`¡Registro exitoso! Bienvenido/a, ${nombre}.`);
      form.reset();
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
});
