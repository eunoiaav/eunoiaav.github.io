// FADE IN INTERSECTION OBSERVERS
const fadeInNodes = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px 100px 0px",
};

const appearOnScroll = new IntersectionObserver((fadeInNodes) => {
  fadeInNodes.forEach((node) => {
    if (!node.isIntersecting) {
      return;
    } else {
      node.target.classList.add("appear");
      appearOnScroll.unobserve(node.target);
    }
  });
}, appearOptions);

fadeInNodes.forEach((fadeInElement) => {
  appearOnScroll.observe(fadeInElement);
});
