/* в этот файл добавляет скрипты*/
const menuBtn = document.querySelctor(".burger");
const menu = document.querySelctor(".main-header__navigation");

if (document.querySelector(".no-js")) {
  document.querySelector(".no-js").classList.remove("no-js");
}

menuBtn.addEventListener("click", (item) => {
  item.preventDefault();
  menu.classList.toggle("main-header__navigation--closed");
});
