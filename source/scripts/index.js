/* в этот файл добавляет скрипты*/
const menuBtn = document.querySelector('.burger');
const menu = document.querySelector('.main-header__menu');

if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

menuBtn.addEventListener('click', (item) => {
  item.preventDefault();
  menu.classList.toggle('is-open');
  menuBtn.classList.toggle('is-open');
});

