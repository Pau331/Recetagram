document.addEventListener("DOMContentLoaded", () => {
  const chats = document.querySelectorAll(".chat-item");
  const chatUsuario = document.getElementById("chat-usuario");
  const chatMensajes = document.getElementById("chatMensajes");
  const mensajeInput = document.getElementById("mensajeInput");
  const btnEnviar = document.getElementById("btnEnviar");
  const panelIzquierdo = document.getElementById("panelIzquierdo");
  const panelDerecho = document.getElementById("panelDerecho");
  const btnVolver = document.getElementById("btnVolver");

  // 🔹 Seleccionamos las secciones por encabezado
  const seccionSinLeer = document.querySelector(".seccion:nth-of-type(1)");
  const seccionRecientes = document.querySelector(".seccion:nth-of-type(2)");

  const listaSinLeer = seccionSinLeer.querySelectorAll(".chat-item");
  const contenedorSinLeer = seccionSinLeer.querySelector(":scope > div:not(:has(h3))");
  const contenedorRecientes = seccionRecientes.querySelector(":scope > div:not(:has(h3))") || seccionRecientes;

  // Conversaciones simuladas
  const conversaciones = {
    "Lucía": [
      { remitente: "Lucía", texto: "¡Tienes que probar mi nueva receta!" },
      { remitente: "Tú", texto: "Claro, mándame los ingredientes 😋" }
    ],
    "Carlos": [
      { remitente: "Carlos", texto: "¿Cómo hiciste el bizcocho?" },
      { remitente: "Tú", texto: "Te paso la receta ahora." }
    ],
    "Ana": [
      { remitente: "Ana", texto: "Te mandé un nuevo postre 🍰" },
      { remitente: "Tú", texto: "¡Gracias! Tiene una pinta increíble." }
    ],
    "David": [
      { remitente: "David", texto: "¿Cuándo subes receta nueva?" },
      { remitente: "Tú", texto: "Esta semana 😁" }
    ]
  };

  // Click en un chat
  chats.forEach(chat => {
    chat.addEventListener("click", () => {
      const usuario = chat.dataset.usuario;
      chatUsuario.textContent = usuario;
      mensajeInput.disabled = false;
      btnEnviar.disabled = false;

      // Mostrar los mensajes
      chatMensajes.innerHTML = "";
      conversaciones[usuario].forEach(msg => {
        const burbuja = document.createElement("div");
        burbuja.classList.add("chat-burbuja", msg.remitente === "Tú" ? "user" : "otros");
        burbuja.textContent = msg.texto;
        chatMensajes.appendChild(burbuja);
      });

      // 🔸 Mover de “sin leer” a “recientes”
      if (chat.classList.contains("no-leido")) {
        chat.classList.remove("no-leido");

        // Quitar del contenedor "sin leer"
        if (chat.parentElement === contenedorSinLeer || chat.parentElement === seccionSinLeer) {
          chat.parentElement.removeChild(chat);
        }

        // Insertar al inicio de “recientes”
        const primerChatReciente = seccionRecientes.querySelector(".chat-item");
        if (primerChatReciente) {
          primerChatReciente.parentElement.insertBefore(chat, primerChatReciente);
        } else {
          seccionRecientes.appendChild(chat);
        }
      }

      // En móvil: mostrar solo el panel derecho
      if (window.innerWidth <= 600) {
        panelIzquierdo.style.display = "none";
        panelDerecho.style.display = "flex";
      }
    });

    // Hover visual
    chat.addEventListener("mouseover", () => {
      chat.style.backgroundColor = "#fff4d4";
    });
    chat.addEventListener("mouseout", () => {
      chat.style.backgroundColor = "";
    });
  });

  // Botón volver (solo móvil)
  btnVolver.addEventListener("click", () => {
    if (window.innerWidth <= 600) {
      panelDerecho.style.display = "none";
      panelIzquierdo.style.display = "block";
    }
  });

  // Enviar mensaje nuevo
  btnEnviar.addEventListener("click", () => {
    const texto = mensajeInput.value.trim();
    if (!texto) return;

    const nuevaBurbuja = document.createElement("div");
    nuevaBurbuja.classList.add("chat-burbuja", "user");
    nuevaBurbuja.textContent = texto;
    chatMensajes.appendChild(nuevaBurbuja);
    mensajeInput.value = "";
    chatMensajes.scrollTop = chatMensajes.scrollHeight;
  });
});
