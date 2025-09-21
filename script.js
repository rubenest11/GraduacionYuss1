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

// Funcionalidad para los enlaces
document.addEventListener('DOMContentLoaded', function() {
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
            
            console.log('Clic en:', xPercent.toFixed(1) + '%, ' + yPercent.toFixed(1) + '%');
            
            // Área para el texto "wa.link" (WhatsApp) - parte inferior
            if (yPercent >= 85 && yPercent <= 95 && xPercent >= 20 && xPercent <= 80) {
                console.log('Abriendo WhatsApp');
                window.open('https://wa.link/pkl1xt', '_blank');
                return;
            }
            
            // Área para Maps - zona media
            if (yPercent >= 60 && yPercent <= 80) {
                console.log('Abriendo Maps');
                window.open('https://maps.app.goo.gl/8oxnAQYhqXUBoPgd9', '_blank');
                return;
            }
        });
        
        // Cambiar cursor en las áreas clickeables
        image.addEventListener('mousemove', function(e) {
            const rect = image.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            // Área del texto "wa.link" o área de maps
            if ((yPercent >= 85 && yPercent <= 95 && xPercent >= 20 && xPercent <= 80) || 
                (yPercent >= 60 && yPercent <= 80)) {
                image.style.cursor = 'pointer';
            } else {
                image.style.cursor = 'default';
            }
        });
    });
});