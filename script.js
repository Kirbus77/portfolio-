// Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Open and close the menu on small screens
const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("open");
});

links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => links.classList.remove("open"));
});

// p5.js sketch: floating dots behind the hero text
let dots = [];

function setup() {
  const holder = document.getElementById("sketch-holder");
  const canvas = createCanvas(holder.offsetWidth, holder.offsetHeight);
  canvas.parent("sketch-holder");

  for (let i = 0; i < 60; i++) {
    dots.push({
      x: random(width),
      y: random(height),
      size: random(3, 8),
      speed: random(0.2, 1),
    });
  }
}

function draw() {
  background(15, 23, 42);
  noStroke();

  for (const dot of dots) {
    // Dots near the mouse glow brighter
    const near = dist(mouseX, mouseY, dot.x, dot.y) < 120;
    fill(74, 222, 128, near ? 255 : 90);
    circle(dot.x, dot.y, dot.size);

    dot.y -= dot.speed;
    if (dot.y < 0) {
      dot.y = height;
      dot.x = random(width);
    }
  }
}

function windowResized() {
  const holder = document.getElementById("sketch-holder");
  resizeCanvas(holder.offsetWidth, holder.offsetHeight);
}
