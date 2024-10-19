document.addEventListener('DOMContentLoaded', function() {
    const sobreLink = document.getElementById('sobre-link');
    const contatoLink = document.getElementById('contato-link');
    const sobreModal = document.getElementById('sobre-modal');
    const contatoModal = document.getElementById('contato-modal');

    sobreLink.addEventListener('click', function(event) {
        event.preventDefault();
        $('#sobre-modal').modal('show');
    });

    contatoLink.addEventListener('click', function(event) {
        event.preventDefault();
        $('#contato-modal').modal('show');
    });
});
