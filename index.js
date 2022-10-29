// FADE IN INTERSECTION OBSERVERS
const fadeInNodes = document.querySelectorAll('.fade-in-observer');

const observer = new IntersectionObserver(
  (fadeInNodes) => {
    fadeInNodes.forEach((node) => {
      if (node.isIntersecting) {
        node.target.classList.add('fade-in');
        observer.unobserve(node.target);
      }
    });
  },
  {
    threshold: 1,
  },
);

fadeInNodes.forEach((fadeInElement) => {
  observer.observe(fadeInElement);
});
