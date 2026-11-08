// Mobile menu: open/close when clicking the ☰ button
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Close the menu after clicking a link (on mobile)
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});

// Current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();
