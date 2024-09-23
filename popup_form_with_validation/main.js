document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const openBtn = document.getElementById('open-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const form = document.getElementById('modal-form');
    const submitBtn = document.getElementById('submit-btn');
  
    openBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    cancelBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    form.addEventListener('input', function() {
      if (form.checkValidity()) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      modal.style.display = 'none';
    });
});


function previewImage(event) {
  let input = event.target;
  let preview = input.nextElementSibling.querySelector('img');
  let file = input.files[0];
  let reader = new FileReader();

  reader.onload = function() {
      preview.src = reader.result;
  };

  reader.readAsDataURL(file);
}

document.addEventListener("DOMContentLoaded", function() {
  const phoneInput = document.getElementById('phone-modal');
  
  phoneInput.addEventListener('input', function(e) {
      let value = phoneInput.value.replace(/\D/g, '');
      let formattedValue = '+7 (';

      if (value.length > 1) {
          formattedValue += value.substring(1, 4);
      }
      if (value.length >= 4) {
          formattedValue += ') ' + value.substring(4, 7);
      }
      if (value.length >= 7) {
          formattedValue += '-' + value.substring(7, 9);
      }
      if (value.length >= 9) {
          formattedValue += '-' + value.substring(9, 11);
      }

      phoneInput.value = formattedValue;
  });

  phoneInput.addEventListener('keydown', function(e) {
      // Запрещаем удаление первых 3 символов ("+7 (")
      if (phoneInput.selectionStart < 4 && (e.key === 'Backspace' || e.key === 'Delete')) {
          e.preventDefault();
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById('email-input');
  const emailError = document.getElementById('email-error');

  emailInput.addEventListener('input', function() {
      const emailValue = emailInput.value;

      // Простая регулярка для проверки базового формата e-mail
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (emailValue === '' || emailPattern.test(emailValue)) {
          // Если пусто или формат правильный - скрываем ошибку
          emailError.style.display = 'none';
          emailInput.classList.remove('error');
      } else {
          // Если формат неверный - показываем ошибку
          emailError.style.display = 'block';
          emailInput.classList.add('error');
      }
  });
});
  