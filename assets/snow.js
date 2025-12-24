(() => {
  const MAX_FLAKES = 160;
  const canvas = document.createElement("canvas");
  canvas.className = "snow-canvas";
  const ctx = canvas.getContext("2d");

  let width = 0;
  let height = 0;
  let flakes = [];

  const resetFlake = (flake) => {
    flake.x = Math.random() * width;
    flake.y = Math.random() * -height;
    flake.radius = Math.random() * 2 + 1;
    flake.speedY = Math.random() * 1 + 0.5;
    flake.wind = Math.random() * 0.6 - 0.3;
    flake.angle = Math.random() * Math.PI * 2;
  };

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    flakes.forEach((flake) => resetFlake(flake));
  };

  const step = () => {
    ctx.clearRect(0, 0, width, height);

    for (const flake of flakes) {
      flake.angle += 0.01;
      flake.x += Math.sin(flake.angle) * 0.5 + flake.wind;
      flake.y += flake.speedY;

      if (flake.y > height || flake.x < -10 || flake.x > width + 10) {
        resetFlake(flake);
        flake.y = -10;
      }

      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      ctx.fill();
    }

    requestAnimationFrame(step);
  };

  const init = () => {
    document.body.appendChild(canvas);
    flakes = Array.from({ length: MAX_FLAKES }, () => ({}));
    resize();
    window.addEventListener("resize", resize, { passive: true });
    step();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
