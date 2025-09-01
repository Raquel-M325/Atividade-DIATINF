const cards = document.querySelectorAll('.relatorio');

const menus = document.querySelectorAll('.menu');

const elementos = [...cards, ...menus];

elementos.forEach(function(elemento) {
    elemento.addEventListener('mouseover', function() {
        elemento.classList.add('relatorio','menu');
    });


    elemento.addEventListener('mouseout', function() {
        elemento.classList.remove('relatorio','menu');
    });

});