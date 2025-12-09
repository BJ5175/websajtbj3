document.addEventListener('DOMContentLoaded', function() {
        var myCarousel = document.getElementById('carouselExampleIndicators');
        new bootstrap.Carousel(myCarousel, {
            interval: 5000 // Automatski pokreće karusel
        });
    });