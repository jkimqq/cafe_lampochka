     function setLanguage(lang) {
        fetch(`js/lang/${lang}.json`)
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
            document.getElementById(`lang-${lang}`).classList.add('border-[#DDB3BE]', 'ring-2', 'ring-[#DDB3BE]');
          });
      }