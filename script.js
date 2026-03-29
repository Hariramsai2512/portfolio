// Typing Animation
const titleText = "Java Developer | Software Engineer";
let charIndex = 0;

function typeWriter() {
  if (charIndex < titleText.length) {
    document.getElementById("typing-text").innerHTML += titleText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}

// Back to Top functionality
const scrollBtn = document.getElementById("backToTop");

window.onscroll = function() {
  if (window.pageYOffset > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Initialize
window.onload = typeWriter;