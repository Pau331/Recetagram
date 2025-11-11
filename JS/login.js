document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formLogin");
  const btn = document.getElementById("btnLogin");

  // Efecto hover del botón (rosa)
  btn.addEventListener("mouseover", () => (btn.style.backgroundColor = "#c12c54"));
  btn.addEventListener("mouseout", () => (btn.style.backgroundColor = "#e13b63"));

  // Validación y envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!usuario || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Verifica si tiene formato de correo
    const esCorreo = usuario.includes("@");
    if (esCorreo) {
      const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario);
      if (!correoValido) {
        alert("Por favor, introduce un correo electrónico válido.");
        return;
      }
    } else {
      // Si es nombre de usuario, verifica que tenga al menos 3 caracteres
      if (usuario.length < 3) {
        alert("El nombre de usuario debe tener al menos 3 caracteres.");
        return;
      }
    }

    alert(`Inicio de sesión exitoso. ¡Bienvenido/a, ${usuario}!`);
    form.reset();
  });
});
