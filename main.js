document.addEventListener('DOMContentLoaded', () => {

    // Lógica del Menú Hamburguesa Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = menuToggle ? menuToggle.querySelector('i') : null;

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            if (menuIcon) {
                if (navLinks.classList.contains('active')) {
                    menuIcon.className = 'ph ph-x';
                } else {
                    menuIcon.className = 'ph ph-list';
                }
            }
        });

        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (menuIcon) menuIcon.className = 'ph ph-list';
            });
        });
    }

    
    const faqItems = document.querySelectorAll('.faq-question');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            const answer = item.nextElementSibling;

            
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                if (otherItem.nextElementSibling) {
                    otherItem.nextElementSibling.style.maxHeight = null;
                }
            });

            
            if (!isActive && answer) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // modal de reproducción
    const videoCards = document.querySelectorAll('.video-card');
    const videoModal = document.getElementById('video-modal');
    const modalPlayer = document.getElementById('modal-video-player');
    const modalTitle = document.getElementById('video-modal-title');
    const closeVideoBtn = document.getElementById('close-video-modal');

    function cerrarVideoModal() {
        if (!videoModal || !modalPlayer) return;
        videoModal.classList.remove('active');
        modalPlayer.pause();
        modalPlayer.removeAttribute('src');
        modalPlayer.load();
    }

    if (videoCards.length > 0 && videoModal && modalPlayer) {
        videoCards.forEach(card => {
            card.addEventListener('click', () => {
                const videoSrc = card.getAttribute('data-video');
                const titleText = card.getAttribute('data-title');

                if (videoSrc) {
                    modalTitle.textContent = titleText || 'Clase en video';
                    modalPlayer.src = videoSrc;
                    videoModal.classList.add('active');
                    modalPlayer.play().catch(() => {
                        
                    });
                }
            });
        });

        if (closeVideoBtn) {
            closeVideoBtn.addEventListener('click', cerrarVideoModal);
        }

        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                cerrarVideoModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                cerrarVideoModal();
            }
        });
    }


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});