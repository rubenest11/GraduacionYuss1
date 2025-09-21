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

// Ajustar imagen al redimensionar ventana
window.addEventListener('resize', function() {
    const images = document.querySelectorAll('.invitation-image');
    images.forEach(image => {
        // Forzar recálculo del tamaño
        image.style.maxWidth = '100vw';
        image.style.height = '100vh';
    });
});