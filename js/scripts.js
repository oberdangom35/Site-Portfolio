// --------------------
// FORMULÁRIO DE CONTATO
// --------------------
document.getElementById("formContato").addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Captura os valores do formulário
    const assunto = document.getElementById("assunto").value;
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    const confirmacao = document.getElementById("confirmacao").checked;
    
    // Validação básica
    if (!assunto || assunto === "") {
        alert("Por favor, selecione um assunto.");
        return;
    }
    
    if (!nome.trim()) {
        alert("Por favor, preencha seu nome.");
        return;
    }
    
    if (!email.trim() || !email.includes("@")) {
        alert("Por favor, preencha um e-mail válido.");
        return;
    }
    
    if (!mensagem.trim()) {
        alert("Por favor, escreva uma mensagem.");
        return;
    }
    
    if (!confirmacao) {
        alert("Por favor, confirme que as informações estão corretas.");
        return;
    }
    
    // Exibe mensagem de confirmação
    alert(`Mensagem enviada com sucesso!\n\nAssunto: ${assunto}\nNome: ${nome}\nE-mail: ${email}\n\nObrigado por entrar em contato!`);
    
    // Reseta o formulário
    e.target.reset();
});

// --------------------
// TEMA (claro/escuro)
// --------------------
// O tema é aplicado automaticamente via CSS @media (prefers-color-scheme)

// --------------------
// FECHAR MENU MOBILE AUTOMATICAMENTE
// --------------------
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links do menu
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Adiciona evento de clique em cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Verifica se o menu está expandido (visível em mobile)
            if (navbarCollapse.classList.contains('show')) {
                // Usa o Bootstrap para fechar o menu
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
});

// --------------------
// ANIMAÇÃO DOS CARDS - FORMAÇÃO
// --------------------
// Expande cards em dispositivos touch (mobile/tablet)
document.addEventListener('DOMContentLoaded', function() {
    const formacaoCards = document.querySelectorAll('#formacao .card');
    
    // Detecta se é dispositivo touch
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        formacaoCards.forEach(card => {
            card.addEventListener('click', function() {
                // Remove classe expanded de outros cards
                formacaoCards.forEach(c => {
                    if (c !== card) {
                        c.classList.remove('expanded');
                    }
                });
                
                // Toggle classe expanded no card clicado
                this.classList.toggle('expanded');
            });
        });
    }
    
    // Adiciona efeito de entrada suave nos cards ao fazer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    formacaoCards.forEach(card => {
        observer.observe(card);
    });
    
    // --------------------
    // BOTÃO SCROLL TO TOP
    // --------------------
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    // Mostra/esconde botão baseado no scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Scroll suave ao topo ao clicar
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // --------------------
    // BOOTSTRAP TOOLTIPS
    // --------------------
    // Inicializa todos os tooltips do Bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    // --------------------
    // ANIMAÇÃO DOS LINKS SOCIAIS
    // --------------------
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.5s ease';
        });
        
        link.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
});
