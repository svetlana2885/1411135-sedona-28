var link = document.querySelector('.modal-form_header');
var popup = document.querySelector('.modal-form_body');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.toggle('modal-show');
});
