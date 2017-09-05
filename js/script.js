var modallink = document.querySelector('.address-block__button');
var modalwindow = document.querySelector('.modal-feedback');
var modalclose = document.querySelector('.modal-feedback__close-button');
var modalname = modalwindow.querySelector('[name=feedback-name]');
var modalemail = modalwindow.querySelector('[name=feedback-email]');
var modaltext = modalwindow.querySelector('[name=feedback-text]');
var modalform = modalwindow.querySelector('form');
var storagemodalemail = localStorage.getItem('feedback-email');
var storagemodalname = localStorage.getItem('feedback-name');
var storagelogin = localStorage.getItem('login')
var login = document.querySelector('[name=email-login');
var textinput = document.querySelectorAll('.text-input');
var labelplaceholder = document.querySelectorAll('.label-as-placeholder');

modallink.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalwindow.classList.toggle('modal-open');
  if (storagemodalname && storagemodalemail) {
    modalname.value = storagemodalname;
    modalemail.value = storagemodalemail;
  }
  else {
    modalname.focus();
  }
});
modalclose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalwindow.classList.remove('modal-open');
  modalwindow.classList.remove('modal-error');
});
modalform.addEventListener('submit', function (evt) {
  if (!modalname.value || !modalemail.value || !modaltext.value) {
    evt.preventDefault();
    modalwindow.classList.add('modal-error');
  }
  else {
    localStorage.setItem('feedback-name', modalname.value);
    localStorage.setItem('feedback-email', modalemail.value);
  }
});
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalwindow.classList.contains('modal-open')) {
      modalwindow.classList.remove('modal-open');
    }
  }
});

for (var i = 1; i < textinput.length; i++ ) {
  if (textinput.value) {
    labelplaceholder[i].classList.add('label-as-placeholder_active');
  }
}
