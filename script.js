function createRaindrop() {
  const raindrop = document.createElement("div");
  raindrop.classList.add("raindrop");
  raindrop.style.left = Math.random() * window.innerWidth + "px";
  const duration = Math.random() * 1 + 0.5;
  raindrop.style.animationDuration = duration + "s";
  document.body.appendChild(raindrop);
  setTimeout(() => {
    raindrop.remove();
  }, duration * 1000);
}

function randomRain() {
  createRaindrop();
  const randomDelay = Math.random() * 140 + 25;
  setTimeout(randomRain, randomDelay);
}

randomRain();
