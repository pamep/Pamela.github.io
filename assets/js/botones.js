document.addEventListener('DOMContentLoaded', function() {
    
    var btnIngles = document.getElementById('btn-ingles');
    var btnEspanol = document.getElementById('btn-espanol');

    
    btnIngles.addEventListener('click', function() {
        window.location.href = "index_en.html";
    });

   
    btnEspanol.addEventListener('click', function() {
        window.location.href = "index.html";
    });
});
