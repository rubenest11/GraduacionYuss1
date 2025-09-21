// Prevenir scroll en la página
document.addEventListener('DOMContentLoaded', function() {
    // Prevenir scroll con rueda del mouse
    document.addEventListener('wheel', function(e) {
        e.preventDefault();
    }, { passive: false });
    
    // Prevenir scroll con teclas
    document.addEventListener('keydown', function(e) {
        // Prevenir teclas de navegación
        if(['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.code)) {
            e.preventDefault();
        }
    });
    
    // Prevenir scroll táctil
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });
    
    // Animación suave de entrada
    const image = document.querySelector('.invitation-image');
    image.style.opacity = '0';
    image.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        image.style.transition = 'opacity 1s ease, transform 1s ease';
        image.style.opacity = '1';
        image.style.transform = 'scale(1)';
    }, 100);
});

// Ajustar imagen al redimensionar ventana
window.addEventListener('resize', function() {
    const image = document.querySelector('.invitation-image');
    // Forzar recálculo del tamaño
    image.style.maxWidth = '100vw';
    image.style.maxHeight = '100vh';
});