const modal = document.querySelector('.modal-cookies');
const acceptBtn = document.getElementById('acceptCookies');
const declineBtn = document.getElementById('declineCookies');

// Перевіряємо, чи вже вибрали кукі раніше
const cookieConsent = localStorage.getItem('cookieConsent');

if (cookieConsent) {
  // Якщо вже вибрали — ховаємо модалку
  modal.style.display = 'none';
}

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'accepted');
  modal.style.display = 'none';
  // Тут можна додати код для увімкнення кукі, аналітики тощо
});

declineBtn.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'declined');
  modal.style.display = 'none';
  // Можна додати код для блокування кукі або іншої логіки
});
