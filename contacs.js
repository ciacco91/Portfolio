window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_trgkntl', 'template_4drcdg7', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById('contact-form').reset();
                alert('Request sent!')
            }, function(error) {
                console.log('FAILED...', error);
                alert('Request error: try again or try later!')
            });
    });
}