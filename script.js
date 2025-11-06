// Smooth scroll untuk menu navigasi
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash !== '') {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
