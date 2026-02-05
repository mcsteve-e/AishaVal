const container = document.querySelector(".container");
for (var i = 1; i <= 100; i++) {
  const hearts = document.createElement("div");
  hearts.classList.add("heart");
  container.appendChild(hearts);
}

function animateHearts() {
  // Get viewport dimensions for responsive animation
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Adjust translation ranges based on viewport size
  // Hearts should generally stay within or slightly outside the viewport
  // Max translation X: half of viewport width, ensuring some can go off-screen
  // Max translation Y: half of viewport height
  const maxTranslateX = viewportWidth / 1.5; // Allow them to go a bit further than half
  const maxTranslateY = viewportHeight / 1.5;

  anime({
    targets: ".heart",
    translateX: function () {
      return anime.random(-maxTranslateX, maxTranslateX);
    },
    translateY: function () {
      return anime.random(-maxTranslateY, maxTranslateY);
    },
    rotate: 45,
    scale: function () {
      return anime.random(1, 5);
    },
    easing: "easeInOutBack",
    duration: 1000,
    delay: anime.stagger(10),
    complete: animateHearts,
  });
}

animateHearts();