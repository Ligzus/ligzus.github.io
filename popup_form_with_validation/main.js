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

  