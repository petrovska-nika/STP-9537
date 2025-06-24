const modal = document.querySelector('.modal-cookies');
const acceptBtn = document.getElementById('acceptCookies');
const declineBtn = document.getElementById('declineCookies');

const cookieConsent = localStorage.getItem('cookieConsent');

if (cookieConsent) {
  modal.style.display = 'none';
}

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'accepted');
  modal.style.display = 'none';
});

declineBtn.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'declined');
  modal.style.display = 'none';
});
