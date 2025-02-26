function toggleMenu() {
    const header = document.querySelector('.header');
    header.classList.toggle('active'); //  <--  This is the key line!
}
let prevScroll = window.pageYOffset;
window.onscroll = () => {
  document.querySelector('header').style.top = (prevScroll > window.pageYOffset) ? '0' : '-100px';
  prevScroll = window.pageYOffset;
};