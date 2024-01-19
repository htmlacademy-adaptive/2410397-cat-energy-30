/* в этот файл добавляет скрипты*/
const menu = document.querySelector('.main-header__navigation');
const menuBtn = menu.querySelector('.burger');

if (document.querySelector('.main-header__menu--no-js')) {
  document.querySelector('.main-header__menu--no-js').classList.remove('main-header__menu--no-js');
}

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.toggle('is-open');
  menuBtn.classList.toggle('is-open');
});

// const menu = document.querySelector('.main-header__menu');
// const menuBtn = menu.querySelector('.burger');
// // const map = document.querySelector('.contacts__map');

// menu.classList.remove('main-header__menu--no-js');
// // map.classList.remove('contacts__map--no-js');

// menuBtn.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   menu.classList.toggle('is-open');
//   menuBtn.classList.toggle('is-open');
// });


// const menuBtn = document.querySelector('.burger');
// const menu = document.querySelector('.main-header__menu');

// if (document.querySelector('.no-js')) {
//   document.querySelector('.no-js').classList.remove('no-js');
// }

// menuBtn.addEventListener('click', (item) => {
//   item.preventDefault();
//   menu.classList.toggle('main-header__navigation--closed');
// });
