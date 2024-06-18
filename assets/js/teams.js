const titleElement = document.getElementById('Title-Main-Content-Bottom-Number-2');

function animateOnScroll() {
    const titleRect = titleElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (titleRect.top <= windowHeight * 0.8) {
        titleElement.classList.add('show');
    } else {
        titleElement.classList.remove('show');
    }
}
const cards = document.querySelectorAll('.Card-User-All');
const animationDelay = 100; 

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else { 
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.5
});

cards.forEach((card, index) => {
  observer.observe(card);
  card.style.transitionDelay = `${index * animationDelay}ms`;
});



window.addEventListener('scroll', animateOnScroll);

    const burgerMenu = document.querySelector('.burger-menu');
    const menuContent = document.querySelector('.menu-content');

    burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    menuContent.classList.toggle('show');
    });




    function ScrollUpSite() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }