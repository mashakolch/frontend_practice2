(function () {
    'use strict'

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
         
            alert('Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.');
            form.reset();
            form.classList.remove('was-validated');
        }

        form.classList.add('was-validated');
    }, false);

})();


const inputs = form.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('input', function () {
        if (this.checkValidity()) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });
});