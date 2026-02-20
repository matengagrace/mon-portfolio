// Loader Animation
const loader = document.getElementById("loader");
const mainContent = document.getElementById("mainContent");
const progressText = document.getElementById("progressText");

let progress = 0;
const interval = setInterval(() => {
  progress += 5;
  progressText.textContent = `Chargement... ${progress}%`;

  if (progress >= 100) {
    clearInterval(interval);
    setTimeout(() => {
      loader.style.display = "none";
      mainContent.classList.remove("hidden");
      startTyping();
    }, 500);
  }
}, 80);

// Typing Effect
const text = "Développeur Web Passionné.";
const typingElement = document.getElementById("typingTitle");
let index = 0;

function startTyping() {
  const typingInterval = setInterval(() => {
    typingElement.textContent = text.slice(0, index + 1) + "|";
    index++;
    if (index === text.length) clearInterval(typingInterval);
  }, 80);
}

// Current Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle.style.cursor = 'pointer';

menuToggle.addEventListener("click", function (event) {
  if (mobileMenu.classList.contains("hidden")) {
    event.target.setAttribute("src", "src/images/icones/close.png");
    mobileMenu.classList.replace("hidden", "block");
  } else {
    event.target.setAttribute("src", "src/images/icones/menu.png");
    mobileMenu.classList.replace("block", "hidden");
  }
});

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
  });
});
