document.addEventListener('DOMContentLoaded', toggleModal);

function toggleModal() {
  var link = document.querySelector('.modal-form_header');
  var popup = document.querySelector('.modal-form');

  const toggle_class = 'modal-toggle-show';

  popup.classList.toggle(toggle_class);

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    console.log('click');
    popup.classList.toggle(toggle_class);
  });
}
