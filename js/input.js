// Отримуємо всі поля вводу
const inputs = document.querySelectorAll('.form__input, .form__subscribe-input');

// Додаємо обробники подій для кожного поля вводу
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.validity.valid) {
      input.style.borderColor = 'green'; // Зелена рамка для коректного вводу
    } else {
      input.style.borderColor = 'red'; // Червона рамка для помилкового вводу
    }
  });

  // Додаємо обробник події "focus" для обнулення кольору при фокусуванні
  input.addEventListener('focus', () => {
    input.style.borderColor = ''; // Обнулення рамки при фокусуванні
  });
});
