

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const form = document.getElementById('form__body');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission
  const nameInput = document.querySelector('.form__input-name');
  const emailInput = document.querySelector('.form__input-email');
  const messageInput = document.querySelector('.form__input-message');

  const nameLabel = document.querySelector('.form__label-name');
  const emailLabel = document.querySelector('.form__label-email');
  const messageLabel = document.querySelector('.form__label-message');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  let isValid = true;

  nameInput.classList.remove('invalid');
  emailInput.classList.remove('invalid');
  messageInput.classList.remove('invalid');

  nameLabel.style.display = 'none';
  emailLabel.style.display = 'none';
  messageLabel.style.display = 'none';

  if (name === '') {
    nameInput.classList.add('invalid');
    nameLabel.style.display = 'block';
    isValid = false;
  }

  // Validate email
  if (!isValidEmail(email)) {
    emailInput.classList.add('invalid');
    emailLabel.style.display = 'block';
    isValid = false;
  }

  if (message === '') {
    messageInput.classList.add('invalid');
    messageLabel.style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    // Create a JavaScript object to hold the form data
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    // Convert the object to a JSON string
    const formDataJson = JSON.stringify(formData);

    // Log the JSON string to the console
    console.log(formDataJson);

    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Текст:', message);

    // Reset the form fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
});
