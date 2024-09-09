document.addEventListener("DOMContentLoaded", function () {
    const openMenuButton = document.querySelector(".burger__menu-open");
    const closeMenuButton = document.querySelector(".burger__menu-close");
    const mobileMenu = document.querySelector(".burger__menu");
  
    // Додаємо функціональність тільки для екранів менше 768 пікселів
    if (window.innerWidth <= 767.9) {
      openMenuButton.addEventListener("click", function () {
        mobileMenu.style.display = "block"; // Відобразити меню
        openMenuButton.style.display = "none"; // Приховати кнопку відкриття
        closeMenuButton.style.display = "block"; // Відобразити кнопку закриття
      });
  
      closeMenuButton.addEventListener("click", function () {
        mobileMenu.style.display = "none"; // Приховати меню
        openMenuButton.style.display = "block"; // Відобразити кнопку відкриття
        closeMenuButton.style.display = "none"; // Приховати кнопку закриття
      });
    } else {
      openMenuButton.style.display = "none"; // Приховати кнопку відкриття
    }
  
    // Додаємо обробник подій для зміни розміру вікна
    window.addEventListener("resize", function () {
      if (window.innerWidth > 767.9) {
        openMenuButton.style.display = "none"; // Приховати кнопку відкриття
      } else {
        openMenuButton.style.display = "block"; // Відобразити кнопку відкриття
      }
    });
  });