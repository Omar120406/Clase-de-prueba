// Función para mostrar/ocultar noticias
document.addEventListener('DOMContentLoaded', function() {
    // Animación suave para el scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efecto de carga de imágenes
    const noticias = document.querySelectorAll('.noticia');
    noticias.forEach(noticia => {
        noticia.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        noticia.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Función para actualizar la hora en tiempo real
    function actualizarHora() {
        const ahora = new Date();
        const hora = ahora.getHours().toString().padStart(2, '0');
        const minutos = ahora.getMinutos().toString().padStart(2, '0');
        const segundos = ahora.getSeconds().toString().padStart(2, '0');
        
        document.getElementById('reloj').textContent = `${hora}:${minutos}:${segundos}`;
    }

    // Actualizar la hora cada segundo
    setInterval(actualizarHora, 1000);
    actualizarHora(); // Llamada inicial

    // Botón para cambiar tema claro/oscuro
    const btnTema = document.getElementById('btnTema');
    btnTema.addEventListener('click', function() {
        document.body.classList.toggle('tema-oscuro');
        const temaActual = document.body.classList.contains('tema-oscuro') ? 'oscuro' : 'claro';
        this.textContent = `Cambiar a tema ${temaActual === 'oscuro' ? 'claro' : 'oscuro'}`;
    });
});