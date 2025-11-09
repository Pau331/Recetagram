document.addEventListener("DOMContentLoaded", () => {
  const btnLogin = document.getElementById("btnLogin");
  const btnRegistro = document.getElementById("btnRegistro");
  const btnContinuar = document.getElementById("btnContinuar");

  // Evento mouseover (requisito)
  [btnLogin, btnRegistro, btnContinuar].forEach(btn => {
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1)";
    });
  });

  // Redirecciones
  btnLogin.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  btnRegistro.addEventListener("click", () => {
    window.location.href = "registro.html";
  });

  // Intento de continuar sin iniciar sesión
  btnContinuar.addEventListener("click", () => {
    alert("Debes iniciar sesión o registrarte para continuar.");
  });
});
