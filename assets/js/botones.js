document.addEventListener('DOMContentLoaded', function() {
    // Obtener los botones
    var btnIngles = document.getElementById('btn-ingles');
    var btnEspanol = document.getElementById('btn-espanol');

    // Función para cambiar a inglés
    btnIngles.addEventListener('click', function() {
        window.location.href = "index_en.html";
    });

    // Función para cambiar a español
    btnEspanol.addEventListener('click', function() {
        window.location.href = "index.html";
    });
});
