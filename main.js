document.addEventListener('DOMContentLoaded', () => {
    
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
                correctBtn.classList.add('correct');
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
                otherItem.nextElementSibling.style.maxHeight = null;
            });

            // Si no estaba activo, lo abrimos
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});