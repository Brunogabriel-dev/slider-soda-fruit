let list = document.querySelectorAll(' .list .item');
let carousel = document.querySelector('.carousel');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let mockup = document.querySelector('.mockup');

let count = list.length;
let active = 0;
let leftMockup = 0;
let left_each_item = 100 / (list.length - 1);

next.onclick = () => {
  active = active >= count - 1 ? 0 : active + 1;
  leftMockup = leftMockup + left_each_item;
  changeCarousel();
}
prev.onclick = () => {
  active = active <= 0 ? count - 1 : active - 1;
}