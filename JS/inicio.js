// ====== Notificaciones ======
// ====== Elementos ======
const notifWrapper = document.getElementById('notif-wrapper');
const notifDropdown = document.getElementById('notif-dropdown-sidebar');
const notifBadge = document.getElementById('notif-badge');

// Número inicial de notificaciones
let notifCount = 3;

// Mostrar badge solo si hay notificaciones
if (notifCount > 0) {
    notifBadge.textContent = notifCount;
    notifBadge.style.display = 'inline-block';
} else {
    notifBadge.style.display = 'none';
}

// Abrir / cerrar dropdown al hacer clic en TODO el contenedor
notifWrapper.addEventListener('click', (e) => {
    e.stopPropagation(); // evitar que el clic cierre inmediatamente
    if (notifDropdown.style.display === 'block') {
        notifDropdown.style.display = 'none';
    } else {
        notifDropdown.style.display = 'block';
        // Al abrir el dropdown, marcar notificaciones como leídas
        notifCount = 0;
        notifBadge.style.display = 'none';
    }
});

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!notifWrapper.contains(e.target) && !notifDropdown.contains(e.target)) {
        notifDropdown.style.display = 'none';
    }
});



// ====== Iconos superiores (ejemplo de acción) ======
const topIcons = document.querySelectorAll('.top-right-icons .icon');

topIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`Has hecho clic en el icono: ${icon.innerHTML}`);
        // Aquí puedes reemplazar con la lógica real que quieras
    });
});

// ====== Menú lateral (ejemplo de acción) ======
const menuLinks = document.querySelectorAll('.nav-links a');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // evitar recargar página
        alert(`Has hecho clic en el menú: ${link.textContent.trim()}`);
        // Aquí puedes reemplazar con la navegación real
    });
});
