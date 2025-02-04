function login() {
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'Bonita' && password === '17-12-2024') {
        window.location.href = '../template/valentine.html'; // Cambia 'otra-pagina.html' por la URL de la página a la que quieres redirigir
    } else {
        errorMessage.style.display = 'block';
    }
}