document.getElementById('next').onclick = function () {
  const widthItem = document.querySelectorAll('.item').offsetWidth;
  document.getElementById('formList').scrollLeft += widthItem;
}

document.getElementById('prev').onclick = function () {
  const widthItem = document.querySelectorAll('.item').offsetWidth;
  document.getElementById('formList').scrollLeft -= widthItem;
}
