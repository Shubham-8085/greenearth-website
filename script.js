// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Form Button Event
  document.getElementById("sendBtn").addEventListener("click", function(){
    alert("Thank you for contacting GreenEarth! 🌿 We'll get back to you soon.");
  });
  
  // 🌗 Light/Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});


// ✨ Scroll Animation on View
const animatedElements = document.querySelectorAll("[data-animate]");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  
  animatedElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run on page load


// 💚 Join Now button click
document.getElementById("joinBtn").addEventListener("click", () => {
    alert("🌿 Thank you for joining the GreenEarth movement!");
  });

  



  const elements = document.querySelectorAll('[data-animate]');
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
});



const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
