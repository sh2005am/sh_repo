function toggleMenu() {
    const header = document.querySelector('.header');
    header.classList.toggle('active'); //  <--  This is the key line!
};
let prevScroll = window.pageYOffset;
window.onscroll = () => {
  document.querySelector('header').style.top = (prevScroll > window.pageYOffset) ? '0' : '-100px';
  prevScroll = window.pageYOffset;
};
if (window.innerWidth <= 768) {
    document.querySelector('.logo').textContent="Deepmind";
}function updateLogo() {
    const logo = document.querySelector('.logo');
    if (window.innerWidth <= 768) {
      logo.textContent = "Deepmind";
    } else {
      logo.textContent = "Google Deepmind";
    }
  }
  window.addEventListener('load', updateLogo);
  window.addEventListener('resize', updateLogo);
  