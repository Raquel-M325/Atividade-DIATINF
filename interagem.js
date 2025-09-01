const cards = document.querySelectorAll('.relatorio');

cards.addEventListener('mouseover', function() {
    cards.classList.add('relatorio','menu');
});

cards.addEventListener('mouseout', function() {
    cards.classList.remove('relatorio','menu');
});