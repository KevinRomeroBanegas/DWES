// Obtener elementos del DOM
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Agregar evento de envío al formulario
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío por defecto

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validación simple
    if (username === '' || password === '') {
        errorMessage.textContent = 'Todos los campos son obligatorios.';
        errorMessage.style.display = 'block';
    } else if (username !== 'admin' || password !== '1234') {
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert('Inicio de sesión exitoso');
        // Aquí puedes redirigir al usuario a otra página
        // window.location.href = "dashboard.html";
    }
});