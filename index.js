window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

function closeMenu() {
  document.getElementById('menu-toggle').checked = false;
}

// Scroll interaction for nav
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Close the mobile menu
function closeMenu() {
  document.getElementById('menu-toggle').checked = false;
}

// Logo animation
document.addEventListener('DOMContentLoaded', () => {
  const bulb = document.getElementById('bulb');
  bulb.addEventListener('mouseenter', () => {
    bulb.classList.add('glow');
  });
  bulb.addEventListener('mouseleave', () => {
    bulb.classList.remove('glow');
  });
});

