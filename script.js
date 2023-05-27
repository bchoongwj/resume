// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth'
    });

    // Highlight
    target.classList.add('highlight');
    // Remove highlight after 1.5s
    setTimeout(() => {
      target.classList.remove('highlight');
    }, 1500);

//    NOT WORKING :(
//     window.scrollBy(0, 0);
  });
});
