document.addEventListener('DOMContentLoaded', () => {

    // Lógica del Menú Hamburguesa Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = menuToggle ? menuToggle.querySelector('i') : null;

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Cambia el ícono entre hamburguesa (list) y cruz (x)
            if (menuIcon) {
                if (navLinks.classList.contains('active')) {
                    menuIcon.className = 'ph ph-x';
                } else {
                    menuIcon.className = 'ph ph-list';
                }
            }
        });

        // Cerrar el menú desplegable al tocar cualquier link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (menuIcon) menuIcon.className = 'ph ph-list';
            });
        });
    }

    // Lógica del Quiz (Mini Examen)
    const quizOptions = document.querySelectorAll('.quiz-option');
    
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Prevenir múltiples clics
            if (this.parentNode.querySelector('.correct') || this.parentNode.querySelector('.incorrect')) {
                return;
            }

            const isCorrect = this.getAttribute('data-correct') === 'true';

            // Deshabilitar botones
            quizOptions.forEach(btn => btn.disabled = true);

            if (isCorrect) {
                this.classList.add('correct');
            } else {
                this.classList.add('incorrect');
                // Mostrar la correcta
                const correctBtn = document.querySelector('.quiz-option[data-correct="true"]');
                if (correctBtn) correctBtn.classList.add('correct');
            }
        });
    });

    // Lógica del Acordeón (FAQ)
    const faqItems = document.querySelectorAll('.faq-question');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            const answer = item.nextElementSibling;

            // Cerrar todos los demás
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                if (otherItem.nextElementSibling) {
                    otherItem.nextElementSibling.style.maxHeight = null;
                }
            });

            // Si no estaba activo, lo abrimos
            if (!isActive && answer) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});