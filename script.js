// Animación suave de entrada
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.invitation-image');
    images.forEach((image, index) => {
        image.style.opacity = '0';
        image.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            image.style.transition = 'opacity 1s ease, transform 1s ease';
            image.style.opacity = '1';
            image.style.transform = 'scale(1)';
        }, 100 + (index * 200));
    });
});

// Funcionalidad para el enlace de maps
document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento de clic a todas las imágenes
    const images = document.querySelectorAll('.invitation-image');
    
    images.forEach(image => {
        image.addEventListener('click', function(e) {
            // Obtener las coordenadas del clic relativas a la imagen
            const rect = image.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calcular porcentajes relativos a la imagen
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            // Área para el botón de WhatsApp (confirmar asistencia)
            // Aproximadamente en el área del botón de confirmar asistencia
            if (yPercent >= 75 && yPercent <= 90 && xPercent >= 20 && xPercent <= 80) {
                window.open('https://wa.link/pkl1xt', '_blank');
            }
            // Área donde podría estar el enlace de maps
            else if (yPercent >= 50 && yPercent <= 75) {
                window.open('https://maps.app.goo.gl/8oxnAQYhqXUBoPgd9', '_blank');
            }
        });
        
        // Cambiar cursor en las áreas clickeables
        image.addEventListener('mousemove', function(e) {
            const rect = image.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            // Área del botón de WhatsApp o área de maps
            if ((yPercent >= 75 && yPercent <= 90 && xPercent >= 20 && xPercent <= 80) || 
                (yPercent >= 50 && yPercent <= 75)) {
                image.style.cursor = 'pointer';
            } else {
                image.style.cursor = 'default';
            }
        });
    });
});