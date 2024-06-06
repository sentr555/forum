document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointment-form');
    const confirmation = document.getElementById('confirmation');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        confirmation.classList.remove('hidden');
        form.reset();
    });
});

