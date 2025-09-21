// Prevenir scroll en la página
document.addEventListener('DOMContentLoaded', function() {
    // Animación suave de entrada
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
    
    // Scroll suave entre imágenes
    let isScrolling = false;
    document.addEventListener('wheel', function(e) {
        if (isScrolling) return;
        
        const currentScroll = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        if (e.deltaY > 0) {
            // Scroll hacia abajo
            if (currentScroll < windowHeight) {
                isScrolling = true;
                window.scrollTo({
                    top: windowHeight,
                    behavior: 'smooth'
                });
                setTimeout(() => isScrolling = false, 800);
            }
        } else {
            // Scroll hacia arriba
            if (currentScroll >= windowHeight) {
                isScrolling = true;
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                setTimeout(() => isScrolling = false, 800);
            }
        }
    });
});

// Funcionalidad para el enlace de maps
document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento de clic a todas las imágenes para detectar clics en el área de maps
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
            
            // Área aproximada donde podría estar el enlace de maps (ajustar según sea necesario)
            // Estas coordenadas pueden necesitar ajuste según dónde esté exactamente el enlace en las imágenes
            if (xPercent >= 20 && xPercent <= 80 && yPercent >= 60 && yPercent <= 90) {
                window.open('https://maps.app.goo.gl/8oxnAQYhqXUBoPgd9', '_blank');
            }
        });
        
        // Cambiar cursor cuando esté sobre el área de maps
        image.addEventListener('mousemove', function(e) {
            const rect = image.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            if (xPercent >= 20 && xPercent <= 80 && yPercent >= 60 && yPercent <= 90) {
                image.style.cursor = 'pointer';
            } else {
                image.style.cursor = 'default';
            }
        });
    });
});

// Ajustar imagen al redimensionar ventana
window.addEventListener('resize', function() {
    const images = document.querySelectorAll('.invitation-image');
    images.forEach(image => {
        // Forzar recálculo del tamaño
        image.style.maxWidth = '100vw';
        image.style.height = '100vh';
    });
});