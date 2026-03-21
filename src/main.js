// Mobile Menu
const hamburger = document.querySelector(".hamburger");
const nav = document.getElementById("nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.textContent = nav.classList.contains("active") ? "✕" : "☰";
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      hamburger.textContent = "☰";
    });
  });
}

/* =========================
   Header scroll effect
========================= */
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }
});

/* =========================
   Scroll reveal animation
========================= */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

/* =========================
   Testimonial slider
========================= */
let slideIndex = 0;
const slider = document.getElementById("testimonialSlider");

if (slider) {
  const testimonials = slider.children;

  function slide() {
    slideIndex = (slideIndex + 1) % testimonials.length;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  setInterval(slide, 5000);
}

/* =========================
   Contact form
========================= */
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! We'll reply on WhatsApp shortly ❤️");
  });
}


  const galleryImages = [
    
    {
      src: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
      alt: "Assorted colorful cupcakes in Nigerian bakery showcase"
    },
   
    {
      src: "https://images.pexels.com/photos/15307374/pexels-photo-15307374/free-photo-of-piece-of-cake-on-the-plate.jpeg",
      alt: "Rich chocolate layered cake with fresh mint"
    },
    {
      src: "https://images.pexels.com/photos/6990073/pexels-photo-6990073.jpeg",
      alt: "Elegant strawberry shortcake with glossy finish"
    },
    
    {
      src: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
      alt: "Assorted premium cupcakes in bakery display"
    },

    {
      src: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w",
      alt: "Assorted premium cupcakes in bakery display"
    },
    {
      src: "https://images.unsplash.com/photo-1706463996554-6c6318946b3f?q",
      alt: "Assorted premium cupcakes in bakery display"
    },
    {
      src: "https://images.unsplash.com/photo-1668574380060-2c16ebe758e2?q",
      alt: "Assorted premium cupcakes in bakery display"
    },
    
    
  ];

  const grid = document.getElementById('galleryGrid');

  galleryImages.forEach(item => {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.loading = "lazy";           /* speeds up page load */
    grid.appendChild(img);
  });


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const submitBtn = document.getElementById('submitBtn');
  const originalText = submitBtn.innerHTML;

  // Show loading state
  submitBtn.innerHTML = 'Opening WhatsApp...';
  submitBtn.disabled = true;

  const name    = document.getElementById('name').value.trim();
  const phone   = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !phone || !message) {
    alert("Please fill all fields");
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    return;
  }

  const text = `Hello Luciana Home of Cakes!%0A%0A` +
               `Name: ${encodeURIComponent(name)}%0A` +
               `WhatsApp: ${encodeURIComponent(phone)}%0A%0A` +
               `Message:%0A${encodeURIComponent(message)}`;

  // Safer window.open with noopener + noreferrer
  window.open(
    `https://wa.me/2347065346336?text=${text}`, 
    '_blank', 
    'noopener,noreferrer'
  );

  // Reset button after 2 seconds
  setTimeout(() => {
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    alert("✅ Message sent! WhatsApp should open now.");
  }, 2000);
});
