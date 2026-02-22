document.addEventListener('DOMContentLoaded', () => {
    const langPicker = document.getElementById('language-picker');
    
    langPicker.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        const translatableElements = document.querySelectorAll('[data-en]');
        
        translatableElements.forEach(el => {
            el.textContent = el.getAttribute(`data-${selectedLang}`);
        });
    });
});