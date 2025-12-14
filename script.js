document.addEventListener('DOMContentLoaded', function() {
    // 1. Smooth Scrolling Logic
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // हेडर की ऊंचाई के लिए ऑफसेट
                const headerHeight = document.querySelector('header').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            
            // वर्तमान में खुले हुए जवाबों को बंद करें (दूसरे आइटम बंद करने के लिए)
            faqQuestions.forEach(item => {
                if (item !== this && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.nextElementSibling.style.maxHeight = null;
                    item.nextElementSibling.style.padding = '0 20px'; // बंद करते समय पैडिंग रीसेट करें
                }
            });

            // क्लिक किए गए जवाब को खोलें/बंद करें
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            
            if (answer.style.maxHeight) {
                // बंद करें
                answer.style.maxHeight = null;
                answer.style.padding = '0 20px'; // बंद करते समय पैडिंग रीसेट करें
            } else {
                // खोलें
                answer.style.maxHeight = answer.scrollHeight + "px";
                // खुलने पर पैडिंग लागू करें (HTML में p/ul/ol के लिए)
                answer.style.padding = '15px 20px'; 
                answer.style.paddingTop = '0'; 
            }
        });
    });
});

