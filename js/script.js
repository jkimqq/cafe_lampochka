
    function setLanguage(lang) {
        const realLang = lang === 'kor' ? 'en' : lang;
        localStorage.setItem('language', lang);
      
        fetch(`js/lang/${realLang}.json`)
          .then(res => res.json())
          .then(translations => {
            document.querySelectorAll('[data-i18n]').forEach(el => {
              const key = el.getAttribute('data-i18n');
              if (translations[key]) {
                el.textContent = translations[key];
              }
            });
      
            // Подсветка активной кнопки
            document.querySelectorAll('.lang-btn').forEach(btn => {
              btn.classList.remove('border-[#DDB3BE]', 'ring-2', 'ring-[#DDB3BE]');
            });
      
            const activeBtn = document.getElementById(`lang-${lang}`);
            if (activeBtn) {
              activeBtn.classList.add('border-[#DDB3BE]', 'ring-2', 'ring-[#DDB3BE]');
            }
          });
      }
      
      document.addEventListener("DOMContentLoaded", () => {
        const savedLang = localStorage.getItem("language") || "ru";
        setLanguage(savedLang);
      });