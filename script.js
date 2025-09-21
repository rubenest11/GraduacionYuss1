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
            
            // Área donde podría estar el enlace de maps (ajustable)
            // Probando con un área más amplia para asegurar que funcione
            if (yPercent >= 50) { // Cualquier clic en la mitad inferior de cualquier imagen
                window.open('https://maps.app.goo.gl/8oxnAQYhqXUBoPgd9', '_blank');
            }
        });
        
        // Cambiar cursor en la mitad inferior de las imágenes
        image.addEventListener('mousemove', function(e) {
            const rect = image.getBoundingClientRect();
            const y = e.clientY - rect.top;
            const yPercent = (y / rect.height) * 100;
            
            if (yPercent >= 50) {
                image.style.cursor = 'pointer';
            } else {
                image.style.cursor = 'default';
            }
        });
    });
});