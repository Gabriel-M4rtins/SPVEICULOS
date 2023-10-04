document.getElementById('next').onclick = function () {
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft += widthItem;
}

document.getElementById('prev').onclick = function () {
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft -= widthItem;
}


const toggleBtn = document.querySelector('toggle-btn')
const toggleBtnIcon = document.querySelector('toggle-btn i')
const dropDownMenu = document.querySelector('dropdown-menu')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-sloid fa-xmark'
  : 'fa-solid fa-bars'  
}