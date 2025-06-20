document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('nav .menu a');
  const bulb = document.getElementById('bulb');

  // Add scroll class to nav
  const handleScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run on load in case already scrolled

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(() => {
        menuToggle.checked = false;
      }, 100); // Delay for smooth scrolling
    });
  });

  // Logo glow effect on hover
  if (bulb) {
    bulb.addEventListener('mouseenter', () => {
      bulb.classList.add('glow');
    });
    bulb.addEventListener('mouseleave', () => {
      bulb.classList.remove('glow');
    });
  }
});
