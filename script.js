document.addEventListener('DOMContentLoaded', function() {
    
    // हेडर की ऊंचाई को एक बार निकाल लें (FAQ लॉजिक में इसका उपयोग नहीं होता)
    const headerElement = document.querySelector('header');
    const headerHeight = headerElement ? headerElement.offsetHeight : 0; 
    
    // 1. Smooth Scrolling Logic
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    // हेडर की ऊंचाई को ऑफसेट के रूप में उपयोग करें
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. FAQ Accordion Logic (Accordion effect included)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            
            // वर्तमान में खुले हुए जवाबों को बंद करें (Accordion effect)
            faqQuestions.forEach(item => {
                if (item !== this && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.nextElementSibling.style.maxHeight = null;
                    // बंद करते समय पैडिंग केवल 0px ऊपर/नीचे दें
                    item.nextElementSibling.style.padding = '0 15px 0 15px'; 
                }
            });

            // क्लिक किए गए जवाब को खोलें/बंद करें
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            
            if (answer.style.maxHeight) {
                // बंद करें
                answer.style.maxHeight = null;
                // बंद करते समय पैडिंग केवल 0px ऊपर/नीचे दें
                answer.style.padding = '0 15px 0 15px';
            } else {
                // खोलें
                // 30px बफर पैडिंग जोड़ें ताकि max-height ठीक से काम करे
                answer.style.maxHeight = answer.scrollHeight + 30 + "px"; 
                // खुलने पर पैडिंग लागू करें
                answer.style.padding = '15px 15px 15px 15px'; 
            }
        });
    });
});
